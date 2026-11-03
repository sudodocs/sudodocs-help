---
title: Protected docs
description: Put a password, single sign-on or your own login page in front of a docs site, or only some folders, and give AI tools an access key.
---

# Protected docs

Keep a site, or part of one, private. Open **Admin Dashboard > Publish**, choose the site, then **Settings > Protect this site**. (If your organization lets Writers manage site settings, Writers see it too.) Choose **how readers get in**:

| Method | Plans | Good for |
|---|---|---|
| **A password** | Pro and Enterprise | A few outside readers who share one password. |
| **Single sign-on** (your identity provider) | Enterprise | Employees, and partner domains you choose, signing in with their company login. |
| **Your own login page** | Enterprise | Readers who already sign in to your product or customer portal. |

> **Signing in to read documentation never signs anyone in to SudoDocs.** A reader gets no account, no seat and no access to the app, whichever method you choose.

Everything is covered, not only the pages: the Markdown copies, `llms.txt`, the sitemap, the search index, the API reference, the MCP server and previews. Search engines are told to stay away. Pages that were cached before may stay visible for up to five minutes after you switch protection on.

## What needs protection

Choose **The whole site** or **Only these folders** (type them as they appear in your addresses, for example `/internal/`). With folders, everything else stays public. The files made from all pages (search index, `llms.txt`, sitemap, MCP) are protected as soon as one folder is, because they contain every page.

## A password

Enter a password of at least 12 characters. SudoDocs stores only a protected fingerprint of it. Readers see a password page and, once they enter it, stay signed in for 7 days in that browser. Setting a **new** password signs everyone out. Repeated wrong guesses are slowed down and blocked for a while.

Changing only the folders does not sign anyone out.

## Single sign-on

First set up your identity provider: [Single sign-on](../admin/sso-setup.md) (OpenID Connect) or [SAML and SCIM](../admin/sso-saml-scim.md). Then choose **Single sign-on** on the site.

**Who may read.** A person needs to pass one of these:

- **People signed in to SudoDocs in this organization.** They open the docs with no second sign-in. This covers your Writers, Reviewers and administrators; it never includes people invited to review a single change by email, and never members of another organization.
- **People who sign in through your identity provider** with an email on the **allowed domains** (empty means your sign-in domain), or one of the **extra email addresses** you list (partners, contractors).
- Optionally **only these groups** (any of them), if your provider sends groups.

Everyone else sees "Your account is not allowed to read these docs", which names no group or domain.

**Folders only some groups may read.** Add one line per folder, for example `/partners/ = partners, vendors`. Anyone who is allowed in reads everything except those folders; the named groups also read their folder. Members of your organization read every folder. Notes:

- People who cannot open every restricted folder cannot use the site search, `llms.txt`, the sitemap or the MCP server (they would reveal the restricted pages); they browse by the navigation. Ask AI answers them only from pages they may read.
- Access keys read everything.
- Changing the list of restricted folders signs everyone out.

## How long readers stay signed in

Choose between 1 and 168 hours (default 8). When the time is up the reader is sent back to sign in; if their provider session is still valid that is silent, and if their account was disabled it fails.

**Be clear about removal.** Someone you remove from your company can keep reading until their reading session ends. To cut this short, lower the session length, or press **Sign everyone out when I save**. Single logout and SCIM end a person's **SudoDocs** session at once, but a reading session lives in a cookie on the documentation site and ends at its expiry or when you sign everyone out. A reader can end their own session at `/_sd/signout` on the documentation address.

## Access keys for AI tools and scripts

An AI tool such as Claude or Cursor cannot sign in through a browser. Under the card, create an **access key** (up to five), give it a name and copy it: it is shown once. The tool sends `Authorization: Bearer <key>` and can read the pages, the Markdown copies, `llms.txt` and the MCP server. Keys survive "Sign everyone out" and password changes; **revoke** a key to cut it off at once.

## Ask AI on protected sites

When [Ask AI](ask-ai.md) is on, a signed-in reader gets answers from the pages that reader may read, and nothing else reaches the model. With folder protection, a reader who is not signed in is answered from the public pages only. Readers who are not signed in on a fully protected site cannot ask.

## Your own login page

Use this when your readers already sign in somewhere else (your product, a customer portal, Auth0, Cognito, Keycloak) and you do not want to set up an identity provider.

**How it works.**

1. A reader opens a protected page. SudoDocs sends the browser to your **login address** with three extra query parameters: `return` (an address on SudoDocs), `site` and `next`.
2. Your page signs the person in however you like.
3. Your server creates a short **signed token** (below) and sends the browser to the `return` address with `&token=<token>` added.
4. SudoDocs checks the token, applies your rules and lets the reader in. SudoDocs never sees a password or your login cookie.

**Set it up.** Choose **Your own login page**, enter the **login address** (it must start with `https://`) and choose how you sign:

- **HS256, a shared secret.** SudoDocs creates the secret and shows it once. Keep it on your server. **Create a new shared secret** makes another one; the previous one keeps working until the next rotation, so you can switch without downtime, and everybody is signed out.
- **RS256 or ES256, your public key.** Give a **JWKS address** (`https://...`) or paste a PEM public key. Your server signs with the private key, which SudoDocs never sees.

Optionally set the **audience** (`aud`), the **issuer** (`iss`), the name of the **groups claim** (default `groups`) and a sign-out address.

**The token** is a standard JWT with these claims:

| Claim | Rule |
|---|---|
| `exp` | **Required.** Expiry, at most **5 minutes** from now. |
| `jti` | **Required.** A unique id. **Every token works once.** |
| `iat` | Recommended. Not older than 5 minutes. |
| `aud`, `iss` | Must match what you configured, if you configured them. |
| `email`, `sub` | Optional. Never stored with a reader. |
| `groups` | Optional array. Used by the "only these groups" and folder rules. |

The algorithm must be the one you chose. Tokens with `alg: none`, a different algorithm, a bad signature, an expired time, a reused `jti` or a wrong audience are refused. Your login page should create the token only **after** it has really signed the person in.

**Example (Python, standard library only):**

```python
import base64, hashlib, hmac, json, time, uuid
from urllib.parse import urlencode

def b64(raw):
    return base64.urlsafe_b64encode(raw).rstrip(b"=").decode()

def sign_token(secret, email="", groups=(), audience=None, ttl=240):
    now = int(time.time())
    claims = {"iat": now, "exp": now + ttl, "jti": str(uuid.uuid4())}  # at most 5 minutes; every token works once
    if email:
        claims.update({"sub": email, "email": email})
    if groups:
        claims["groups"] = list(groups)
    if audience:
        claims["aud"] = audience
    head = b64(json.dumps({"alg": "HS256", "typ": "JWT"}, separators=(",", ":")).encode())
    body = b64(json.dumps(claims, separators=(",", ":")).encode())
    signature = b64(hmac.new(secret.encode(), f"{head}.{body}".encode(), hashlib.sha256).digest())
    return f"{head}.{body}.{signature}"

def redirect_url(return_url, token):
    return return_url + ("&" if "?" in return_url else "?") + urlencode({"token": token})
```

After your login succeeds, redirect the browser to `redirect_url(return_url, sign_token(SECRET, email, groups))`. Any other language works the same way with a JWT library: HS256, the claims above, and `&token=` added to `return`.

**Test it.** Open a protected page in a private window. You should land on your login page, and after signing in on the documentation. If the page says "This sign-in link is not valid or has expired", the `return` address was changed on the way or is older than ten minutes: send the browser to `return` exactly as it arrived.

## What readers see

A reader opens a protected page and is sent to sign in (your provider or your login page). After signing in they land on the page they asked for. Someone who is signed in but not allowed into a folder sees "You are signed in, but your account does not have access to this section." with a link to the start. Someone who is not allowed in at all sees a plain message, never an error code.

## If your plan changes

If an organization moves to a lower plan, protected sites **stay protected**: documentation is never exposed by a downgrade, and the owner can still turn protection off.

## Limits to know about

- A reading session ends at its expiry (or "Sign everyone out"), not when the person's provider session ends.
- Single logout ends **SudoDocs** sessions only, and only for the browser that made the request.
- Groups are read from the sign-in (a `groups` claim or attribute). SudoDocs does not search your directory, and SCIM does not synchronize groups.
- The site health check can only see the password page of a protected site.

## Via the CLI

```
sudodocs publish protect SITE --password-stdin
sudodocs publish protect SITE --password-stdin --path /internal/
sudodocs publish protect-sso SITE ...
sudodocs publish protect-key SITE --label "Claude"
sudodocs publish protect-key-revoke SITE KEY_ID
sudodocs publish protection SITE
sudodocs publish unprotect SITE
```

See [Publish commands](../../cli-guide/user/publish.md#protect-a-site).

---
title: SAML and SCIM
description: Sign in to SudoDocs with SAML 2.0, and create and remove users automatically with SCIM. Provider notes for Okta, Microsoft Entra ID and Google Workspace.
---

# SAML and SCIM

This guide is for the administrator of an **Enterprise** organization. SAML is an alternative to [OpenID Connect](sso-setup.md) for signing in to SudoDocs; SCIM creates and removes users automatically. To protect your documentation with single sign-on, see [Protected docs](../publish/protected-docs.md).

## SAML 2.0

SudoDocs is the **service provider**; your provider is the **identity provider**. Sign-in always starts at SudoDocs.

Open **Admin Dashboard > SSO**, choose **SAML**, enter your **corporate email domain** (for example `company.com`) and save. People with an email on that domain then sign in at **Sign in > Company SSO**. A domain belongs to one organization; if another organization has claimed it, saving is refused. New users who sign in are created as **Writers**, subject to your plan's seats.

**1. Give your provider these three values** (shown on the SSO tab, each with a copy button):

| Value | What it is called in providers |
|---|---|
| Entity ID | Audience, SP Entity ID, Identifier |
| Reply URL (ACS), HTTP-POST | ACS URL, Single sign-on URL, Assertion consumer service |
| Metadata address | Optional: lets some providers import everything at once |

Set the **Name ID format** to **email address**. Send these attributes:

| Attribute | Name | Needed |
|---|---|---|
| Email address | `email` (or `mail`, or the standard email claim) | yes, unless the Name ID is the email |
| Display name | `displayName` | no |
| Groups | `groups` | only if you restrict documentation by group |

If your provider uses other names, type them into **Email attribute**, **Name attribute** and **Groups attribute**.

**2. Tell SudoDocs about your provider.** The easiest way is the **metadata address** your provider shows (a link starting with `https://`). You can also paste the metadata XML, or enter the provider's entity ID, its sign-in address (the HTTP-Redirect one) and its **signing certificate** in PEM format. You can paste several certificates; any is accepted, so your provider can renew without interrupting sign-in.

**3. Choose what the provider signs.** SudoDocs requires a signed response. Most providers (Okta, Microsoft Entra ID, ADFS) sign the **assertion**, the default. Choose **the whole response** if yours signs that. Unsigned responses are always refused.

**4. Press Test sign-in.** A new tab sends you to your provider; when you come back it shows what the provider sent (email, name, groups) and whether the email matches your domain. Nobody is signed in by the test.

### Provider notes

Menu names change; check against your provider's current screens.

*Okta.* Create a **SAML 2.0 app integration**. Single sign-on URL = the Reply URL, Audience URI = the Entity ID, Name ID format = EmailAddress, Application username = Email. Add attribute statements `email`, `displayName` and a group attribute statement named `groups`. After saving, open **Sign On > View SAML setup instructions** and copy the metadata address.

*Microsoft Entra ID.* Create an **Enterprise application > Create your own > Non-gallery**, then **Single sign-on > SAML**. Identifier = the Entity ID, Reply URL = the Reply URL. In **Attributes & Claims** make the unique user identifier `user.mail` with format Email address, and add a `groups` claim if needed. Copy the **App Federation Metadata Url**. Assign the users or groups who may sign in.

*Google Workspace.* Create a **custom SAML app** (Apps > Web and mobile apps). ACS URL = the Reply URL, Entity ID = the Entity ID, Name ID format = EMAIL, Name ID = Basic Information > Primary email. Download the metadata and paste it. Turn the app ON for the right organizational units.

*OneLogin, Auth0, Ping, ADFS.* The same three values and attributes apply. ADFS and some Ping setups require signed sign-in requests: switch on **Sign sign-in requests** below.

### More options (all off until you turn them on)

- **Sign-out address.** Enter your provider's single logout address (the HTTP-Redirect one) to turn on **single logout for SudoDocs**: signing out of SudoDocs also tells your provider, and when your provider signs someone out the browser's SudoDocs session ends. Add the **Single logout address** shown on the SSO tab to your provider. Logout requests from your provider must be signed, or they are ignored. Single logout does not end reading sessions on protected documentation.
- **Sign sign-in requests.** SudoDocs creates a key pair for the domain and signs every request; the certificate is in the metadata.
- **Allow sign-in that starts at the provider.** Lets people click the SudoDocs tile in their provider's app list. Off by default because it is the less safe flow; it still needs a valid signature and the right audience, and works once. It signs people in to **SudoDocs only**, never to protected documentation.

### What SudoDocs checks on every response

The signature (against your certificates), the audience, the destination and recipient, that the response answers a sign-in SudoDocs started, that it has not expired or been used before, and that the email is on your domain. Documents that contain a DOCTYPE or entities are refused. Anything else is refused with a plain message that reveals nothing about your configuration.

## SCIM: create and remove users automatically

Without SCIM, SudoDocs creates a user when someone first signs in, and a person who leaves keeps their account until an administrator disables it. With SCIM your provider does both.

1. On **Admin Dashboard > SSO**, press **Turn on SCIM and create a token**. Copy the token now: it is shown once and only a fingerprint is kept. Pressing the button again replaces the token (the old one stops working at once). **Turn off** removes it.
2. In your provider, add SudoDocs for provisioning with the **base URL** shown on the card (it ends in `/scim/v2`) and the token as the **bearer token** (Okta: "HTTP Header" authentication; Entra ID: Secret Token). Use **userName = email**.
3. Switch on **Create users** and **Deactivate users**.

What SCIM does:

- A new user is created as a **Writer**, only for an email on your sign-in domain, only if you have a free seat, and never for an address that already exists anywhere in SudoDocs. Roles sent by the provider are ignored: promote administrators inside SudoDocs.
- "Deactivate" (and "delete") **disables** the user: their sessions end at the next request and they cannot sign in. Nothing is deleted. Re-activating restores access.
- The **last active administrator** cannot be deactivated.
- Names can be updated; email addresses cannot be changed through SCIM.
- Supported: create, list and look up by `userName eq "..."`, read, replace, patch (`active`, name) and delete. Groups are not synchronized.
- Provisioning needs a plan that includes single sign-on; if the plan changes, SCIM stops answering until it does again.

## Troubleshooting

| What you see | Likely cause |
|---|---|
| Test sign-in: "The sign-in response could not be verified" | Wrong certificate, the provider signs the response rather than the assertion, the reply URL or audience differs from what SudoDocs shows, or the provider's clock is off by minutes. |
| "Email: not sent" | Add an `email` attribute, or type your attribute name into **Email attribute**. |
| "Email does not match your domain" | The provider sent an address on another domain. |
| "Your account is not in a group that may read these docs" | The provider did not send `groups`, or the group name differs (names are compared without regard to case). |
| SCIM: 401 | Wrong or replaced token. |
| SCIM: "userName must be an email address on the organization's sign-in domain" | The user's email is on another domain. |
| SCIM: 403 "no free seats" | Your plan's seats are used up. |
| Someone who left can still read protected docs | Their reading session has not ended: see [How long readers stay signed in](../publish/protected-docs.md#how-long-readers-stay-signed-in). |

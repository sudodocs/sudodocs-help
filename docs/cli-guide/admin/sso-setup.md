# Security & SSO

CLI equivalent of [Admin Tasks → Security & SSO](../../saas-guide/admin/sso-setup.md). Admin-only, and Enterprise-only - the same plan restriction the SSO tab enforces.

## Show Current Configuration

```bash
sudodocs admin sso get
```

Prints `domain`, `client_id`, and `issuer_url` - never the client secret, even though the web dashboard's own form does pre-fill it into a password field.

## Configure SSO

```bash
sudodocs admin sso set \
  --domain "company.com" \
  --client-id "your-client-id" \
  --client-secret "your-client-secret" \
  --issuer-url "https://company.okta.com/.well-known/openid-configuration"
```

Set your IdP's **Sign-in Redirect URI** to `https://app.sudodocs.com/login/sso/callback` before saving - see [Configure your Identity Provider](../../saas-guide/admin/sso-setup.md#configure-your-identity-provider-idp).

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/sso` | GET | `{"domain", "client_id", "issuer_url"}` (no secret). Wrapped by `sudodocs admin sso get`. |
| `/admin/sso` | POST | `{"domain", "client_id", "client_secret", "issuer_url"}`. Wrapped by `sudodocs admin sso set`. |

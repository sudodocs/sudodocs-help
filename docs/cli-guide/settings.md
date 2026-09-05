# Account

CLI equivalents of [Admin Tasks → Account](../admin-guide/settings.md#api-keys) - specifically API Keys and background jobs. Billing and account deletion have no CLI equivalent by design - both stay browser-only, given the blast radius of scripting either one.

## Generate an API Key

Your first key comes from `sudodocs login` (see [Getting Started](index.md#log-in)) - a personal key tied to your own user, saved automatically. `admin api-keys create` is for *additional* keys, admin-only, typically one per CI pipeline or service so you can revoke a compromised or retired integration's access without logging every human out:

```bash
sudodocs admin api-keys create --name "CI Pipeline"
```

The raw key is printed once - copy it immediately, same as the dashboard's **Generate New Key** button. Store it as `SUDODOCS_API_KEY` in your CI's secrets, not in `sudodocs.yaml`.

## List API Keys

```bash
sudodocs admin api-keys list
```

Shows name, prefix, and last-used time for every key in your org - never the full value, matching the dashboard's own listing.

## Revoke an API Key

```bash
sudodocs admin api-keys revoke <key_id>
```

Find `<key_id>` via `sudodocs admin api-keys list`. Anything using that key (CLI, CI job, script) stops working immediately.

## Cancel a Running Job

```bash
sudodocs admin jobs cancel <job_id>
```

Works for any in-progress job you own the org of - a sync, an Auto-Learn run, a bulk generation - not just ones started from the CLI. Same effect as clicking a **Stop** button on the dashboard's own progress indicators (e.g. **Stop Sync** on the Repositories tab).

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/api-keys` | GET | List keys. Wrapped by `sudodocs admin api-keys list`. |
| `/admin/api-keys` | POST | `{"name"}` → `{"api_key", "name"}`. Wrapped by `sudodocs admin api-keys create`. |
| `/admin/api-keys/{id}` | DELETE | Wrapped by `sudodocs admin api-keys revoke`. |
| `/admin/jobs/{id}/cancel` | POST | Wrapped by `sudodocs admin jobs cancel`. |

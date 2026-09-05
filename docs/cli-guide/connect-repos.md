# Repositories

CLI equivalents of [Admin Tasks → Repositories](../admin-guide/connect-repos.md). All commands are admin-only, same as the Repositories tab.

## List Repositories

```bash
sudodocs admin integrations list
```

## Add a Git Repository

```bash
sudodocs admin integrations create \
  --name "Main API Docs" \
  --base-url "https://github.com/org/repo.git" \
  --repo-type documentation \
  --auth-type pat \
  --service-pat "ghp_xxxxxxxxxxxxxxxxxxxx"
```

| Option | Required | Description |
|---|---|---|
| `--name` | Yes | A recognizable name, e.g. "Main API Docs". |
| `--base-url` | Yes | The HTTPS clone URL. |
| `--repo-type` | Yes | `documentation`, `code` (Pro/Enterprise only), or `web`. |
| `--auth-type` | Required unless `--repo-type web` | `pat` or `app`. |
| `--service-pat` | For `--auth-type pat` | A Personal Access Token with `repo` scope for private repositories. |
| `--app-id`, `--installation-id`, `--private-key` | For `--auth-type app` (Enterprise only) | GitHub App credentials. |

## Add a Public Website

```bash
sudodocs admin integrations create \
  --name "Public Docs Site" \
  --base-url "https://docs.example.com" \
  --repo-type web
```

SudoDocs automatically looks for an `/llms.txt` file or a `sitemap.xml` to discover pages - same as the web form, no `--auth-type` needed.

## Sync a Repository (RAG)

```bash
sudodocs sync --integration-id 42
```

This is the exact same action as clicking **Sync** on the Repositories tab - forces a Vector DB re-index of the repository's content. The command blocks and prints progress until the sync completes or fails.

Find `--integration-id` via `sudodocs admin integrations list`.

## Cancel a Running Sync

```bash
sudodocs admin jobs cancel <job_id>
```

Same as clicking the **Stop Sync** button that appears next to an in-progress sync's progress bar on the dashboard. The job ID is printed by `sudodocs sync` while it's running (`Waiting for SudoDocs worker (Job: ...)`).

## Automatic Sync Schedule

```bash
sudodocs admin integrations sync-schedule 42 --hours 24    # sync every 24 hours
sudodocs admin integrations sync-schedule 42               # omit --hours to turn scheduling off (manual sync only)
```

## Update an Integration's Token

```bash
sudodocs admin integrations update-token 42 --new-pat "ghp_yyyyyyyyyyyyyyyyyyyy"
```

## Delete a Repository

```bash
sudodocs admin integrations delete 42
```

Looking for webhook credentials or Screenshot Settings? Those are covered in [Docflows](doc-drift.md), matching where [Configure Webhooks and Screenshot Settings for Docflows](../admin-guide/doc-drift.md) puts them on the dashboard.

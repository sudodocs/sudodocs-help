# Repositories

CLI equivalents of [Admin Tasks → Repositories](../../saas-guide/admin/connect-repos.md). All commands are admin-only, same as the Repositories tab.

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
  --service-pat "github_pat_xxxxxxxxxxxxxxxxxxxx"
```

Already signed in to the GitHub CLI? Use its token instead of pasting one:

```bash
sudodocs admin integrations create --name "Main API Docs" \
  --base-url "https://github.com/org/repo.git" --repo-type documentation --from-gh
```

| Option | Required | Description |
|---|---|---|
| `--name` | Yes | A recognizable name, e.g. "Main API Docs". |
| `--base-url` | Yes | The HTTPS clone URL. |
| `--repo-type` | Yes | `documentation`, `code` (Pro/Enterprise only), or `web`. |
| `--auth-type` | Required unless `--repo-type web` | `pat` or `app`. |
| `--service-pat` | For `--auth-type pat` | A GitHub token: fine-grained (`github_pat_`, with Contents and Pull requests read & write), classic (`ghp_`, with `repo` scope), or GitHub CLI (`gho_`). |
| `--from-gh` | No | Use the output of `gh auth token` as the token (implies `--auth-type pat`). It's tied to your personal `gh` login and stops working after `gh auth logout`. |
| `--accept-insufficient` | No | Save a valid token even if it lacks write access to the repository. |
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

SudoDocs checks the token with GitHub before saving and prints its type, account, and expiry, plus a warning if access is missing - see [Add a Git Repository with a Token](../../saas-guide/admin/connect-repos.md#add-a-git-repository-with-a-token).

The one-click **Connect with GitHub** flow needs a browser - use the dashboard for it.

## Check a Token Without Saving It

```bash
sudodocs admin integrations verify-token --token "github_pat_..." --repo-url "https://github.com/org/repo.git"
sudodocs admin integrations verify-token --from-gh
```

Prints the token's type, the GitHub account it belongs to, its expiry, and whether it can access the repository.

## Update an Integration's Token

```bash
sudodocs admin integrations update-token 42 --new-pat "github_pat_yyyyyyyyyyyyyyyyyyyy"
sudodocs admin integrations update-token 42 --from-gh
```

The new token is checked with GitHub first. Add `--accept-insufficient` to save a valid token that lacks write access.

> **Note**: `--from-gh`, `--accept-insufficient`, and `verify-token` need `sudodocs-cli` 1.1.0 or later. Upgrade with `pip install --upgrade sudodocs-cli`.

## Delete a Repository

```bash
sudodocs admin integrations delete 42
```

Looking for webhook credentials or Screenshot Settings? Those are covered in [Docflows](doc-drift.md), matching where [Configure Webhooks and Screenshot Settings for Docflows](../../saas-guide/admin/doc-drift.md) puts them on the dashboard.

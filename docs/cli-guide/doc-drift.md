# Docflows

CLI equivalents of two dashboard pages: [Admin Tasks → Configure Docflows Webhook](../admin-guide/doc-drift.md) (admin-only setup) and [User Tasks → Manage Docflows](../user-guide/doc-drift.md) (triggering a suggestion). Follow the linked admin-guide/user-guide pages for the concepts (what a webhook does, how a suggestion gets reviewed) - this page covers the equivalent commands.

## Get Webhook Credentials

```bash
sudodocs admin integrations webhook 42
```

Prints the same **Payload URL** and **Secret** the dashboard's Webhook dialog shows (admin-only) - paste these into GitHub's or Jira's webhook settings the same way as [Setting up the Webhook in GitHub/Jira](../admin-guide/doc-drift.md#step-2-set-up-the-webhook-in-github).

## Configure Screenshot Settings

```bash
sudodocs admin integrations preview-settings 42 \
  --url-pattern "https://pr-{pr_number}.preview.example.com" \
  --auth-type basic \
  --username "svc-account" \
  --password "..." \
  --route-map "templates/admin_dashboard.html=>/admin/dashboard"
```

Admin-only. CLI equivalent of [Configure Screenshot Settings for Docflows](../admin-guide/doc-drift.md#configure-screenshot-settings-for-docflows).

| Option | Description |
|---|---|
| `--url-pattern` | Preview URL pattern. Supports `{pr_number}`, `{branch}`, `{sha}` tokens. |
| `--auth-type` | `none`, `basic`, `header`, `session_cookie`, or `form_login`. |
| `--username`, `--password` | For `basic` or `form_login`. |
| `--header-name`, `--header-value` | For `header`. |
| `--session-cookie-name`, `--session-cookie-value` | For `session_cookie`. |
| `--login-url`, `--login-username-selector`, `--login-password-selector`, `--login-submit-selector` | For `form_login`. |
| `--route-map` | `GLOB=>ROUTE1,ROUTE2` (repeatable) - maps a changed-file glob to preview routes to screenshot. |

## Trigger a Docflows Suggestion

Not admin-only - available to any doc-team member. Useful for backfilling a suggestion, or triggering one from a CI job that already has the PR details, without waiting for the GitHub webhook:

```bash
sudodocs docflow \
  --pr-number 128 \
  --pr-title "Add bulk export endpoint" \
  --pr-body "Adds POST /api/v1/export for bulk data export." \
  --pr-author "jsmith"
```

| Option | Required | Description |
|---|---|---|
| `--pr-number` | Yes | The PR number. |
| `--pr-title` | Yes | The PR title. |
| `--pr-body` | Yes | The PR description/body. |
| `--pr-author` | Yes | The PR author's username. |
| `--pr-branch` | No | Head branch name. Required for Screenshot Docflows if your preview URL pattern uses `{branch}`. |
| `--pr-sha` | No | Head commit SHA. Required for Screenshot Docflows if your preview URL pattern uses `{sha}`. |
| `--screenshot` | No | Attach a locally captured screenshot instead of SudoDocs' own Playwright capture. Format as `ROUTE=PATH`. Repeatable. |

Requires `integration_id` to be set in `sudodocs.yaml` - there is no environment variable for it, since it identifies which connected repository the suggestion belongs to.

The generated suggestion goes through the same Information Architect / Technical Writer / Editor pipeline as a webhook-triggered one, and lands in the same **Docflows** inbox for [triage](../user-guide/doc-drift.md#triage-suggestions) - the CLI only replaces the trigger, not the review or push steps, which stay browser-first.

### CI-Offload for Screenshots

When your preview or staging environments are isolated behind a corporate VPN, protected by complex multi-factor SSO, or otherwise unreachable by SudoDocs' public Cloud Run workers, capture screenshots inside your own CI environment and upload them directly with the repeatable `--screenshot` flag - this bypasses SudoDocs' own Playwright screenshot stage entirely and trusts the provided image files.

```bash
sudodocs docflow \
  --pr-number 128 \
  --pr-title "Update analytics panel" \
  --pr-body "Refactors dashboard widgets." \
  --pr-author "jsmith" \
  --screenshot /dashboard=./screenshots/dashboard.png \
  --screenshot /settings=./screenshots/settings.png
```

An example GitHub Actions workflow is provided at `sudodocs-cli/examples/github-actions-ci-offload-screenshots.yml` inside the SudoDocs CLI repository package, showing how to check out code, install `sudodocs-cli` and Playwright, capture screenshots of specific routes, and call `sudodocs docflow` with the resulting files.

## Headless API

The CLI is a thin wrapper over `https://api.sudodocs.com/api/v1`. If you're integrating from a language other than Python, call the API directly with the same Bearer token:

| Endpoint | Method | Auth | Wrapped by |
|---|---|---|---|
| `/docflows/generate` | POST | Any doc-team member | `sudodocs docflow` |
| `/admin/integrations/{id}/webhook` | GET | Admin only | `sudodocs admin integrations webhook` |
| `/admin/integrations/{id}/preview-settings` | POST | Admin only | `sudodocs admin integrations preview-settings` |
| `/jobs/{job_id}` | GET | Any doc-team member | Polled automatically by `sudodocs docflow` |

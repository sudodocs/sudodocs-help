# CLI & Headless API

The `sudodocs` CLI and the underlying Headless API let you trigger SudoDocs actions from CI/CD pipelines or scripts, without going through the dashboard. Use it to force a repository sync after a deploy, convert an OpenAPI or Helm spec into Docusaurus or Sphinx docs as part of a build, or kick off a Docflows suggestion directly from a Code PR.

## Generate an API Key

Every CLI command and API request authenticates with a Bearer token.

1. Navigate to the **Admin Dashboard** and select the **Account** tab.
2. Under **API Keys**, enter a name for the key (e.g., "CI Pipeline") and click **Generate New Key**.
3. Copy the key immediately - it is shown only once. See [Settings](settings.md#api-keys) for details on managing existing keys.

## Install the CLI

The CLI ships inside the `sudodocs-cli` package. From a clone of the SudoDocs repository:

```bash
pip install -e ./sudodocs-cli
```

Verify it installed correctly:

```bash
sudodocs --help
```

## Configure

The CLI reads its API key and base URL from environment variables, or from a `sudodocs.yaml` file in your project's working directory:

```yaml
# sudodocs.yaml
api_key: sudo_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   # prefer SUDODOCS_API_KEY instead, see below
base_url: https://api.sudodocs.com
integration_id: 42   # required only for `sudodocs docflow` - find this via the Webhook dialog on the Repositories tab
```

`sudodocs.yaml` is meant to stay out of version control - prefer environment variables for the key itself:

```bash
export SUDODOCS_API_KEY="sudo_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
export SUDODOCS_BASE_URL="https://api.sudodocs.com"   # optional, this is the default
```

If neither `SUDODOCS_API_KEY` nor `sudodocs.yaml`'s `api_key` is set, every command exits immediately with `Error: SUDODOCS_API_KEY missing`.

## Commands

### `sudodocs sync`

Forces a vector DB sync for a connected repository - the same action as clicking **Sync** on the Repositories tab.

```bash
sudodocs sync --integration-id 42
```

| Option | Required | Description |
|---|---|---|
| `--integration-id` | Yes | The numeric ID of the repository integration to sync. |

The command blocks and prints progress until the sync job completes (or fails).

### `sudodocs convert`

Converts an OpenAPI or Helm spec into Docusaurus-ready Markdown or Sphinx-ready reStructuredText, and writes the result to a local file - useful for regenerating API reference pages as part of a docs build.

```bash
sudodocs convert openapi.yaml --type openapi --target docusaurus
sudodocs convert values.yaml --type helm --target sphinx -o docs/config-reference.rst
```

| Option | Required | Description |
|---|---|---|
| `-t`, `--type` | Yes | Source spec type: `openapi` or `helm`. |
| `--target` | No | Output format: `docusaurus` (Markdown), `sphinx` (reStructuredText), or the raw formats `md` / `rst` / `adoc`. Defaults to `docusaurus`. |
| `-o`, `--output` | No | Local file path to write the result to. Defaults to the input filename with the target's extension (e.g. `openapi.yaml` → `openapi.md`). |

The generated document is also saved to your SudoDocs workspace - the command prints a link to it alongside the local file path.

### `sudodocs docflow`

Triggers a Docflows suggestion for a specific Code PR, without waiting for the GitHub webhook - useful for backfilling a suggestion or triggering one from a CI job that already has the PR details.

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
| `--screenshot` | No | Attach a locally captured screenshot to offload browser processing. Format as `ROUTE=PATH`. Repeatable. |

Requires `integration_id` to be set in `sudodocs.yaml` - there is no environment variable for it, since it identifies which connected repository the suggestion belongs to.

---

## CI-Offload for Screenshots

When your preview or staging environments are isolated behind a corporate VPN, protected by complex multi-factor SSO, or otherwise unreachable by SudoDocs' public Cloud Run workers, you can capture screenshots inside your own CI environment and upload them directly.

By passing the repeatable `--screenshot` flag to the `sudodocs docflow` command, you instruct SudoDocs to bypass its own Playwright screenshot stage entirely and trust the provided image files.

```bash
sudodocs docflow \
  --pr-number 128 \
  --pr-title "Update analytics panel" \
  --pr-body "Refactors dashboard widgets." \
  --pr-author "jsmith" \
  --screenshot /dashboard=./screenshots/dashboard.png \
  --screenshot /settings=./screenshots/settings.png
```

### Example Workflow File

An example GitHub Actions workflow is provided at `sudodocs-cli/examples/github-actions-ci-offload-screenshots.yml` inside the SudoDocs CLI repository package. This workflow displays how to:

1. Check out code and set up Python.
2. Install the `sudodocs-cli` package and Playwright.
3. Spin up local or private browser automation to log in and capture screenshots of specific routes.
4. Call `sudodocs docflow` with the `--screenshot` arguments to upload and attach those images to the newly generated suggestion.

## Headless API

The CLI is a thin wrapper over `https://api.sudodocs.com/api/v1`. If you're integrating from a language other than Python, call the API directly with the same Bearer token:

| Endpoint | Method | Purpose |
|---|---|---|
| `/sync` | POST | Trigger a repository sync (`{"integration_id": 42}`). Wrapped by `sudodocs sync`. |
| `/convert` | POST | Convert a spec to docs (`{"source_type", "content", "target_format"}`). Wrapped by `sudodocs convert`. |
| `/docflows/generate` | POST | Trigger a Docflows suggestion (`{"integration_id", "pr_data": {...}}`). Wrapped by `sudodocs docflow`. |
| `/oas/validate` | POST | Run your saved API Readiness config (`{"run_swagger", "run_redocly", "run_ai_fix", "run_ai_content"}`, all optional booleans). Not yet wrapped by the CLI. |
| `/diagram/generate` | POST | Generate a Mermaid diagram. Takes `multipart/form-data` (not JSON): a `description` field and an optional `image_file`. Not yet wrapped by the CLI. |
| `/jobs/{job_id}` | GET | Poll the status of a job returned by any of the above. |

All POST endpoints except `/diagram/generate` take a JSON body and return `202 {"status": "queued", "job_id": "..."}` immediately; poll `/jobs/{job_id}` until `status` is `completed` or `failed`.
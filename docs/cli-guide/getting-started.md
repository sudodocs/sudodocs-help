# Getting Started

The `sudodocs` CLI and its underlying Headless API let you do everything in the [Admin Tasks](admin/index.md) and [User Tasks](user/index.md) sections of this guide from a terminal, a script, or a CI/CD pipeline instead of the dashboard. This page covers the setup that applies no matter which of those tasks you're scripting.

**The CLI is an Enterprise-plan feature.** This is where an Enterprise subscription earns its keep for automation-minded teams: force a repository sync right after a deploy finishes, rotate an integration's token from a secrets-rotation job, invite a new hire the moment they're added to your HR system, or keep your Knowledge Base's style guide in version control and push changes to it as part of a normal PR review - none of it requires anyone to open a browser.

## Install the CLI

```bash
pip install sudodocs-cli
```

Verify it installed correctly:

```bash
sudodocs --help
```

## Log In

```bash
sudodocs login
```

This opens your browser to approve the login (the same device-authorization flow GitHub's or Claude's own CLI uses) and saves a personal API key to `~/.sudodocs/credentials.json`. Like every other CLI/API action, logging in requires your organization to be on the **Enterprise** plan - `sudodocs login` fails with an upgrade message otherwise.

```bash
sudodocs whoami   # confirm who you're logged in as, and which org/plan
sudodocs logout   # remove the saved credential
```

## Configure

Beyond `sudodocs login`, the CLI also reads its API key and base URL from environment variables or a `sudodocs.yaml` file in your project's working directory - useful for CI, where there's no browser to approve a device login:

```yaml
# sudodocs.yaml
api_key: sudo_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   # prefer SUDODOCS_API_KEY instead, see below
base_url: https://api.sudodocs.com
integration_id: 42   # required only for `sudodocs docflow` - find this via `sudodocs admin integrations webhook <id>`
```

`sudodocs.yaml` is meant to stay out of version control - prefer environment variables for the key itself, generated with [`sudodocs admin api-keys create`](admin/settings.md#generate-an-api-key) (or from the dashboard's Account tab):

```bash
export SUDODOCS_API_KEY="sudo_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
export SUDODOCS_BASE_URL="https://api.sudodocs.com"   # optional, this is the default
```

If no API key is found by any of these methods, every command exits immediately with `Error: Not logged in. Run \`sudodocs login\`, or set SUDODOCS_API_KEY / add api_key to sudodocs.yaml.`

## Command Structure

Commands are grouped by who can run them, mirroring the two sections this page sits alongside:

* **Top-level commands** (`sync`, `convert`, `docflow`, `style-guide`, `release-notes`) - available to any doc-team member (Writer or System Administrator), same as the corresponding dashboard feature. These back the [User Tasks](user/index.md) pages.
* **`sudodocs admin ...`** - require the System Administrator role, same as the Admin Dashboard pages they mirror. Running an admin command as a Writer fails with `Error: This action requires a System Administrator.`, the same 403 the API returns. These back the [Admin Tasks](admin/index.md) pages.

Every command that kicks off AI work (`sync`, `convert`, `docflow`, `admin kb auto-learn`) blocks and prints progress until the job completes or fails, polling the same job-status endpoint the dashboard's own progress bars use.

Not every dashboard feature has a CLI equivalent yet - anything that's fundamentally a review/editing workflow (Author a Feature's Pipeline Review, Assigned Docflows' Review & Push, the DocOps Assistant chat, Diagram Generator, API Readiness) is a browser-first experience without a CLI wrapper today.

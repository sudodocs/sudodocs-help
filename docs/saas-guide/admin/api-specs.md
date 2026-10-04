# API Specs

The **API Specs** tab of the Admin Dashboard sets where your OpenAPI spec lives and how it's checked. [API Readiness](../user/api-readiness.md) in the Workspace uses these settings for every scan, so writers don't need repository access or tokens of their own.

Set up the [Knowledge Base](kb-config.md) first if you want spec descriptions checked against your style guide - that's why this tab comes after it.

> **Note**: API Readiness isn't included in every plan. If it isn't in yours, the tab says so. See [Plans & Billing](plans.md).

## Choose the Repository

Under **Source**, pick one of the following:

* **A repository from the Repositories tab** (recommended). SudoDocs uses that repository's saved GitHub token or GitHub App access, which is checked and kept up to date for you. Add it on the [Repositories](connect-repos.md) tab first if it isn't listed.
* **Another repository (enter its URL)**. Enter the **Repository URL** and, for a private repository, a **Token for this repository**. A saved token is never shown again; leave the box blank to keep it, or click **Remove the saved token**.

## Point to the Spec

* **Branch**: the branch to scan. Defaults to `main`.
* **Main spec path**: the path to your primary spec in the repository, for example `src/openapi.yaml`.
* **Other spec files** (optional): more spec files, comma-separated. Each is validated on its own.
* **Folders with referenced files** (optional): folders the spec points to with `$ref`, comma-separated.
* **API base URL domain** (optional): overrides the base URL in the final spec.

## Choose the Style Rules

**API style rules** sets the Redocly lint ruleset. The AI fixer corrects violations of these rules too.

| Option | Checks |
|---|---|
| **Redocly recommended** | Redocly's default best-practice rules. The default. |
| **Redocly recommended (strict)** | The same rules, with warnings treated as errors. |
| **Redocly minimal** | A small set of essential rules. |
| **OpenAPI spec compliance only** | Only whether the spec is valid OpenAPI. |
| **Custom ruleset from the repository** | Your own `redocly.yaml`. Enter its **Path to redocly.yaml in the repository**. |

> **Note**: For a custom ruleset, SudoDocs uses only built-in `extends` and `rules`. `plugins` and remote configurations are removed, because they would run code on SudoDocs' servers.

## Apply Your Writing Style

Select **Apply the Knowledge Base style guide to summaries and descriptions** to have the AI audit and fixes follow your style guide, not only Redocly's rules.

The **Publish this spec as an API reference page** option is for SudoDocs Publish, which isn't available yet. It has no effect for now.

## Save

Click **Save API Specs settings**. The next API Readiness scan uses the new settings.

> **Not available via CLI**: These settings can only be changed in the dashboard for now. The Headless API endpoint `POST /api/v1/oas/validate` runs a scan with them.

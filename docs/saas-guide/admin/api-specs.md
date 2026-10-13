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

## Public API Changes

Below the settings, **Public API changes** decides which part of your spec your customers see, and where the public version goes in your docs. When a pull request changes that part, Docflows suggests the updated public spec and a line for the **Developer Release Notes**. Nothing is public unless you say so. Save this panel with **Save Public API settings**.

### What's Public

* **Operations marked public in the spec** (the default): an operation is public when it, its path or one of its tags has the marker - `x-public: true` unless you change the **Marker**. The most specific one wins, so `x-public: false` on an operation keeps it internal even when its tag is public.
* **Everything except operations marked `x-internal: true`**: only for specs that already mark their internal operations that way.

Fields and parameters marked `x-internal: true` are always left out of the public spec, and so are the components only they use.

### The Public API Picker

If your spec has no markers, tick what's public instead:

1. Click **Load operations from the spec**. SudoDocs reads your spec from the repository above, including path files it `$ref`s, and lists its operations by tag, with how many are public now.
2. Tick whole tags (their operations, including ones added later) or single operations.
3. Click **Save Public API settings**.

An operation added after you save that no marker or tick covers isn't public. API-change suggestions list it as **Not public yet - decide in API Specs**, so nothing goes out by accident and nothing is silently missed.

### The Public Spec in Your Docs

1. Pick the **Docs repository**. SudoDocs looks at it:
    * If it already has an OpenAPI file (the same file name as your spec, or any YAML or JSON file that starts with `openapi:` or `swagger:`), it says so and keeps that file up to date.
    * If not, it suggests where your docs framework expects one, and why - for example `static/openapi.yaml` for Docusaurus, `openapi.json` for Mintlify (it also adds the `openapi` field to `docs.json` or `mint.json`), `docs/api/openapi.yaml` for MkDocs, or `source/_static/openapi.yaml` for Sphinx.
2. Click **Use this**, or **Choose another path** and type your own.
3. Choose the **Reference pages**: **Spec file only**, **Spec file plus Markdown reference pages** (one page per tag, rendered straight from the public spec without AI, so nothing is invented and there's no charge), or **Decide from the docs site** - the spec file alone when your site already renders OpenAPI (for example with the docusaurus-openapi-docs or Redocusaurus plugin, Mintlify, mkdocs-swagger-ui-tag or sphinxcontrib-openapi), otherwise with the pages too.

**Create Docflows suggestions for public API changes** turns the suggestions on or off.

See [CLI Tasks → API Specs](../../cli-guide/admin/api-specs.md) to view and change these settings from the command line.

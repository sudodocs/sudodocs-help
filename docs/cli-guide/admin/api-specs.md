# API Specs

CLI equivalents of [Admin Tasks → API Specs](../../saas-guide/admin/api-specs.md). Both commands are admin-only, same as the API Specs tab.

> **Note**: These commands need `sudodocs-cli` 1.1.0 or later. Upgrade with `pip install --upgrade sudodocs-cli`.

## Show the Current Settings

```bash
sudodocs admin api-specs get
```

Prints the source repository, branch, spec paths, API style rules, and whether your Knowledge Base writing style is applied. Saved repository tokens are never shown.

## Change the Settings

```bash
sudodocs admin api-specs set --integration-id 42 --spec-path src/openapi.yaml --ruleset recommended
```

Options you leave out keep their current value, so you can change one thing at a time:

```bash
sudodocs admin api-specs set --branch release/2.0
sudodocs admin api-specs set --ruleset custom --ruleset-path .redocly.yaml
```

| Option | Description |
|---|---|
| `--integration-id` | Use a connected repository. Find its ID with `sudodocs admin integrations list`. Recommended - its token or GitHub App access is reused. |
| `--repo-url` | Use another public repository by URL instead. |
| `--branch` | Branch to scan. Defaults to `main`. |
| `--spec-path` | Path to the main spec, for example `src/openapi.yaml`. |
| `--other-specs` | Other spec files, comma-separated. Each is validated on its own. |
| `--ref-folders` | Folders the spec references with `$ref`, comma-separated. |
| `--base-url-domain` | Overrides the base URL in the final spec. |
| `--ruleset` | `recommended`, `recommended-strict`, `minimal`, `spec` (OpenAPI compliance only), or `custom`. See [Choose the Style Rules](../../saas-guide/admin/api-specs.md#choose-the-style-rules). |
| `--ruleset-path` | Path to your `redocly.yaml` in the repository. Required with `--ruleset custom`. |
| `--writing-style` / `--no-writing-style` | Apply your Knowledge Base style guide to summaries and descriptions. |

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/api-specs` | GET | Current settings, without secrets. Wrapped by `sudodocs admin api-specs get`. |
| `/admin/api-specs` | POST | Any of `integration_id`, `git_repo_url`, `git_branch`, `spec_file_path`, `secondary_spec_paths`, `reference_folder_paths`, `base_url_domain`, `api_ruleset`, `api_ruleset_path`, `apply_writing_style`. Fields left out keep their value. Wrapped by `sudodocs admin api-specs set`. |

# API Specs

CLI equivalents of [Admin Tasks → API Specs](../../saas-guide/admin/api-specs.md): your spec list, dependency locations, and the settings for every spec. All commands are admin-only, same as the API Specs tab.

> **Note**: These commands need `sudodocs-cli` 1.4.0 or later. Upgrade with `pip install --upgrade sudodocs-cli`.

## Show Your Specs and Settings

```bash
sudodocs admin api-specs get
```

Prints how your specs are organized, each spec (ID, name, repository, branch, file, how many dependency files it has, and any `$ref`s SudoDocs couldn't follow), and the settings for every spec. Saved tokens are never shown.

## Manage the Spec List

```bash
sudodocs admin api-specs specs list
sudodocs admin api-specs specs show "Billing API"
sudodocs admin api-specs specs add --name "Billing API" --repo 42 --path billing/openapi.yaml
sudodocs admin api-specs specs update "Billing API" --branch release/2.0 --no-release-notes
sudodocs admin api-specs specs move "Billing API" up
sudodocs admin api-specs specs remove "Billing API"
```

Name a spec by its name or its ID. `show` lists its files (and the repository each comes from), its dependency locations with their IDs, and each `$ref` SudoDocs couldn't follow with the `deps add` command that fixes it. After `add` or `update`, SudoDocs reads the spec again. `remove` keeps its scans in the history (`--yes` skips the question).

| Option | Description |
|---|---|
| `--name` | The spec's name, for example `Billing API`. |
| `--repo` | The connected repository (integration ID, from `sudodocs admin integrations list`) that holds the spec. |
| `--repo-url` | A public repository by URL instead. SudoDocs can't open pull requests there. |
| `--branch` | Defaults to `main`. |
| `--path` | The spec file (root), for example `billing/openapi.yaml`. |
| `--kind` | `independent` or `combined` (with `--layout combined`). |
| `--validate` / `--no-validate` | Include it in API Readiness's **All specs**. |
| `--release-notes` / `--no-release-notes` | Turn its merged API changes into Developer Release Notes. |
| `--public` | `exclude-internal` (everything except `x-internal: true`, the default) or `marker`. |
| `--marker` | The marker for `--public marker`. Defaults to `x-public`. |
| `--watch` | Also watch these folders (comma-separated), for files used without a `$ref`. |

## Dependency Locations

```bash
sudodocs admin api-specs deps add "Billing API" --at ../common --repo 51 --folder schemas
sudodocs admin api-specs deps remove "Billing API" 7
```

`--at` is the path the spec's `$ref`s use, from the top of its repository; `--repo` is the repository that holds the files, `--folder` the folder in it (default: the whole repository) and `--branch` its branch (default: its default branch). `deps remove` takes the location's ID from `specs show`.

## Check Dependencies

```bash
sudodocs admin api-specs check
sudodocs admin api-specs check --spec "Billing API"
```

Reads your specs (or one) and prints how many files each uses and every `$ref` SudoDocs couldn't follow. Free.

## Change the Settings for Every Spec

```bash
sudodocs admin api-specs set --layout several
sudodocs admin api-specs set --ruleset custom --ruleset-path .redocly.yaml
```

Options you leave out keep their current value.

| Option | Description |
|---|---|
| `--layout` | How your specs are organized: `one`, `several` or `combined`. |
| `--base-url-domain` | Set as each root spec file's `base-url` server variable. |
| `--ruleset` | `recommended`, `recommended-strict`, `minimal`, `spec` (OpenAPI compliance only), or `custom`. See [Choose the Style Rules](../../saas-guide/admin/api-specs.md#choose-the-style-rules). |
| `--ruleset-path` | Path to your `redocly.yaml` in each spec's repository. Required with `--ruleset custom`. |
| `--writing-style` / `--no-writing-style` | Apply your Knowledge Base style guide to summaries and descriptions. |

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/api-specs` | GET | Settings for every spec, `spec_layout` and `specs`. Wrapped by `sudodocs admin api-specs get`. |
| `/admin/api-specs` | POST | Any of `spec_layout`, `base_url_domain`, `api_ruleset`, `api_ruleset_path`, `apply_writing_style`. Fields left out keep their value. |
| `/admin/api-specs/specs` | GET / POST | List the specs; POST `{name, integration_id or repo_url, root_path, branch?, kind?, validate?, release_notes?, public_mode?, public_marker?, watch_folders?}` adds one. |
| `/admin/api-specs/specs/<id or name>` | GET / PATCH / DELETE | One spec: its `files`, `dependency_locations` and `unresolved`; PATCH changes some fields (`position: "up"` or `"down"` moves it); DELETE removes it. |
| `/admin/api-specs/specs/<id or name>/dependency-locations` | POST | `{mount_path, integration_id, folder?, branch?}`. |
| `/admin/api-specs/specs/<id or name>/dependency-locations/<id>` | DELETE | Remove one. |
| `/admin/api-specs/check` | POST | `{spec?}` - 202 with a job ID; the job's result lists each spec's files and unresolved `$ref`s. |

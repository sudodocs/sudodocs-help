# API Readiness

CLI equivalent of [User Tasks → API Readiness](../../saas-guide/user/api-readiness.md): check your API specs, see the problems by file and line, fix them, download the files and open pull requests. Available to any doc-team member.

> **Note**: These commands need `sudodocs-cli` 1.4.0 or later. Upgrade with `pip install --upgrade sudodocs-cli`.

## Check Your Specs

```bash
sudodocs api-scan run
sudodocs api-scan run --spec "Billing API" --ai-fix --ai-content
sudodocs api-scan run --no-swagger
```

Checks every spec set to be checked (or one, by name or ID) and waits, then prints each spec's scan: its ID, how many files, errors and warnings, unresolved `$ref`s, and the result of an AI fix. Swagger CLI and Redocly run by default (free); `--ai-fix` and `--ai-content` add the AI steps, which use credits per spec - see [How the AI Fix Works](../../saas-guide/user/api-readiness.md#how-the-ai-fix-works).

## See a Scan

```bash
sudodocs api-scan show 120
sudodocs api-scan show 120 --json --full
```

Prints the problems file by file, each with its line, severity, rule and message, the other specs of the same run, and any `$ref`s SudoDocs couldn't follow. `--json` prints it all; `--full` adds each file's contents and the log. Find scans with `sudodocs items list api-scans`.

## Fix a Scan

```bash
sudodocs api-scan fix 120
sudodocs api-scan fix 120 --type content
```

Applies the AI fix to the files with problems, using that scan's analysis (`--type` is `technical`, `content` or `both`), and prints the new scan.

## Download the Files

```bash
sudodocs api-scan download 120
sudodocs api-scan download 120 --original -o billing.zip
sudodocs api-scan download 120 --all-specs
```

A zip of the fixed files in their folders, plus the bundled spec. `--original` gives every file as SudoDocs read it; `--all-specs` covers every spec of the same run.

## Open Pull Requests

```bash
sudodocs api-scan open-pr 120 --to source
sudodocs api-scan open-pr 120 --to source --all-specs
sudodocs api-scan open-pr 120 --repo 3 --path openapi/billing.yaml
sudodocs api-scan open-pr 120 --to source --to docs --repo 3 --spec prepped
```

`--to` picks where, and can be repeated for both (default: `docs`):

* `--to source`: the changed files go back to the repositories they came from, one pull request per repository, each file with its own name and path. With `--all-specs`, every spec of the same run; a file several specs share goes in once.
* `--to docs`: the whole spec as one file in a documentation repository. `--repo` is its integration ID (`sudodocs admin integrations list`, System Administrators only); `--path` is the file path there (default: the spec's file).

`--spec prepped` sends the spec as checked instead of with the AI fix. The scan tracks the pull requests; with both, it follows the docs one. If one can't be opened, the others still are and the reason is printed.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/oas/validate` | POST | `{spec?, run_swagger?, run_redocly?, run_ai_fix?, run_ai_content?}` - one spec (name or ID) or all; 202 with a job ID. The job's result lists `scan_ids`. |
| `/oas/scans/<id>` | GET | Problems, files, unresolved `$ref`s, fix check and the run's other scans (`group`). `?full=1` adds file contents and the log. |
| `/oas/scans/<id>/files.zip` | GET | `?which=fixed` (default) or `original`; `?scope=group` for every spec of the run. |
| `/oas/scans/<id>/fix` | POST | `{fix_type: technical, content or both}` - 202 with a job ID. |
| `/oas/scans/<id>/pull-request` | POST | `{targets: ["source"] and/or ["docs"], scope?: "spec" or "group", integration_id and file_path (docs), spec?: "fixed" or "prepped", commit_message?}`. Returns `pull_requests` (a list of URLs per target) and any `errors`. |

# Tool Items and Tags

CLI equivalent of the history list in each tool, and of [tagging work with a release and a writer](../../saas-guide/user/releases.md#tag-work-with-a-release-and-a-writer). Available to any doc-team member (Writer or System Administrator). Requires `sudodocs-cli` 1.2.0 or later.

Every command takes a **tool** name:

| Tool name | Web tool |
|---|---|
| `feature-drafts` | Feature Author |
| `release-notes` | Release Composer |
| `captures` | Capture |
| `conversions` | Universal Converter (generated specs) |
| `chats` | DocOps Assistant (only your own chats) |
| `api-scans` | API Readiness |
| `diagrams` | Diagram Generator |
| `docflows` | Docflows suggestions (they're dismissed in Docflows, not deleted) |

## List Items

```bash
sudodocs items list feature-drafts
sudodocs items list diagrams --release 7 --writer 12
sudodocs items list api-scans --release none
```

Prints one item per line, newest first: its ID, title, and its release and writer tags if set. `--release` and `--writer` take an ID, or `none` for untagged items. Get release IDs from `sudodocs releases list`, and user IDs from `sudodocs admin users list` (System Administrators only).

## Tag an Item

```bash
sudodocs items tag feature-drafts 42 --release 7 --writer 12
sudodocs items tag feature-drafts 42 --writer none
```

Sets the release and/or the writer. Pass `none` to clear a tag. The writer must be a member of your organization. Tags never limit who can see an item.

## Change an Item's Status

```bash
sudodocs items status feature-drafts 42 in_review
sudodocs items status diagrams 15 blocked --note "Waiting on the SME" --claim
```

Statuses: `todo`, `in_progress`, `in_review`, `blocked`, `done`, `rejected` (not for chats). Only the item's writer or a System Administrator can change its status; `--claim` makes you the writer first. `sudodocs items list TOOL --status blocked` lists items in one status, and the list shows each item's status and any open pull request.

## See a Docflows Suggestion's Changes

```bash
sudodocs items diff docflows 42
sudodocs items diff docflows 42 --stat
```

Prints the suggestion's proposed changes as a unified diff, with added lines in green and removed lines in red, against what each file looked like in your docs repository. Screenshots are listed by name. `--stat` lists only the files, with lines added and removed and a ✓ for files marked **Reviewed**. API: `GET /api/v1/docflows/<id>` (a summary per file), or `?format=diff` for the diff as plain text.

## A Docflows Suggestion's Screenshots

```bash
sudodocs items screenshots docflows 42
sudodocs items screenshots docflows 42 --take /settings/billing --take "/customers/<id>"
```

Lists the screenshots SudoDocs planned for the suggestion: ✓ taken, ○ suggested, with the reason for each and any doc image it replaces. `--take` takes screenshots of more pages (from the page index, or any page address) and waits for them. API: the plan is in `GET /api/v1/docflows/<id>` (`screenshot_plan`); `POST /api/v1/docflows/<id>/screenshots` with `{"routes": [...]}` takes more.

## Open a Pull Request from an API Scan

```bash
sudodocs api-scan open-pr 12 --repo 3 --path openapi/spec.yaml
sudodocs api-scan open-pr 12 --to source
sudodocs api-scan open-pr 12 --to source --to docs --repo 3 --spec prepped
```

Opens a pull request with the scan's AI-corrected spec (or the pre-processed one with `--spec prepped`), and the scan tracks it. `--to` picks where, and can be repeated for both (default: `docs`):

* `--to source`: the spec's own repository, on the branch and path set in API Specs. `--source-path` changes the file path.
* `--to docs`: a documentation repository. `--repo` is its integration ID (`sudodocs admin integrations list`, System Administrators only); `--path` is the file path there (default: the spec's path).

With both, the scan follows the docs pull request. If one can't be opened, the other still is and the reason is printed. API: `POST /api/v1/oas/scans/<id>/pull-request` with `targets` (`["source"]`, `["docs"]` or both), `integration_id` and `file_path` for docs, optional `source_file_path`, `spec` and `commit_message`. It returns `pull_requests` (one URL per target) and any `errors`.

## Zoom on Clicks for a Capture

```bash
sudodocs capture zoom 42
sudodocs capture zoom 42 --mode always
sudodocs capture zoom 42 --step 310=off --step 311=on
```

Shows or changes how an interactive capture's embed player and exported video zoom toward each step's hotspot - see [Zoom on Clicks](../../saas-guide/user/capture.md#zoom-on-clicks). Without options it lists the capture's setting and every step with its id. `--mode` is `auto` (only small targets), `always` or `off`; `--step STEP_ID=on|off|default` sets one step (`default` follows the capture). API: `GET` / `PUT /api/v1/captures/<id>/zoom` with `{"mode": "...", "steps": {"<step id>": "on|off|default"}}`.

## Rename an Item

```bash
sudodocs items rename diagrams 15 "Checkout sequence"
```

## Delete an Item

```bash
sudodocs items delete diagrams 15
```

You're asked to confirm; add `--yes` to skip the prompt. Deleting a capture also deletes its screenshots, audio and video.

## Headless API

| Action | Request |
|---|---|
| List | `GET /api/v1/items/<tool>?release_id=<id or none>&writer_id=<id or none>` |
| Rename / tag / move | `PATCH /api/v1/items/<tool>/<id>` with JSON containing any of `title`, `release_id`, `writer_user_id` (`null` clears a tag), `work_status`, `status_note`. Tags apply before the status, so claiming and moving works in one call. |
| Delete | `DELETE /api/v1/items/<tool>/<id>` |

Each item has `id`, `title`, `created_at`, `created_by`, `release_id`, `release_name`, `writer_user_id`, `writer_name`, `work_status`, `status_note` and `pull_request` (`url`, `state`, `review`, or `null`). `GET /api/v1/items/<tool>` also takes `status=`.

## Dashboard

```bash
sudodocs dashboard
sudodocs dashboard --release 7 --writer 12
sudodocs dashboard --release none --tool diagrams
sudodocs dashboard --json
```

Prints the same numbers as the web [Dashboards](../../saas-guide/user/dashboards.md): for one release, its timeline (status, target and first planned date, progress and date changes); item counts, each release's progress (when no release is picked), work per writer (open / done / total), and what needs attention. `--release` and `--writer` take an ID or `none`; `--json` prints everything, including the release timeline. API: `GET /api/v1/dashboard` with optional `release_id`, `writer_id` and `tool`.

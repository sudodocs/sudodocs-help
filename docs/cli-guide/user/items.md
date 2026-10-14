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

Prints the suggestion's proposed changes as a unified diff, with added lines in green and removed lines in red, against what each file looked like in your docs repository. Screenshots are listed by name. `--stat` lists only the files, with lines added and removed, a ✓ for files marked **Reviewed**, and what the last check against your docs found for each file (for example, already in your docs - not pushed), plus the pull request's state. API: `GET /api/v1/docflows/<id>` (a summary per file), or `?format=diff` for the diff as plain text.

## A Docflows Suggestion's Screenshots

```bash
sudodocs items screenshots docflows 42
sudodocs items screenshots docflows 42 --take /settings/billing --take "/customers/<id>"
```

Lists the screenshots SudoDocs planned for the suggestion: ✓ taken, ○ suggested, with the reason for each and any doc image it replaces. `--take` takes screenshots of more pages (from the page index, or any page address) and waits for them. API: the plan is in `GET /api/v1/docflows/<id>` (`screenshot_plan`); `POST /api/v1/docflows/<id>/screenshots` with `{"routes": [...]}` takes more.

## Approve or Dismiss a Docflows Suggestion

```bash
sudodocs items list docflows
sudodocs items approve docflows 42 --release 7
sudodocs items approve docflows 42 --release 7 --notes include --section enhancement --category Billing --note "Refunds are faster."
sudodocs items approve docflows 42 --new-release "v2.6" --writer 12
sudodocs items dismiss docflows 42
sudodocs items dismiss docflows 42 --done
sudodocs items sync docflows 42
```

Does what **Approve** and **Dismiss** do on the Docflows page - see [Manage Docflows](../../saas-guide/user/doc-drift.md#triage-suggestions). `approve` needs a release: `--release` (an ID from `sudodocs releases list`) or `--new-release` (creates it, or uses an existing release with that name). `--writer` is a user ID or `me` (the default); it must be someone in your organization. `--notes include|skip` is the release-notes decision; leave it out to use SudoDocs' suggestion. With `include`, `--section` (`feature`, `enhancement`, `bug`, `known-issue`, `developer`), `--category` (one of your product categories, or `Other`) and `--note` set what goes into the [release notes queue](release-composer.md#release-notes-queue). `dismiss` asks first unless you add `--yes`; the suggestion's status becomes **Rejected**, or **Done** with `--done` (your docs already have it; its release notes stay queued). `sync` is **Sync Latest Code**: it adds what the draft is missing from the pull request's newest code and waits for it (5 credits, or 8 when there's an update for the Editor to review); the API's `new_commits` (on `GET /api/v1/docflows/<id>`) says whether there are new commits. API: `POST /api/v1/docflows/<id>/approve` with `release_id` or `new_release_name`, `assignee_id` (an ID or `"me"`), and `release_notes` (`include`/`skip`, default: the suggestion) with `rn_section`, `rn_category` and `rn_note`; `POST /api/v1/docflows/<id>/dismiss` (with `{"reason": "done"}` for **Dismiss as done**); `POST /api/v1/docflows/<id>/sync` (202 with a job ID).

## Approve a Feature Author Draft

```bash
sudodocs items release-notes feature-drafts 31
sudodocs items approve feature-drafts 31 --notes include --section feature --category Billing --note "Download invoices as PDFs."
sudodocs items release-notes feature-drafts 31 --notes skip
```

`items release-notes` shows a Feature Author draft's release-notes decision, or what the Editor suggests while you haven't decided; with `--notes include|skip` (and `--section`, `--category`, `--note`, `--release` for a draft without one) it changes the decision at any stage. `items approve feature-drafts` is **Approve** on the draft's review page: it needs the Editor to have passed the draft, records the decision (leave out `--notes` to use the Editor's suggestion) and your sign-off. Included drafts join the [release notes queue](release-composer.md#release-notes-queue) with a **Feature Author** badge - see [Decide on Release Notes](../../saas-guide/user/feature-author.md#decide-on-release-notes). Sections: `feature`, `enhancement`, `bug`, `known-issue`, `developer`. API: `POST /api/v1/feature-drafts/<id>/approve` and `GET`/`PUT /api/v1/feature-drafts/<id>/release-notes`, with `release_notes`, `rn_section`, `rn_category`, `rn_note` and optionally `release_id`.

## API Changes in a Docflows Suggestion

```bash
sudodocs items api-changes docflows 42
sudodocs items api-changes docflows 42 --docs-path static/openapi.yaml
sudodocs items approve docflows 42 --release 7 --api-notes include --api-note "Breaking: removed legacy_id from invoices."
```

`api-changes` prints a suggestion's [API changes](../../saas-guide/user/doc-drift.md#api-changes): what was added, changed, removed and deprecated (with **BREAKING** when clients would break), operations that aren't public yet, and where the public spec goes. `--docs-path` confirms that location for this and every later API change (with several specs, add `--spec KEY` for which one). On `items approve`, `--api-notes include|skip` and `--api-note` set the **Developer Release Notes** decision (default: include, with the drafted line). API: `api_change` on `GET /api/v1/docflows/<id>`, `api_release_notes` and `api_rn_note` on approve, and `POST /api/v1/docflows/<id>/api-docs-path` with `{"path"}`.

## Request Changes on a Docflows Suggestion

```bash
sudodocs items request-changes docflows 42 -m "Mention that the default region is us-east-1"
sudodocs items request-changes docflows 42 -m "Shorter intro" --file docs/billing/refunds.md
sudodocs items history docflows 42
sudodocs items restore docflows 42 3
```

`request-changes` is **Request changes** on the Docflows card: SudoDocs' Technical Writer makes the change and its Editor reviews it, then the command prints the result, and any issues the Editor still has (8 credits). `--file` limits it to one of the suggestion's files. `history` prints the suggestion's review history: the Information Architect's plan, the Writer's drafts and revisions, the Editor's comments and who requested changes; rounds whose text is kept are marked `[version N]`. `restore` puts back version N (what's there now is kept as a version, so you can undo it). See [Request Changes](../../saas-guide/user/doc-drift.md#request-changes). API: `POST /api/v1/docflows/<id>/request-changes` with `feedback` and optional `target_file` (202 with a job ID); `GET /api/v1/docflows/<id>/history` (each round's `version`; add `?versions=1` for the text); `POST /api/v1/docflows/<id>/restore` with `{"version": N}`.

## Check Docflows Suggestions Against Your Docs

```bash
sudodocs items check docflows 42
sudodocs items check docflows --all
sudodocs items check docflows --all --dismiss-done
sudodocs items check docflows 42 --no-ai
```

Compares suggestions with your docs repository as it is today and prints, for each, whether it's still needed, already in your docs (or probably, in other words - with the reason per file), or was updated to fit docs that changed since - and whether its pull request was merged or closed. `--dismiss-done` never dismisses the "probably" ones. `--all` checks every open suggestion; add `--dismiss-done` to dismiss as done the ones your docs already have. Comparing the text is free; files your docs changed since are also read by SudoDocs to see whether they already say it in other words, and the reason is printed (1 credit for each suggestion that needs it). `--no-ai` keeps it to the free text check. See [Is a Suggestion Still Needed?](../../saas-guide/user/doc-drift.md#is-a-suggestion-still-needed) API: `POST /api/v1/docflows/<id>/check-docs`, or `POST /api/v1/docflows/check-docs` with optional `ids` and `dismiss_done`; both take `"ai": false` for the text check only (202 with a job ID; the job's result lists each suggestion's verdict).

## Open a Pull Request from an API Scan

```bash
sudodocs api-scan open-pr 12 --repo 3 --path openapi/spec.yaml
sudodocs api-scan open-pr 12 --to source
sudodocs api-scan open-pr 12 --to source --to docs --repo 3 --spec prepped
```

Opens a pull request with the scan's AI-corrected spec (or the pre-processed one with `--spec prepped`), and the scan tracks it. `--to` picks where, and can be repeated for both (default: `docs`):

* `--to source`: the spec's own repository, on the branch and path set in API Specs. `--source-path` changes the file path.
* `--to docs`: a documentation repository. `--repo` is its integration ID (`sudodocs admin integrations list`, System Administrators only); `--path` is the file path there (default: the spec's path).

With both, the scan follows the docs pull request. If one can't be opened, the other still is and the reason is printed. Docs get only the public part of the spec (see [Push to Production](../../saas-guide/user/api-readiness.md#push-to-production)); `--path` defaults to where your public spec lives (API Specs).

The release-notes decision is part of opening it, as on the web: `--notes include|skip`, `--section` (default `developer`), `--category` (for another section), `--note`. Leave them out to keep the saved decision, or use SudoDocs' suggestion.

```bash
sudodocs api-scan changes 12
sudodocs api-scan release-notes 12
sudodocs api-scan release-notes 12 --notes include --note "New PDF download endpoint."
```

`changes` prints what the scan's spec changes in your public API compared with the spec your docs publish (`--refresh` re-reads your docs). `release-notes` shows the scan's decision, or changes it with `--notes` (plus `--section`, `--category`, `--note`, `--release`). API: `GET /api/v1/oas/scans/<id>/changes`, `GET`/`PUT /api/v1/oas/scans/<id>/release-notes`, and `release_notes`, `rn_section`, `rn_category`, `rn_note` on the pull-request call. API: `POST /api/v1/oas/scans/<id>/pull-request` with `targets` (`["source"]`, `["docs"]` or both), `integration_id` and `file_path` for docs, optional `source_file_path`, `spec` and `commit_message`. It returns `pull_requests` (one URL per target) and any `errors`.

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

## Is SudoDocs' Copy of a Repository Up to Date?

```bash
sudodocs repos list
sudodocs repos request-sync 7
```

`repos list` shows each repository with **Up to date**, **Behind GitHub: N commits** or **Not synced yet**, when it was last synced, and its Keep in sync setting. `request-sync` is **Let admins know**: it emails your organization's admins that the repository needs a sync (once a day per repository). Anyone on the doc team can use both. See [When a Repository Needs a Sync](../../saas-guide/user/doc-drift.md#when-a-repository-needs-a-sync). API: `GET /api/v1/repos`, `POST /api/v1/repos/<id>/request-sync`.

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
sudodocs dashboard --mine
sudodocs mywork
```

Prints the same numbers as the web [Dashboards](../../saas-guide/user/dashboards.md): for one release, its timeline (status, target and first planned date, progress and date changes); item counts, each release's progress (when no release is picked), work per writer (open / done / total), and what needs attention. `--release` and `--writer` take an ID or `none`, and `--writer` also takes `me`; `--mine` is short for `--writer me`. Without `--writer` or `--mine` it shows everyone's work. `--json` prints everything, including the release timeline. API: `GET /api/v1/dashboard` with optional `release_id`, `writer_id` (an ID, `none`, `me` or `all`) and `tool`.

`sudodocs mywork` prints one line about what's assigned to you, like the Workspace's [Your Work](../../saas-guide/user/index.md#your-work) row: `4 open · 1 blocked · 2 Docflows to review`. API: `GET /api/v1/me/work` returns `open`, `blocked`, `docflows` and `changes_requested`.

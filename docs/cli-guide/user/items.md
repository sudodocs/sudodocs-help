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

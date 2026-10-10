# Manage Releases

CLI equivalent of [User Tasks → Manage Releases](../../saas-guide/user/releases.md). Available to any doc-team member (Writer or System Administrator), same as the Workspace. Requires `sudodocs-cli` 1.2.0 or later (`pip install --upgrade sudodocs-cli`).

## List Releases

```bash
sudodocs releases list
```

Prints one release per line, newest first: its ID, its name, and its target date and build number if set.

```text
7	v2.0  (2026-11-01, build 2.0.1)
3	v1.0
```

## Create a Release

```bash
sudodocs releases create "v2.0" --date 2026-11-01 --build 2.0.1
```

`--date` (YYYY-MM-DD) and `--build` are optional. The command prints the new release's ID.

## Edit a Release

```bash
sudodocs releases edit 7 --date 2026-11-15 --reason "Engineering slipped the GA build"
sudodocs releases edit 7 --name "v2.0 GA" --build 2.0.2
```

`--date none` clears the target date. The reason is kept in the release's history.

## Mark a Release as Released

```bash
sudodocs releases mark-released 7 --on 2026-11-16
sudodocs releases reopen 7
```

`--on` defaults to today. `reopen` undoes it.

## See a Release's History

```bash
sudodocs releases history 7
```

Lists what happened, newest first: date moves (with reasons), items' status changes, retagging and writer changes, and pull request reviews and merges.

## Delete a Release

```bash
sudodocs releases delete 7
```

You're asked to confirm. Add `--yes` to skip the prompt in scripts. Deleting a release doesn't delete any work: everything tagged with it is kept and just loses the release tag.

## Headless API

| Action | Request |
|---|---|
| List | `GET /api/v1/releases` |
| Create | `POST /api/v1/releases` with JSON `{"name": "v2.0", "release_date": "2026-11-01", "build_number": "2.0.1"}` (`release_date` and `build_number` optional) |
| Delete | `DELETE /api/v1/releases/<release_id>` |
| Edit | `PATCH /api/v1/releases/<release_id>` with any of `name`, `release_date` (or `null`), `build_number`, plus an optional `reason` |
| Mark released / reopen | `POST /api/v1/releases/<release_id>/release` (optional `released_on`), `POST /api/v1/releases/<release_id>/reopen` |
| History | `GET /api/v1/activity?release_id=<id>` (also `tool`, `item_id`, `limit`) |

Each release in a response has `release_id`, `name`, `release_date`, `original_release_date`, `released_on`, `build_number` and `created_at`.

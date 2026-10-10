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

Each release in a response has `release_id`, `name`, `release_date`, `build_number` and `created_at`.

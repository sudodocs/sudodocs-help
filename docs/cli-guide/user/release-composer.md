# Compose Release Notes

CLI equivalent of [User Tasks → Compose Release Notes](../../saas-guide/user/release-composer.md): a release's release notes queue, drafting from it, pushing the notes to your docs, and the optional settings (Deployment Tags and CSV Column Mappings). Available to any doc-team member.

## Release Notes Queue

```bash
sudodocs release-notes queue --release 7
sudodocs release-notes queue --release 7 add "Export invoices as PDF" --section feature --category Billing
sudodocs release-notes queue --release 7 set 31 --section enhancement --category Auth
sudodocs release-notes queue --release 7 remove 31
sudodocs release-notes queue --release 7 jira --bugs 10003 --stories 10002
```

Without a subcommand it lists the queue by section, each item with its ID, source (`docflows`, `slack`, `jira`, `csv`, `manual`) and category, plus the latest draft and the automatic-drafting schedule. `--section` is `feature`, `enhancement`, `bug` or `known-issue`. `jira` adds the tickets from saved filters (`--epics`, `--stories`, `--bugs`, `--known-issues`, `--escalations`); tickets already queued are skipped.

## Draft Release Notes

```bash
sudodocs release-notes draft --release 7
sudodocs release-notes draft --release 7 --update-latest
```

Drafts the release notes from the queue and waits for it (10 credits). `--update-latest` adds only the newly queued items to the latest draft, keeping its edits (5 credits). `--title`, `--format md|rst|adoc` and `--writer` are optional. Automatic drafting is set per release - see [Edit a Release](releases.md#edit-a-release).

## Push Release Notes to Your Docs

```bash
sudodocs release-notes push 12 --repo 3 --dry-run
sudodocs release-notes push 12 --repo 3
```

Opens a pull request with draft 12 where the docs repository keeps release notes - a new file in its release-notes folder, or this release's section at the top of its `CHANGELOG.md` (other releases untouched); see [Push to Your Docs](../../saas-guide/user/release-composer.md#push-to-your-docs). `--dry-run` only prints where it would go. `--path` uses a different file; `--message` sets the commit message. The draft then follows the pull request.

## Show Current Settings

```bash
sudodocs release-notes settings get
```

Prints deployment tags and CSV column mappings. Empty fields mean the built-in defaults are in effect - see [Release Notes Settings](../../saas-guide/user/release-composer.md#release-notes-settings) for what those defaults are.

## Set Deployment Tags

```bash
sudodocs release-notes settings set-tags --tag Cloud --tag On-Premise --tag Both
```

Repeat `--tag` for each one. Passing none clears back to the default tags (`Cloud`, `On-Premise`, `Both`). This command only touches tags - it never affects CSV mappings.

## Set CSV Column Mappings

Each of the three mapped fields is its own command, so setting one never clobbers the others:

```bash
sudodocs release-notes settings set-csv-key --header "Key" --header "Issue Key"
sudodocs release-notes settings set-csv-summary --header "Summary"
sudodocs release-notes settings set-csv-description --header "Description"
```

Repeat `--header` for each column name your tracker might export (Jira, Linear, Asana all differ). Passing no `--header` for a given command clears that one field back to its default header names, without touching the others - this is why there isn't a single combined `set` command: a CLI invocation has no memory of previous settings the way the web form does (it always resubmits every field's current value together), so bundling all four settings into one command would risk silently wiping the others every time you only meant to change one.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/release-notes/settings` | GET | `{"deployment_tags", "csv_key", "csv_summary", "csv_description"}`. Wrapped by `sudodocs release-notes settings get`. |
| `/releases/<id>/notes-queue` | GET / POST | The queue (queued and drafted items, latest draft, automatic-drafting schedule); POST `{summary, description?, section?, category?}` adds an item. |
| `/releases/<id>/notes-queue/<item>` | PATCH / DELETE | Change an item's `section`, `category`, `summary` or `description`; or remove it. |
| `/releases/<id>/notes-queue/jira` | POST | `{"filters": {"bugs": "10003", ...}}` adds those tickets. |
| `/releases/<id>/release-notes/draft` | POST | `{title?, writer_user_id?, target_format?, update_latest?}` - 202 with a job ID; the finished job has `draft_id`. |
| `/release-notes/<draft id>/push` | GET / POST | GET `?integration_id=&path=` shows where it would go (`path`, `mode`, `summary`, `preview`); POST `{integration_id, path?, commit_message?}` opens the pull request. |
| `/release-notes/settings` | POST | Only touches keys present in the request body - send just the one field you're changing. Wrapped by the four `set-*` commands above. |

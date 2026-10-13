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

Opens a pull request with draft 12 where the docs repository keeps release notes - a new file in its release-notes folder, or this release's section at the top of its `CHANGELOG.md` (other releases untouched), or where you've saved for that repository; see [Push to Your Docs](../../saas-guide/user/release-composer.md#push-to-your-docs). `--dry-run` only prints where it would go (one line per file). `--message` sets the commit message. The draft then follows the pull request.

To put them somewhere else for this push:

```bash
sudodocs release-notes push 12 --repo 3 --file docs/whats-new.md
sudodocs release-notes push 12 --repo 3 --developer-file docs/api/changelog.md --remember
```

`--file` is a file with every release (existing or new); `--folder` is a folder with one file per release. `--developer-file`, `--developer-folder` and `--developer-same` do the same for the draft's **Developer Release Notes** section; with its own file or folder, the pull request carries both files. `--remember` saves your choices for the repository.

## Choose Where Release Notes Go

```bash
sudodocs release-notes targets --repo 3
sudodocs release-notes targets --repo 3 --developer-folder docs/api/releases
sudodocs release-notes targets --repo 3 --reset developer
```

Shows or sets where a docs repository keeps release notes and Developer Release Notes, without pushing - the same as **Change where it goes** with **Remember for this repository** on the web. Without options it shows the saved choices, or what SudoDocs finds automatically. `--reset product|developer|both` goes back to the default (the file found automatically; the same file for Developer Release Notes).

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
| `/release-notes/<draft id>/push` | GET / POST | GET `?integration_id=` (plus `product_layout`/`product_path`, `developer_layout`/`developer_path`, `candidates=1`) shows where it would go: `targets` (one per file, with `kind`, `path`, `mode`, `summary`, `preview`, `source`), `warnings`, `settings`, `detected`, `saved`. POST `{integration_id, targets?, remember?, commit_message?}` opens the pull request and returns its `files`. `targets` is `{"product": {"layout", "path"}, "developer": {...}}`; `layout` is `single_file` (path = the file), `per_version` (path = the folder) or, for developer, `same`. |
| `/integrations/<repo id>/release-notes-targets` | GET / PUT | GET: `saved`, `detected` and `candidates` (files and folders to pick from). PUT `{targets: {product: {...} or "default", developer: {...} or "default"}}` saves them. |
| `/release-notes/settings` | POST | Only touches keys present in the request body - send just the one field you're changing. Wrapped by the four `set-*` commands above. |

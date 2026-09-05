# Compose Release Notes

CLI equivalent of the settings behind [User Tasks → Compose Release Notes](../../saas-guide/user/release-composer.md#release-notes-settings): Deployment Tags and CSV Column Mappings. Not admin-only - available to any doc-team member, matching the settings panel on the Release Composer page itself.

**Triggering an actual generation (the "Compose" button) has no CLI equivalent today** - `process_bulk_generation_background` is a browser/session-only workflow. This page only covers the two optional settings that shape how it categorizes and tags content.

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
| `/release-notes/settings` | POST | Only touches keys present in the request body - send just the one field you're changing. Wrapped by the four `set-*` commands above. |

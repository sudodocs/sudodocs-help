---
title: Author mode commands
description: Write, review and publish pages from the terminal with sudodocs edit.
---

# Author mode commands

`sudodocs edit` is [Author mode](../../saas-guide/user/author-mode.md) for the terminal. A **change** is a work branch; every save is a commit; review happens on the change's pull request. `CHANGE` below is a change id.

## A typical session

```bash
sudodocs edit sources                          # what you can write in
sudodocs edit start my-docs --title "Document the new export"
sudodocs edit files 31                         # the files you can open
sudodocs edit open 31 docs/export.md           # download it to edit locally
$EDITOR docs/export.md
sudodocs edit save 31 docs/export.md --message "Describe the export"
sudodocs edit check 31 docs/export.md          # free checks: links, headings, titles
sudodocs edit selfreview 31 --free             # free pass; add --run to use credits
sudodocs edit review 31 --summary "New export page" --reviewer 7
sudodocs edit status 31                        # what stands between it and publishing
sudodocs edit publish 31                       # merge the approved change; the site rebuilds
```

If someone changed a file while you were editing, `save` writes `PATH.merged` with both sides merged: check it, copy it over your file and save again.

## Commands

| Task | Commands |
|---|---|
| **Find and start** | `sources` (also `--add` to save a folder), `start`, `list`, `status`, `close` (discard), `remove` (remove a discarded change from your list) |
| **Read and write** | `files`, `open`, `save`, `diff`, `revert`, `search`, `history`, `restore`, `update-base` |
| **Create and organize** | `new-page` (from a template), `templates`, `move`, `copy`, `delete`, `upload`, `formats`, `page-order`, `nav` |
| **Content helpers** | `inserts`, `links`, `image`, `embed`, `variables`, `snippets`, `diagrams`, `endpoints`, `spec-set`, `check` |
| **AI and other tools** | `assist` (prints a suggestion; nothing is applied), `selfreview`, `from-ticket`, `from-docflow`, `import` |
| **Review** | `review`, `comment`, `comments`, `resolve`, `apply`, `approve`, `request-changes`, `mentionable`, `invite`, `invites` |
| **Publish** | `publish` (merge when approved; `--cancel` stops waiting) |

Run `sudodocs edit COMMAND --help` for each command's options. The same permissions as in the web app apply: only documentation files can be written, repositories an administrator has blocked refuse writes, and locked navigation files say why.

## Examples

```bash
sudodocs edit move 31 docs/old.md docs/guides/new.md          # links and navigation follow
sudodocs edit page-order 31 --move getting-started --before install
sudodocs edit new-page 31 docs/troubleshooting.md --template troubleshooting
sudodocs edit from-ticket 31 --jira PROJ-123 --run              # draft from a Jira ticket (uses credits)
sudodocs edit comment 31 "Is this still true?" --path docs/export.md --line 12
sudodocs edit invite 31 reviewer@partner.com                   # approved domains only
```

> Commands that use AI show the cost first, or need `--run`. `edit from-ticket`, `edit assist` and `edit selfreview --run` use credits.

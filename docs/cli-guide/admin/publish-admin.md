---
title: Publishing policy commands
description: Control who may edit and publish, embeds, reviewer invitations and review notices from the terminal.
---

# Publishing policy commands

The scriptable side of [Publishing policy](../../saas-guide/admin/publish-admin.md). All of these need a System Administrator key.

## Who may change site settings and edit

```bash
sudodocs admin site-policy show
sudodocs admin site-policy writers-manage-sites on|off     # Writers may manage site settings
sudodocs admin site-policy writers-edit-config on|off      # Writers may edit site CSS/JS and docs-tool config
sudodocs admin repos editing 12 off                        # block writes to a repository (id from `admin integrations list`)
sudodocs admin repos editing 12                            # show the current state
```

## Embeds

```bash
sudodocs admin embeds show
sudodocs admin embeds add vimeo.com
sudodocs admin embeds remove loom.com
sudodocs admin embeds reset                                # back to the default list
```

## Reviewer invitations

```bash
sudodocs admin reviewers show
sudodocs admin reviewers only on|off                       # approved domains only (on by default)
sudodocs admin reviewers add-domain partner.com
sudodocs admin reviewers remove-domain partner.com
sudodocs admin reviewers reset-domains                     # your members' company domains
sudodocs admin reviewers allow someone@gmail.com           # one address outside the approved domains
sudodocs admin reviewers disallow someone@gmail.com
```

## AI helpers and notices in reviews

```bash
sudodocs admin review-ai show|on|off                       # @Editor, @Writer, @IA in review comments

sudodocs admin review-notices show                         # Slack and Jira settings and the last result of each
sudodocs admin review-notices set --slack --slack-channel "#docs-reviews"
sudodocs admin review-notices set --tool-channel diagram="#diagrams" --tool-channel capture=
sudodocs admin review-notices set --events requested,verdict --tools all
sudodocs admin review-notices set --jira --jira-events requested
sudodocs admin review-notices set --no-slack --no-jira
```

`set` changes only the options you give. `--tool-channel TOOL=CHANNEL` sets a different Slack channel for one tool; `TOOL=` alone goes back to the main channel. Events are `requested`, `comment`, `mention` and `verdict`; tools are `diagram`, `capture`, `release_note`, `docflow` and `api_scan`. Messages never carry comment text.

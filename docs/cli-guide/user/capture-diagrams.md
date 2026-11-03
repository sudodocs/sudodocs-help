---
title: Capture and diagram commands
description: List, inspect, edit and export captures, and manage the Mermaid diagram library, from the terminal.
---

# Capture and diagram commands

Recording is done with the Chrome extension; these commands manage what you have already captured, and the diagram library.

## Captures

```bash
sudodocs capture list                                  # the same filters and counts as the library page
sudodocs capture list --type video --attention
sudodocs capture list --search "onboarding" --sort name --json
sudodocs capture show 12                               # one capture (--json for scripts)
sudodocs capture edit 12 --file edits.json             # save a video's edit list (cuts, volume, mute)
sudodocs capture render 12                             # export the edits as a new video (5 AI credits)
sudodocs capture zoom 12 --mode auto                   # zoom on clicks for the player and exports
sudodocs capture deleted-steps 12                      # steps deleted in the last 7 days
sudodocs capture restore 12 301                        # bring one back with its caption, hotspot and voice-over
```

`list` filters by `--type video|interactive|screenshot|audio`, `--release ID|none`, `--attention` (captures that failed, are partial or may hold personal data), `--narration` and `--search`. See [Capture](../../saas-guide/user/capture.md#the-library-and-the-editor).

## Mermaid diagrams

```bash
sudodocs diagram list --kind flowchart --search login
sudodocs diagram show 8                                # title, kind, version and Mermaid text
sudodocs diagram new --title "Login flow" --file login.mmd
cat login.mmd | sudodocs diagram new --title "Login flow" --file -
sudodocs diagram set 8 --file login.mmd --title "Login flow v2"
sudodocs diagram versions 8                            # newest first
sudodocs diagram restore-version 8 3                   # your current text stays as a version
sudodocs diagram rm 8                                  # kept 7 days
sudodocs diagram undelete 8
```

Insert a library diagram into a page from [Author mode](../../saas-guide/user/author-mode.md), or with `sudodocs edit diagrams`. See [Mermaid diagrams](../../saas-guide/user/diagram-gen.md).

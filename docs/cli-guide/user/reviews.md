---
title: Review commands
description: Ask for reviews, comment, resolve and give verdicts on diagrams, captures, release notes, Docflows suggestions and API scans from the terminal.
---

# Review commands

`sudodocs review` works on any item that can be [reviewed](../../saas-guide/user/reviews.md). The first argument is the tool: `diagram`, `capture`, `release_note`, `docflow` or `api_scan`; then the item id.

```bash
sudodocs review show diagram 5                       # status, reviewers, verdicts and threads (--json for scripts)
sudodocs review request diagram 5 --reviewer 7 --reviewer 9
sudodocs review comment diagram 5 "Is this right?" --on "Auth"          # a part of the drawing
sudodocs review comment capture 12 "Too fast here" --time 42.5          # a second in a video or audio capture
sudodocs review comment capture 12 "Blur this" --step 301               # a step of an Interactive capture
sudodocs review comment release_note 8 "Reword" --quote "new export"    # words in a release notes draft
sudodocs review comment docflow 21 "Typo" --file docs/export.md --line 12
sudodocs review comment api_scan 3 "Whole file" --file openapi.yaml
sudodocs review comment diagram 5 "Agreed" --reply-to 11 --mention 7    # a reply that tags a colleague
sudodocs review resolve diagram 5 11                 # add --reopen to open it again
sudodocs review verdict diagram 5 approve            # or request_changes --message "..."
sudodocs review invite diagram 5 reviewer@partner.com
```

A verdict is an opinion: it never blocks or publishes anything. Invitations follow your organization's approved email domains and your plan's reviewer allowance.

Calling an AI helper works through the comment text: a Writer or administrator who writes `@Editor` or `@Writer` in a comment gets the answer as a reply, asynchronously; see [Reviews](../../saas-guide/user/reviews.md#the-ai-helpers-editor-writer-ia).

Pages in your docs are reviewed through [`sudodocs edit`](edit.md).

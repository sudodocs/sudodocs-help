---
title: Author a Feature (retired)
description: Author a Feature has moved into Author mode.
---

# Author a Feature (retired)

**Author a Feature** has been retired. What it did now lives in [Author mode](author-mode.md), where you can also edit the pages by hand.

## Where things went

| What you did in Author a Feature | Where it is now |
|---|---|
| Draft documentation from a Jira ticket or a linked pull request | **Author > Tools > Draft from a ticket or pull request**: fetch the ticket or pull request, draft the changes into the affected files, pick the files, and save them into your change. If Docflows already made a suggestion for the same ticket, it is shown and you can edit it in Author mode. |
| Include the feature in the release notes | The [Changelog](release-composer.md) queue, with **Insert in Author mode** on release notes drafts. |
| Generate a diagram | [Mermaid diagrams](diagram-gen.md), or **Tools > Mermaid diagram** in Author mode. |
| Open a pull request | **Request review** or **Open pull request** in Author mode. |
| Review the draft | [Reviews](reviews.md): comments, @mentions, outside reviewers and the AI helpers. |

The same Information Architect, Technical Writer and Editor roles apply: see [Doc Team Roles](../admin/doc-team-roles.md).

Drafts you made earlier are kept. You can still list, tag and delete them with [`sudodocs items`](../../cli-guide/user/items.md), and bring their text into a page with **Author > Tools > From other tools**.

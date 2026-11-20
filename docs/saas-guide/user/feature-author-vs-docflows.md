---
title: Author mode and Docflows
description: When to write a page yourself in Author mode and when to let Docflows suggest the change.
---

# Author mode and Docflows

SudoDocs has two ways to produce documentation changes, built on the same review pipeline of three roles (see [Doc Team Roles](../admin/doc-team-roles.md)): an Information Architect decides what must change, a Technical Writer drafts it and an Editor reviews it with fresh eyes before a person sees it.

## What they are

**[Author mode](author-mode.md)** is where you write. You open the pages, edit them, and, when you want help, run **Draft from a ticket or pull request** to have SudoDocs draft the changes a ticket or pull request needs, into the files you choose, inside your own change.

**[Docflows](doc-drift.md)** runs on its own. Once a repository or Jira is connected with a webhook (see the [admin guide](../admin/doc-drift.md)), every merged pull request and every Jira ticket moved to Done triggers a suggestion, with nobody having to remember to start it.

## Where they differ

| | Author mode | Docflows |
|---|---|---|
| **Starts** | You, by hand | Automatically, from a pull request or a ticket |
| **Where the work happens** | In your own change on a work branch, with many files and a live preview | In a suggestion card, which can propose several files at once |
| **Review** | Your change's pull request, with comments, @mentions and outside reviewers | The suggestion card (with [reviews](reviews.md) on top), then the pull request you push |
| **Moving to Author mode** | n/a | **Open in Author mode** on a suggestion opens its files in your documentation repository for further editing |

Drafts made by Author mode's ticket tool are your own scratch records: they never overwrite or appear as a Docflows suggestion.

## When to use which

Let **Docflows** be the safety net that catches every pull request that ships, so documentation impact is never missed because nobody thought to start. Use **Author mode** for documentation you want to shape yourself: a major launch, a new concept that needs careful placement, or edits to existing pages. Most teams use both.

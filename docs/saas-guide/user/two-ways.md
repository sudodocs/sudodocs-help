---
title: Write from scratch or maintain existing docs
description: SudoDocs works in two modes. Write documentation from your code when you have none, or keep an existing documentation repository up to date.
---

# Write from scratch or maintain existing docs

SudoDocs works in two modes. Pick the one that matches where your documentation is today. You can use both: write the first version from your code, then keep it current with the same tools your team already uses.

| | **Write docs from scratch** | **Maintain an existing docs repository** |
|---|---|---|
| **Use it when** | You have a code repository and little or no documentation. | You already have a documentation repository, in the docs tool you use today. |
| **Where it starts** | **Author > Start from code**. | Connect your documentation repository, then open **Author**, **Docflows** or **Publish**. |
| **What SudoDocs does** | Reads your code, plans the documentation with you, drafts every page, checks it, and sends it to an empty documentation repository as one pull request. | Suggests changes from pull requests and Jira tickets, lets you edit pages with a live preview, checks your docs and API files, drafts release notes, and publishes the site. |
| **Learn more** | [Write docs from scratch](start-from-code.md) | [Maintain your docs](#maintain-your-docs) |

## Write docs from scratch

[Start from code](start-from-code.md) turns a code repository into a first draft of **public** documentation, one type at a time: a user guide, an admin guide, a command-line reference and an API reference. You review and edit every page before anything reaches your repository, and a person always merges the pull request.

## Maintain your docs

Connect your documentation repository as a **Documentation** repository (see [Connect repositories](../admin/connect-repos.md)), and your code repository as **Code**. Then:

- **Keep pages current from code changes.** [Docflows](doc-drift.md) reads every merged pull request and Jira ticket and suggests the documentation changes, which you approve or send back.
- **Write and fix pages yourself.** [Author mode](author-mode.md) edits Markdown, MDX, reStructuredText and AsciiDoc with a live preview in your site's skin, then opens a review pull request.
- **Check the work.** [Validate](../publish/validate.md) finds broken links and API problems before you publish. [API Specs](../admin/api-specs.md) checks your OpenAPI files against your own rules.
- **Record each release.** The [Changelog](release-composer.md) collects what shipped, drafts the notes and pushes them to your docs.
- **Publish it.** [Publish](../publish/index.md) builds a hosted site from the documentation repository.

## Using both together

When you write documentation from scratch, SudoDocs leaves you with a normal documentation repository, and everything above applies to it:

1. After you merge the pull request, **sync the repository** (**Admin > Repositories > Sync now**). Docflows needs the sync to find the pages it should update.
2. Create the site from the same page where you merged the work. For an API run, the API file is added to **API Specs** for you.
3. Turn on **Use the public-facing rules everywhere** in **Admin > Roles** so Docflows and the AI tools keep following the same rules as the first draft. See [Configure Doc Team Roles](../admin/doc-team-roles.md#public-facing-documentation).
4. Edit pages in Author mode whenever you like. If you run Start from code again for the same type, pages you edited are kept unless you choose to overwrite them.

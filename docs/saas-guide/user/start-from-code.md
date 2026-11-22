---
title: Write docs from scratch with Start from code
description: Generate public documentation from a code repository, one type at a time, and send it to an empty documentation repository as a pull request.
---

# Write docs from scratch with Start from code

**Start from code** reads a code repository and drafts public documentation for it. It is for the product that has code and no documentation yet. You choose what to write one **type** at a time, review every page, and send the result to a documentation repository as **one pull request**. Nothing is published until a person merges it.

> **This is a first draft.** SudoDocs writes only from facts it finds in your code, and it checks every page, but it cannot prove that a description of behavior is right. Read each page before you merge.

## What you need

- A **code repository** connected as **Code**, and a **new, empty repository** connected as **Documentation**. See [Connect repositories](../admin/connect-repos.md). Keep the documentation in its own repository: SudoDocs never writes into your code repository.
- A plan with Publish, and AI credits. SudoDocs shows the credit cost before it starts each step.
- Write access for the SudoDocs GitHub App on the documentation repository.

## The documentation types

You pick one type for each run. Run it again for the next type, and each type adds its own section to the same repository.

| Type | For | What it contains |
|---|---|---|
| **User guide** | People who use the product | What it does and how to do tasks in it, written as tasks. |
| **Admin guide** | People who administer it | Users, roles, permissions, settings and integrations inside the product. It does not cover installation or hosting. |
| **CLI reference** | Command-line users | Every command, option and argument with examples. Offered only when your code has a command-line interface. |
| **API reference** | Developers who call your API | An OpenAPI file and reference pages grouped by resource. Offered only when your code has HTTP routes. |
| **Deployment guide** (optional, under **More types**) | People who host the product themselves | Installing, configuring and running it. Meant for internal teams and self-hosted products. It is never offered first. |

A type that your code cannot support is greyed out with the reason, for example "No command-line interface was found in the code."

## Public by default

The documentation is written for your **readers**, not your engineers. Every role works under these rules, which your own [skill files](../admin/doc-team-roles.md) can add to or adjust:

- No internal details: no file paths, code names, database tables or internal settings.
- Public things may be named: the paths and parameters of your public API, command names and options, and settings an administrator changes in the product.
- No installation, hosting or deployment steps, except in the optional Deployment guide.
- Only what the code supports. SudoDocs does not invent features, defaults or limits.
- User and admin content stay on separate pages, with task-style titles.

## Steps

1. Open **Author** in the left menu and click **Start from code**.
2. Choose the code repository and the documentation repository, then click **Read code**. SudoDocs downloads the code once and reads it. It reads Python, JavaScript and TypeScript, Go, Java and Kotlin, C#, Ruby, PHP, Rust and Elixir in depth: pages, routes, commands and settings. Other languages are counted and read from their package files. It never opens secret files, such as environment files or keys.
3. Look at **What we found**: languages, API routes, commands and modules.
4. Choose a documentation type and click **Plan documentation**. The **Information Architect** proposes the pages, each with a purpose, an audience and the facts it will use.
5. **Edit the plan.** Rename pages, change a purpose or audience, reorder, remove, add. Click **Save plan** if you want to keep your edits before moving on.
6. Click **Draft pages**. For each page, the **Technical Writer** drafts it, SudoDocs checks it, the **Editor** reviews it, and the Writer rewrites it once if something was wrong. The page shows each page's progress.
7. **Review the drafts.** Open a page to read it as it will look, or switch to Markdown. A page marked **Needs a look** lists the lines to check. Click **Edit** to change a page yourself, or **Draft again** to have it rewritten.
8. Enter the **Product name** (used for the site title, home page and Changelog) and click **Write to repository**.
9. Review and merge the pull request on GitHub.
10. Back on the run page, click **Create site**. SudoDocs builds the first version of the site from the documentation repository.

To write another type, click **Plan another type**. SudoDocs reuses the same reading of your code.

## How a draft is checked

| Check | What it looks for |
|---|---|
| **Internal details** | File names, code names, internal setting names, stack traces and blocks that look like source code. |
| **Invented facts** | An API path or command option in the text that the code does not have, and numbers (limits, sizes, times) that the code does not show. |
| **The Editor** | Reads every sentence against the facts and quotes the ones the code does not support. |
| **One rewrite** | Anything found is sent back to the Writer once. What still fails stays marked on the page for you. |

A page can pass every check and still describe behavior wrongly. The checks catch most invention and leaks, not every mistake.

When you edit a page yourself, the automatic checks run again and no credits are used.

## What it writes

The pull request adds, in the documentation repository:

- A folder for the type, with one Markdown page for each planned page. For example, `user-guide/` for the user guide.
- `sudodocs.json`, with the site title and a navigation section for the type. Other settings you already have are kept.
- On the first run: a home page that lists the sections, and a **Changelog** page.
- For the API reference: the OpenAPI file. If your code repository already has one, it is copied as it is. Otherwise SudoDocs drafts one from your routes and keeps only the paths and methods that your code shows.

The pull request says it is AI-generated and names the pages that still need a look.

### The Changelog starts as the first release

The generated Changelog treats the documentation as the **first release**: a single entry with the version found in your code (or 1.0.0) and a short summary of the product. Edit it to add your earlier releases. The site's Changelog page is set to this file, so the [Changelog](release-composer.md) tool can add each later release to it.

### The API file in API Specs

When you click **Create site** after an API reference run, SudoDocs adds the OpenAPI file to **API Specs** and publishes it in the site's API reference. From then on it is checked like any other spec, and its changes appear in the Changelog's incoming API changes.

## Running it again

You can run a type again, for example after a big change in the code. SudoDocs only updates a page that is new, or that nobody has edited since SudoDocs wrote it. A page you edited by hand is **kept**, and the pull request lists it. Turn on **Overwrite edited pages** if you want a full refresh. If nothing would change, SudoDocs tells you instead of opening an empty pull request.

For changes after the first draft, use [Docflows](doc-drift.md), which updates the right pages from each pull request. See [Write from scratch or maintain existing docs](two-ways.md#using-both-together).

## Credits

Planning uses credits once for each type. Drafting uses credits for each page: one step for the Writer and one for the Editor, and more if a page is rewritten or has a diagram. The page shows an estimate, such as "about 30 credits, up to 48 if pages are rewritten", before you start. Credits for a step that fails are returned. If your credit limit is reached, the remaining pages show **Failed** and **Draft again** retries them later.

## Limits

- A run plans about twelve pages, and never more than 25.
- GraphQL and gRPC definitions are not read yet.
- The code goes to the AI provider your organization uses (see [Connect an AI provider](../admin/llm-provider.md)). Nothing is stored beyond what your connected repositories already store.
- Diagrams are added only to pages the plan marks for one, and only when they draw correctly.

## See also

- [Write from scratch or maintain existing docs](two-ways.md)
- [Configure Doc Team Roles](../admin/doc-team-roles.md): skill files and the public-facing rules.
- [Author mode](author-mode.md): edit the pages afterwards.
- [Publish your docs](../publish/index.md)

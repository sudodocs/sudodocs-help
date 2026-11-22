---
title: Write docs from scratch with Start from code
description: Generate public documentation from a code repository, one type at a time, then review and edit it in Author mode and send it as one pull request.
---

# Write docs from scratch with Start from code

**Start from code** reads a code repository and drafts public documentation for it. It is for the product that has code and no documentation yet. You choose what to write one **type** at a time. The drafts then open in [Author mode](author-mode.md), where you review, edit and invite reviewers like any other change, and open **one pull request**. Nothing is published until a person merges it.

> **This is a first draft.** SudoDocs writes only from facts it finds in your code, and it checks every page, but it cannot prove that a description of behavior is right. Read each page before you merge.

## What you need

- A **code repository** connected as **Source code**. See [Connect repositories](../admin/connect-repos.md). It does not need to be synced: Start from code reads it by itself.
- A new, **empty documentation repository** connected as **Documentation**. You can choose it later, when you click **Draft**; you do not need it to read the code or to plan. Keep the documentation in its own repository: SudoDocs never writes into your code repository. An empty repository has nothing to sync, so it shows no **Sync now** button.
- A plan with Publish, and AI credits. SudoDocs shows the credit cost before it starts each step.
- Write access for the SudoDocs GitHub App on the documentation repository.

If you connected the code repository before it had the permissions to read and write code and pull requests, remove it and connect it again so SudoDocs can read it.

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
- Functions only the vendor's own operators use stay out of the customer guides.
- Only what the code supports. SudoDocs does not invent features, defaults or limits.
- User and admin content stay on separate pages, with task-style titles.

## Steps

1. Open **Author** in the left menu and click **Start from code**. Earlier runs are under **History**.
2. Choose the code repository and click **Read code**. SudoDocs downloads the code once and reads it. It reads Python, JavaScript and TypeScript, Go, Java and Kotlin, C#, Ruby, PHP, Rust and Elixir in depth: pages, routes, commands and settings. Other languages are counted and read from their package files. It also scans the product's screens, so the plan covers what users see. It never opens secret files, such as environment files or keys.
3. Look at **What we found**: languages, screens, API routes, commands and modules.
4. Choose a documentation type and click **Plan documentation**. The **Information Architect** proposes the pages, up to 40 in all, each with a purpose, an audience and the facts it will use. Anything it could not cover is listed under **Not covered**. Click **Add page** beside an item to add it to the plan, or **Suggest more pages** to ask for more.
5. **Edit the plan.** Drag pages to reorder them, or use the keyboard. Click a page to edit its title, purpose and audience in the middle of the screen. Add or remove pages. Changes are saved as you go, and **Undo** works. For each page you can switch **Include a diagram** on and choose its type (see [Diagrams](#diagrams)).
6. Choose the documentation repository, confirm the **Product name** (used for the site title, home page and Changelog), and click **Draft**. SudoDocs opens a change in Author mode on that repository.
7. **Watch the drafting.** The editor opens with a strip that shows "Drafting 3 of 12 pages". Pages appear in the file list as each one is written, and the first page opens. You can start reading and editing while the rest is written. For each page, the **Technical Writer** drafts it, SudoDocs checks it, the **Editor** reviews it, and the Writer rewrites it once if something was wrong.
8. **Review in Author mode.** Lines that the checks flagged, and the Editor's notes, are comments labelled **SudoDocs Editor (AI)** in the review panel. Edit pages like any others, [invite reviewers](reviews.md), including people outside SudoDocs, and use **Tools > Redraft from code** to have a page written again.
9. Open **one pull request** from the editor and merge it on GitHub.
10. Back on the run page, or from the strip in the editor, click **Create site**. SudoDocs builds the first version of the site from the documentation repository.

The run page keeps a status for every page (**Waiting**, **Writing**, **Checking**, **Reviewing**, **Ready**, **Needs a look**, **Failed**), with **Open** to jump to the page in the editor and **Draft again** to retry one.

To write another type, click **Plan another type**. SudoDocs reuses the same reading of your code, and the plan you saved is kept: planning again for the same type never loses your earlier drafts.

## Redraft a page

Open the page in Author mode, then **Tools > Redraft from code**. The tool shows the credit cost first. The new draft does not replace anything on its own: it opens beside the page in a compare view with **Changes** and **Rendered** tabs. Click **Apply** to use it (and **Undo** to take it back) or **Discard** to keep what you had.

## How a draft is checked

| Check | What it looks for |
|---|---|
| **Internal details** | File names, code names, internal setting names, stack traces and blocks that look like source code. |
| **Invented facts** | An API path or command option in the text that the code does not have, and numbers (limits, sizes, times) that the code does not show. |
| **The Editor** | Reads every sentence against the facts and quotes the ones the code does not support. |
| **One rewrite** | Anything found is sent back to the Writer once. What still fails stays marked as a comment on the page for you. |

A page can pass every check and still describe behavior wrongly. The checks catch most invention and leaks, not every mistake.

When you edit a page yourself, the automatic checks run again and no credits are used.

## Diagrams

A page marked **Include a diagram** gets one [Mermaid diagram](diagram-gen.md) under **How it works**, drawn from the page's purpose and its sources. Choose the diagram type for the page, or leave it on **Automatic**.

| You want to show | Choose |
|---|---|
| The parts of the system and how they connect (an architecture overview) | **Flowchart** |
| Who talks to whom over time, such as a request or a sign-in | **Sequence** |
| The stages something moves through | **State** |
| The information the product keeps and how it relates | **Data model** |
| A user's path through the product | **User journey** |
| Concepts around a topic | **Mind map** |
| Releases over time | **Timeline** |
| Let SudoDocs decide | **Automatic** (usually a flowchart or a sequence) |

Tips:

- Keep a diagram to about twelve boxes. For a large system, make two pages: a flowchart for the overview and a sequence for the main flow.
- Write a **Purpose** that says what to show. The diagram is drawn from it.
- Public pages cannot name internal files, classes or functions, so expect product-level boxes. An exact internal architecture belongs in the Deployment guide.
- The diagram lands at the end of the page. Move it where you want it in the editor. Flowcharts and sequence diagrams open in the visual builder.
- A diagram is added only when it draws correctly and passes the same checks. If one could not be made, a comment on the page says why.

## What it writes

The pull request adds, in the documentation repository:

- A folder for the type, with one Markdown page for each planned page. For example, `user-guide/` for the user guide.
- `sudodocs.json`, with the site title and a navigation section for the type. Other settings you already have are kept.
- On the first run: a home page that lists the sections (the list is updated by later runs), and a **Changelog** page.
- For the API reference: the OpenAPI file. If your code repository already has one, it is copied as it is. Otherwise SudoDocs drafts one from your routes and keeps only the paths and methods that your code shows.

The pull request says it is AI-generated and names the pages that still need a look.

### The Changelog starts as the first release

The generated Changelog treats the documentation as the **first release**: a single entry with the version found in your code (or 1.0.0) and a short summary of the product. Edit it to add your earlier releases. The site's Changelog page is set to this file, so the [Changelog](release-composer.md) tool can add each later release to it.

### The API file in API Specs

When you click **Create site** after an API reference run, SudoDocs adds the OpenAPI file to **API Specs** and publishes it in the site's API reference. From then on it is checked like any other spec, and its changes appear in the Changelog's incoming API changes.

## Running it again

You can run a type again, for example after a big change in the code. SudoDocs only updates a page that is new, or that nobody has edited since SudoDocs wrote it. A page you edited by hand is **kept**, and the change lists it. Turn on **Overwrite edited pages** when you click **Draft** if you want a full refresh. If nothing would change, SudoDocs tells you instead of opening an empty pull request.

For changes after the first draft, use [Docflows](doc-drift.md), which updates the right pages from each pull request. See [Write from scratch or maintain existing docs](two-ways.md#using-both-together).

## Credits

Planning uses credits once for each type. Drafting uses credits for each page: one step for the Writer and one for the Editor, and more if a page is rewritten or has a diagram. The page shows an estimate, such as "about 30 credits, up to 48 if pages are rewritten", before you start. Redrafting a page shows its cost first. Credits for a step that fails are returned. If your credit limit is reached, the remaining pages show **Failed** and **Draft again** retries them later.

## Limits

- A plan has up to 40 pages.
- GraphQL and gRPC definitions are not read yet.
- The code goes to the AI provider your organization uses (see [Connect an AI provider](../admin/llm-provider.md)). Nothing is stored beyond what your connected repositories already store.
- Diagrams are added only to pages the plan marks for one, and only when they draw correctly.

## See also

- [Write from scratch or maintain existing docs](two-ways.md)
- [Configure Doc Team Roles](../admin/doc-team-roles.md): skill files and the public-facing rules.
- [Author mode](author-mode.md): edit, review and publish the pages.
- [Publish your docs](../publish/index.md)

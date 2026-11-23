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
| **API reference** | Developers who call your API | One **OpenAPI file** with every endpoint. It has no pages of its own: your site draws the API reference from the file. Offered only when your code has HTTP routes. |
| **Deployment guide** (optional, under **More types**) | People who host the product themselves | Installing, configuring and running it. Meant for internal teams and self-hosted products. It is never offered first. |

The API reference works differently from the others: there is nothing to plan, and it costs no planning credits. See [The API reference](#the-api-reference).

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
6. Choose the documentation repository, confirm the **Product name** (used for the site title, home page and Changelog), and click **Draft**. SudoDocs opens a change in Author mode on that repository. If you already have an open Start from code change in the same repository, **Add to** lets you draft into it instead, so all your guides travel in one pull request. A change can hold one run of each type.
7. **Watch the drafting.** The editor opens with a strip that shows "Drafting 3 of 12 pages". Pages appear in the file list as each one is written, and the first page opens. You can start reading and editing while the rest is written. For each page, the **Technical Writer** drafts it, SudoDocs checks it, the **Editor** reviews it, and the Writer rewrites it once if something was wrong.
8. **Preview the whole site.** In the strip, open the **Start from code** menu and click **Preview site**. SudoDocs builds a private copy of the site from your change, in the Manual skin, with a home page, navigation and a Changelog. Click **Open preview** to see it, and **Refresh preview** after more edits. Only members of your organization can open it; anyone else is asked to sign in. See [Preview before you merge](#preview-before-you-merge).
9. **Review in Author mode.** Lines that the checks flagged, and the Editor's notes, are comments labelled **SudoDocs Editor (AI)** in the review panel. Edit pages like any others, [invite reviewers](reviews.md), including people outside SudoDocs, use **Tools > Redraft from code** to have a page written again, and use the comment tools described in [Clean up the comments](#clean-up-the-comments).
10. Open **one pull request** from the editor and merge it on GitHub. The pull request text links to the preview.
11. Back on the run page, or from the strip in the editor, click **Create site**. SudoDocs makes the site from the documentation repository. It stays private until you publish it (see below).

The run page keeps a status for every page (**Waiting**, **Writing**, **Checking**, **Reviewing**, **Ready**, **Needs a look**, **Failed**), with **Open** to jump to the page in the editor and **Draft again** to retry one.

To write another type, click **Plan another guide** in the strip, or **Plan another type** on the run page. SudoDocs reuses the same reading of your code, and the new run joins the same change. If you read the code with an older version of the reader, the run page says so and shows **Read code again**: use it, because the new reader finds more, such as every command of a large command-line tool and the routes of a large API.

On the run page of a finished run you can also:

- **Move to another change.** Moves the run's pages, with your edits, into another open change of the same repository, then discards the old change. It is offered when the run is alone in its change and the other change has no run of the same type.
- **Remove from this change.** Takes a type out of the change: its folder, its navigation section and the home page links to it are removed, and links to its pages in other pages become plain words. The change, the other guides and the pull request stay. Use it to plan a type again.

## Preview before you merge

**Preview site** builds the whole documentation site from your change, so you can see the navigation, the home page and the pages as readers will, before anything is merged. It is a private **draft site**:

- Only members of your organization can open it. Anyone else is asked to sign in, and people from other organizations are refused.
- It has no public address and does not count against your plan's site limit. You can have up to three draft sites.
- It uses the Manual skin. You choose the skin, home page and navigation after the merge, in the [Studio](../publish/studio.md).

When the pull request is merged, click **Create site**. The draft site now follows the documentation repository's main branch and is marked **Draft**, still private. On its Publish page you can **Open Studio**, **Set access** and **Open preview**. When you are ready, click **Publish site**: it checks your plan's site limit, makes the site public and starts the first live build. If you discard the change instead, its draft site is deleted.

The home page is a designed page made of blocks (a hero with search, cards for your guides and a call to action). It is saved in `sudodocs.json` in your documentation repository, so it travels with the pull request, and the [home page designer](../publish/studio.md) opens it. Each later guide adds its own cards.

## Clean up the comments

The review panel in Author mode has tools for the comments that Start from code and Self review leave:

- **Suggest a fix.** The AI reads a comment, and on a page written by Start from code it searches your code for the answer itself. You are not asked for facts that only the code holds. It proposes a replacement for the commented text, or tells you that the code does not support the sentence and shows what it removed. It only proposes: nothing changes until you click **Apply suggestion**. Two credits are used for each proposal, and none when it finds nothing to propose.
- **Apply N suggestions.** Applies every open suggestion at once, one commit for each file. Suggestions whose text has since changed are skipped.
- **Add cross-references.** Finds places where a page mentions what another page covers and suggests a link for each, as a comment you can apply. It links only to pages that exist in the change.
- **Refresh checks.** Runs the free checks again on every page as it is now and closes the comments that no longer apply.
- **Review pages again.** Asks the Editor to read every page again. The credit cost is shown first, and its older notes are replaced.

Pages written by Start from code also link to each other as they are drafted, and a link to a page that does not exist is removed.

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

## The API reference

Choose **API reference** and the plan card says what will be written: one OpenAPI file. There is no outline to edit. Click **Write the file**.

- If your code repository already has an OpenAPI file, it is copied as it is.
- Otherwise SudoDocs writes one from your routes, in parts of related routes (for a large API, many parts), then merges the parts and keeps only the paths and methods your code shows. The page states how many routes the file covers, and says so when a part could not be written.
- The file is `api/openapi.yaml` in the change. Edit it in Author mode with the **Describe the API** form or in the source, and see the live API reference beside it. It does not appear in the page order, because the site's API reference tab draws it.
- Keep it at `api/openapi.yaml`. **Create site** looks for it there when it adds the file to [API Specs](../admin/api-specs.md); if you move it, add it yourself from the site's API reference tab with **Add and publish**.

Later improvements are ordinary changes to the file in Author mode, or fixes from API Specs.

## What it writes

The pull request adds, in the documentation repository:

- A folder for the type, with one Markdown page for each planned page. For example, `user-guide/` for the user guide.
- `sudodocs.json`, with the site title and a navigation section for the type. Other settings you already have are kept.
- On the first run: a home page that lists the sections (the list is updated by later runs), and a **Changelog** page.
- For the API reference: the OpenAPI file `api/openapi.yaml`, and no pages.

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
- Command-line tools built with Click, Typer, argparse, Commander and Cobra are read as a tree of commands and subcommands. Tools built with other libraries are read as a flat list of command names.
- A large API is read in groups of routes, so the plan covers every group, not only the first routes.
- The code goes to the AI provider your organization uses (see [Connect an AI provider](../admin/llm-provider.md)). Nothing is stored beyond what your connected repositories already store.
- Diagrams are added only to pages the plan marks for one, and only when they draw correctly.

## See also

- [Write from scratch or maintain existing docs](two-ways.md)
- [Configure Doc Team Roles](../admin/doc-team-roles.md): skill files and the public-facing rules.
- [Author mode](author-mode.md): edit, review and publish the pages.
- [Publish your docs](../publish/index.md)

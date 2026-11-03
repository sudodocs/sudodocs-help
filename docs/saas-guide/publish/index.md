---
title: Publish your docs
description: Turn a documentation repository into a hosted docs site with search, an API reference, analytics, AI answers and access control, and write and review the pages in SudoDocs.
---

# Publish your docs

**Publish** turns the documentation in your GitHub repository into a fast, searchable docs site at an address like `your-docs.sudodocs.app`, or on your own domain. You keep your docs where they are; SudoDocs builds the site, keeps it up to date, and gives your team a place to write, check and review changes before they go live.

You do not need to migrate. Publish reads the repository you already have (see [Supported docs tools](supported-tools.md)).

## What you get

- **A site that matches your docs tool.** Mermaid diagrams, tabs, callouts, math, versions and translations work the way they do in Docusaurus, Mintlify and MkDocs.
- **A choice of looks.** Seven skins and ready-made [starter templates](design.md#start-from-a-template).
- **An API reference** from your OpenAPI files, with versions: see [API reference](api-reference.md).
- **Writing and review in SudoDocs.** [Author mode](../user/author-mode.md) edits pages on a work branch, and [reviews](../user/reviews.md) happen on a pull request.
- **Checks before you publish.** [Validate](validate.md) finds broken links, missing descriptions and API problems.
- **Readers' questions answered.** [Ask AI](ask-ai.md) answers from your own pages only.
- **Made for AI tools.** [`llms.txt`, Markdown copies and an MCP server](ai-ready.md) on every site.
- **Numbers you can trust.** [Analytics](analytics.md) without cookies, with AI and bot traffic labelled.
- **Private docs when you need them.** [Password, single sign-on or your own login page](protected-docs.md).
- **A health check** for any public docs site: [Site health](site-health.md).

## Who does what

- **Administrators** create sites and change their settings in **Admin Dashboard > Publish**: source, design, navigation, versions, domains and protection. An administrator can let Writers manage site settings too (see [Publishing policy](../admin/publish-admin.md)).
- **Writers** check and publish sites, read the analytics and activity, and write pages in **Author** from the left menu.
- **Reviewers** read and comment on the changes and items they are asked about.

## Start here

1. An administrator connects the repository (**Admin Dashboard > Repositories**) and creates the site: [Create a site](create-a-site.md).
2. Pick a look: [Design](design.md).
3. Press **Publish**. The first build usually takes a minute or two.
4. Check the site, then add a [custom domain](domains.md) if you want one.

## Plans

Publish is part of every plan, with different limits. See [Plans](../admin/plans.md#publish).

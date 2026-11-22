---
title: Changelog
description: Product updates to SudoDocs in November 2026, newest release first.
---

# Changelog

What's new in SudoDocs in **November 2026**, newest release first. SudoDocs updates for everyone at once, so there's nothing to install - except the CLI, which says how to upgrade. For earlier months, see [Past Changelogs](changelog-archive/index.md).

## November DD, 2026 {#2026-11-DD}

### Write docs from scratch

- **Start from code.** Have a code repository and no documentation? Choose **Author > Start from code**, pick a documentation type (user guide, admin guide, CLI reference or API reference), review the plan, and SudoDocs drafts every page, checks it against your code, and sends it to an empty documentation repository as one pull request. The documentation is public by default: no internal names and no deployment steps. See [Start from code](saas-guide/user/start-from-code.md).
- **Two ways to use SudoDocs.** Write documentation from scratch, or maintain an existing documentation repository with Docflows, Author mode, Validate and the Changelog. See [Write from scratch or maintain existing docs](saas-guide/user/two-ways.md).
- **A first-release Changelog and your API file, ready.** The generated Changelog starts as the first release for you to extend, and **Create site** adds the generated OpenAPI file to **API Specs**. Running a type again keeps the pages you edited. See [Start from code](saas-guide/user/start-from-code.md#running-it-again).

### Doc Team Roles

- **Skill files.** Give the Information Architect, Technical Writer and Editor a skill by uploading Markdown files. Download a template for each role, or download a role's current skill to edit and upload again. See [Configure Doc Team Roles](saas-guide/admin/doc-team-roles.md#give-a-role-its-skill).
- **Public-facing rules everywhere.** A new switch on **Admin > Roles** applies the public-facing rules to Docflows, the Changelog, reviews, Self review and the Author mode rewrite tools. See [Public-facing documentation](saas-guide/admin/doc-team-roles.md#public-facing-documentation).

## November 19, 2026 {#2026-11-19}

### Publish

- **Publish your docs with SudoDocs.** Turn the documentation in your GitHub repository into a fast, searchable site at your own address or domain, with versions, translations, pull request previews and an API reference. It reads the docs tool you already use. See [Publish your docs](saas-guide/publish/index.md) and [Supported docs tools](saas-guide/publish/supported-tools.md).
- **Seven skins and starter templates.** Pick a look, start from a template, and optionally add its starter announcement, button, footer and landing page through a pull request. See [Design](saas-guide/publish/design.md).
- **Ask AI on your site.** Readers ask a question and get an answer from your own pages only, with links to its sources. See [Ask AI](saas-guide/publish/ask-ai.md).
- **AI-ready by default.** Every site has `llms.txt`, a Markdown copy of each page and an MCP server for AI tools. See [AI-ready docs](saas-guide/publish/ai-ready.md).
- **Analytics without cookies.** See readers, AI agents and bots separately, what people search for and which questions your docs could not answer. See [Analytics](saas-guide/publish/analytics.md).
- **Private docs.** Protect a site, or some folders, with a password, single sign-on or your own login page, and give AI tools an access key. See [Protected docs](saas-guide/publish/protected-docs.md).
- **Site health.** Check any public docs site for broken links, AI readiness, structure and speed, and monitor your own sites on a schedule. See [Site health](saas-guide/publish/site-health.md).
- **Design your site in the Studio.** One screen with four modes: skin, home page, navigation, and header and footer. Drafts save themselves, and you publish them together. The home page designer builds a page from blocks (hero with search, cards, steps, latest updates and more), previews it in your skin and in every language, and keeps a history. See [Studio](saas-guide/publish/studio.md).
- **Helm charts.** Register a chart, check it, have AI write the missing value descriptions, and publish a Helm reference next to your API reference. See [Helm charts](saas-guide/publish/helm-charts.md).
- **Validate before you publish.** Find broken links and API problems, and fix many of them with a pull request. See [Validate](saas-guide/publish/validate.md).

### Author mode

- **Write and edit your docs in SudoDocs.** Author mode replaces Author a Feature: edit pages with a live preview in your site's skin, insert blocks, variables, snippets and embeds, move pages, see who else is editing, and review through a pull request. It also drafts changes from a Jira ticket or pull request. See [Author mode](saas-guide/user/author-mode.md).

### Reviews

- **One way to review.** Comment, @mention colleagues, invite outside reviewers by email and give a verdict on Mermaid diagrams, captures, release notes drafts, Docflows suggestions and API scans. Call **@Editor**, **@Writer** or **@IA** in a comment. See [Reviews](saas-guide/user/reviews.md).
- **Notices in Slack and Jira.** Administrators can send review events to a Slack channel or as a comment on a Jira issue. See [Publishing policy](saas-guide/admin/publish-admin.md#review-notices-in-slack-and-jira).

### Diagrams and Capture

- **A library of Mermaid diagrams.** Generate, edit visually, version and insert diagrams into pages. See [Mermaid diagrams](saas-guide/user/diagram-gen.md).
- **A new Capture library and editor.** Browse captures as cards, edit Interactive, Screenshot, Recording and the new Audio captures in one editor, cut and trim recordings, and restore deleted steps. See [Capture](saas-guide/user/capture.md#the-library-and-the-editor).

### Release notes

- **Release Composer is now Changelog.** Same queue and drafts, now with reviews on drafts and a clearer draft page. See [Changelog](saas-guide/user/release-composer.md).
- **Push to source puts release notes on your site's Changelog page.** The pull request targets the changelog page of the site built from your repository (set it once per site if you like), adds a new page to your navigation, writes Mintlify `<Update>` entries, and converts the notes for reStructuredText and AsciiDoc sites. The draft then shows when the page is live. See [Push to source](saas-guide/user/release-composer.md#push-to-source).

### For administrators

- **Publishing policy.** Choose who may change site settings, which repositories Writers may edit, which embed hosts are allowed and which email domains can be invited to review. See [Publishing policy](saas-guide/admin/publish-admin.md).
- **SAML, SCIM and protected docs for Enterprise.** Sign in with SAML, create and remove users automatically, and let your identity provider decide who reads private docs. See [SAML and SCIM](saas-guide/admin/sso-saml-scim.md).
- **Startup offer.** Teams on the Startup offer see when it ends. See [Plans & Billing](saas-guide/admin/plans.md#startup-offer).

### CLI

- **sudodocs-cli 1.4.0** adds `sudodocs publish`, `sudodocs edit`, `sudodocs health`, `sudodocs review`, `sudodocs capture`, `sudodocs diagram` `sudodocs admin charts`, `sudodocs chart-scan` and more `sudodocs admin` commands. The Feature Author commands `sudodocs items approve feature-drafts` and `sudodocs items release-notes` are removed. Upgrade with `pip install --upgrade sudodocs-cli`. See [Publish commands](cli-guide/user/publish.md) and [Author mode commands](cli-guide/user/edit.md).

### Improvements

- **A new left menu.** Home, Author, Docflows, Reviews, API Specs, Triage, Release Dashboard, Changelog and Publish, with the tools and Admin below. Admin is now one page for each job. See [Find your way around](saas-guide/user/find-your-way.md).
- **A redesigned Docflows page and a Triage page.** Filter the suggestions, review a diff with its files beside it, and decide many suggestions at once. See [Manage Docflows](saas-guide/user/doc-drift.md).
- **One API Specs page.** The registry, the checks and their results are together, and Helm charts have their own view. See [API specs](saas-guide/admin/api-specs.md).
- Author a Feature is retired: its drafts are kept, and its work moves to [Author mode](saas-guide/user/author-mode.md).
- The Diagram Generator is now the [Mermaid diagrams](saas-guide/user/diagram-gen.md) library.
- The Release Dashboard is now second in the left pane, with **Overview**, **Board** and **Releases** tabs, a **History** drawer and a **New release** button. See [Dashboards](saas-guide/user/dashboards.md).

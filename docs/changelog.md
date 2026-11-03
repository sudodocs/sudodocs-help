---
title: Changelog
description: Product updates to SudoDocs in November 2026, newest release first.
---

# Changelog

What's new in SudoDocs in **November 2026**, newest release first. SudoDocs updates for everyone at once, so there's nothing to install - except the CLI, which says how to upgrade. For earlier months, see [Past Changelogs](changelog-archive/index.md).

## November DD, 2026 {#2026-11-DD}

### Publish

- **Publish your docs with SudoDocs.** Turn the documentation in your GitHub repository into a fast, searchable site at your own address or domain, with versions, translations, pull request previews and an API reference. It reads the docs tool you already use. See [Publish your docs](saas-guide/publish/index.md) and [Supported docs tools](saas-guide/publish/supported-tools.md).
- **Seven skins and starter templates.** Pick a look, start from a template, and optionally add its starter announcement, button, footer and landing page through a pull request. See [Design](saas-guide/publish/design.md).
- **Ask AI on your site.** Readers ask a question and get an answer from your own pages only, with links to its sources. See [Ask AI](saas-guide/publish/ask-ai.md).
- **AI-ready by default.** Every site has `llms.txt`, a Markdown copy of each page and an MCP server for AI tools. See [AI-ready docs](saas-guide/publish/ai-ready.md).
- **Analytics without cookies.** See readers, AI agents and bots separately, what people search for and which questions your docs could not answer. See [Analytics](saas-guide/publish/analytics.md).
- **Private docs.** Protect a site, or some folders, with a password, single sign-on or your own login page, and give AI tools an access key. See [Protected docs](saas-guide/publish/protected-docs.md).
- **Site health.** Check any public docs site for broken links, AI readiness, structure and speed, and monitor your own sites on a schedule. See [Site health](saas-guide/publish/site-health.md).
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

- **Release Composer is now Release Changelog.** Same queue and drafts, with **Insert in Author mode** and reviews on drafts. See [Release Changelog](saas-guide/user/release-composer.md).

### For administrators

- **Publishing policy.** Choose who may change site settings, which repositories Writers may edit, which embed hosts are allowed and which email domains can be invited to review. See [Publishing policy](saas-guide/admin/publish-admin.md).
- **SAML, SCIM and protected docs for Enterprise.** Sign in with SAML, create and remove users automatically, and let your identity provider decide who reads private docs. See [SAML and SCIM](saas-guide/admin/sso-saml-scim.md).
- **Startup offer.** Teams on the Startup offer see when it ends. See [Plans & Billing](saas-guide/admin/plans.md#startup-offer).

### CLI

- **sudodocs-cli 1.4.0** adds `sudodocs publish`, `sudodocs edit`, `sudodocs health`, `sudodocs review`, `sudodocs capture`, `sudodocs diagram` and more `sudodocs admin` commands. The Feature Author commands `sudodocs items approve feature-drafts` and `sudodocs items release-notes` are removed. Upgrade with `pip install --upgrade sudodocs-cli`. See [Publish commands](cli-guide/user/publish.md) and [Author mode commands](cli-guide/user/edit.md).

### Improvements

- Author a Feature is retired: its drafts are kept, and its work moves to [Author mode](saas-guide/user/author-mode.md).
- The Diagram Generator is now the [Mermaid diagrams](saas-guide/user/diagram-gen.md) library.

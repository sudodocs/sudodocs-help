---
title: API reference
description: Publish your OpenAPI files as an API reference on your docs site, one spec or many, with versions.
---

# API reference

Publish builds an **API Reference** tab from your OpenAPI files, drawn with the same colours as the rest of the site, with a "try it" panel, search, and pages for AI tools.

It handles one large spec and many small specs from different repositories: each spec you publish becomes an API in the reference, and an **All APIs** page lists them together.

## Set it up in one place

**Admin Dashboard > API reference** shows, for the site:

- the specs **published in the reference**, each with **Take out of the reference**;
- specs you have already registered under **API Specs** but not published, with **Publish in the API reference**;
- OpenAPI files **found in the site's repository** that are not registered, with **Add and publish**, which registers the spec with the site's repository and branch, publishes it, turns the tab on and rebuilds.

Registered specs belong to the organization, so every site with the tab on shows them. See [API Specs](../admin/api-specs.md) for registering and checking specs. Your plan decides how many specs you can publish.

If two specs describe the same operation (same path and method), the first one wins and the build report names the clash. The same spec listed twice is shown once and the tab says so.

## Versions of an API

Specs with the same name and group form one API; the newest is shown at `/api/<name>/` and older ones at `/api/<name>/<version>/`, with a switcher and a notice. You can rename versions and APIs, add a version from another branch or file, or remove one from the reference.

## Editing the descriptions

Writers can edit the descriptions in OpenAPI files in [Author mode](../user/author-mode.md): a live preview of the reference beside the text, problems listed with their line, and a **Describe the API** form for the title, version, summaries, descriptions, tags and parameters. **Insert > API endpoints table** adds a table of endpoints to a page that is rebuilt from the spec every time.

## For AI tools

Every API page has a Markdown copy, is listed in `llms.txt` and is searchable through the MCP server: see [AI-ready docs](ai-ready.md).

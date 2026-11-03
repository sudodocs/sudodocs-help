---
title: Versions and languages
description: Publish several versions of your docs and translations, with a switcher for readers.
---

# Versions and languages

## Versions

Readers pick a version in the site header. The newest is served at the root; older versions live under their own address (for example `/2.0/`), with a notice that links to the latest.

SudoDocs finds versions in three ways:

- **Your docs tool's own versions** (Docusaurus versioned docs, Mintlify versions).
- **Branches and tags**: **Admin Dashboard > Publish > Versions** adds a version from a branch or a tag of the repository.
- **`versions` in `sudodocs.json`**, which also lets you list tags for MkDocs sites that use `mike`.

You can **rename** any version (for example "v3 (current)"). Older versions point their canonical address at the latest page so search engines do not index every copy. Pro keeps up to 5 versions, Enterprise has no limit, and Basic has one.

## Languages

Translations work for Docusaurus, MkDocs, Mintlify and `sudodocs.json`. The default language is served at the root and the others under `/<code>/`. A language menu appears in the header, search covers each language separately, and right-to-left languages (Arabic, Hebrew, Persian, Urdu) are marked as such (the Docs, Midnight and Editorial skins lay the page out right to left). The sitemap lists each page with its language alternates. Pro includes 3 languages and Enterprise has no limit.

Translations follow the latest version. Older versions are not translated.

## Analytics

[Analytics](analytics.md) can be narrowed to one version or one language.

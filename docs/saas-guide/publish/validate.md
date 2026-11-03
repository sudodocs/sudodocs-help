---
title: Validate
description: Find broken links, missing descriptions, API problems and drift between specs before you publish, and fix many of them with a pull request.
---

# Validate

**Workspace > Publish > Validate** checks a site's repository and branch against rules before you publish, with a plain explanation and a fix for each finding. A finding that **blocks publishing** holds the build (an email goes to the owner of builds started by a push); everything else is advice.

Findings are grouped as **Blocks publishing**, **Should fix** and **Optional**, with a short rule code on each. Four sub-tabs show counts and open on what needs attention: **Docs**, **API**, **Consistency** and **Fixes**. You can download the report as a log or JSON.

## Docs

Broken links and anchors, missing titles and descriptions, duplicate pages, images without descriptions, excluded files that other pages link to, and a `sudodocs.json` that is not valid JSON (which blocks publishing).

## API

Checks on the OpenAPI specs the site publishes: a valid spec, resolvable references, operation documentation, error responses, authentication, examples, and spec files nobody registered.

## Consistency

Compares specs with each other, within the same docs version, and against your organization's standard or the majority: the same names, the same error shapes, the same authentication. Breaking differences are reported, never patched for you.

## Fixes

For many findings SudoDocs prepares a change:

- **Deterministic fixes** (a title, a link or anchor, an operation id, a tag style, shared `info` copied when specs agree).
- **AI proposals** (a description or summary), checked against the spec before they are offered. A proposal costs 1 credit and is only charged when it is valid.

Nothing is changed until you choose: **Open pull request** opens one pull request per repository.

## Branches and versions

Pick the branch or version to check. Versions made from branches and tags are checked one by one.

## Via the CLI

```
sudodocs publish validate SITE
```

See [Publish commands](../../cli-guide/user/publish.md).

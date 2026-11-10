---
title: Publish commands
description: Create, publish, design, protect and measure docs sites from the terminal.
---

# Publish commands

Everything in [Publish](../../saas-guide/publish/index.md) can be scripted. Sites are named by their address (`my-docs`) or id. Run `sudodocs publish --help` for the full list.

## Create and publish

```bash
sudodocs publish plan                      # what your plan includes
sudodocs publish check --repo 12           # what a repository will publish, before you create anything
sudodocs publish templates                 # the starter templates
sudodocs publish create --name "Acme Docs" --slug acme-docs --repo 12 --template developer-docs
sudodocs publish build acme-docs           # publish now (add --no-wait to return at once)
sudodocs publish sites                     # your sites
sudodocs publish show acme-docs            # a site and its latest build
sudodocs publish builds acme-docs          # builds; the last 5 can be restored
sudodocs publish restore acme-docs 41      # make an earlier build live again
sudodocs publish delete acme-docs
```

A build that would make the live site worse (fewer pages, more parts not shown, many more broken links) is held back unless you add `--force`.

## Change settings

`publish set` takes the same options as `publish create`. Look and feedback settings go live at once; source settings apply at the next build.

```bash
sudodocs publish set acme-docs --skin midnight --accent "#6d5efc" --accent-dark "#a29bff"
sudodocs publish set acme-docs --template handbook      # --skin and the colour options win
sudodocs publish set acme-docs --no-social-cards --no-edit-in-sudodocs
sudodocs publish set acme-docs --feedback --feedback-email docs@example.com
sudodocs publish set acme-docs --ask-ai --ask-ai-cap 500
sudodocs publish set acme-docs --tracking plausible --plausible-domain docs.example.com
```

| Option | What it does |
|---|---|
| `--name`, `--slug`, `--title` | Name, address, site title. |
| `--repo`, `--branch`, `--content-root`, `--site-root` | Where the docs come from. |
| `--crawlers search|all|none` | Search engines only, everyone, or nobody. |
| `--template` | Start from a template (a skin and its colours). |
| `--skin`, `--accent`, `--accent-dark`, `--font-body`, `--font-heading`, `--radius` | The look. |
| `--auto-publish`, `--previews`, `--portal`, `--portal-title`, `--build-mode` | Behaviour and the API reference tab. |
| `--hide-badge` / `--show-badge` | The "Published with SudoDocs" badge (Pro and Enterprise). |
| `--social-cards` / `--no-social-cards`, `--edit-in-sudodocs` / `--no-edit-in-sudodocs` | Sharing images and the edit link. |
| `--feedback`, `--feedback-email` | Page feedback. |
| `--changelog-path` | The Changelog page of the site (for example `docs/changelog.md`; `.md`, `.mdx`, `.rst` or `.adoc`) that `sudodocs release-notes push` adds each release to. Empty text goes back to finding it. See [Push to source](../../saas-guide/user/release-composer.md#push-to-source). |
| `--ask-ai`, `--ask-ai-cap`, `--ask-ai-instructions` | [Ask AI](../../saas-guide/publish/ask-ai.md). |
| `--tracking plausible|ga4|none` and related options | [Your own analytics](../../saas-guide/publish/analytics.md#your-own-analytics-tool). |

### Add a template's starter content

```bash
sudodocs publish template-pr acme-docs handbook
```

Opens a pull request in the site's repository with an announcement bar, a **Get started** button, a footer and, if there is no home page, a landing page. Only what is missing is added. The site must be published once first.

## Navigation and hidden files

```bash
sudodocs publish nav acme-docs > nav.json         # the live navigation
sudodocs publish nav-pr acme-docs nav.json --message "docs: reorder"
sudodocs publish exclude list acme-docs
sudodocs publish exclude add acme-docs internal/ "*.draft.md"
sudodocs publish exclude include acme-docs internal/keep-me.md
```

Changes go through a pull request. See [Navigation](../../saas-guide/publish/navigation.md).

## Versions

```bash
sudodocs publish version list acme-docs
sudodocs publish version freeze acme-docs "v2"     # keep the live docs as a version
sudodocs publish version rename acme-docs v2 "v2 (LTS)"
sudodocs publish version delete acme-docs v1
```

## Custom domains

```bash
sudodocs publish domain add acme-docs docs.acme.com
sudodocs publish domain check acme-docs docs.acme.com
sudodocs publish domain primary acme-docs docs.acme.com
sudodocs publish domain list acme-docs
sudodocs publish domain remove acme-docs docs.acme.com
```

## Protect a site

```bash
echo "a-long-shared-password" | sudodocs publish protect acme-docs --password-stdin
sudodocs publish protect acme-docs --keep-password --path /internal/
sudodocs publish protect-sso acme-docs --method sso --domain acme.com --group staff --session-hours 8
sudodocs publish protect-sso acme-docs --method login --login-url https://acme.com/docs-login --alg HS256
sudodocs publish protect-key acme-docs --label "Claude"      # shown once
sudodocs publish protect-key-revoke acme-docs KEY_ID
sudodocs publish protection acme-docs
sudodocs publish unprotect acme-docs
```

`protect-sso` takes the allowed `--domain`, extra `--email` addresses, `--group` rules, `--folder-rule "/partners/=partners,vendors"`, `--session-hours`, and for your own login page `--login-url`, `--alg`, `--audience`, `--issuer`, `--jwks-url`, `--public-key-file`, `--rotate-secret` and `--sign-everyone-out`. A password needs at least 12 characters. See [Protected docs](../../saas-guide/publish/protected-docs.md).

## Previews, feedback, validation, analytics

```bash
sudodocs publish previews acme-docs
sudodocs publish approve acme-docs 17        # build the preview of a pull request from a fork
sudodocs publish feedback acme-docs
sudodocs publish validate acme-docs --strict # exit 1 on errors or warnings (for CI); blockers exit 2
sudodocs publish validate acme-docs --json -o report.json
sudodocs publish stats acme-docs --days 30
sudodocs publish stats acme-docs --csv       # Enterprise
```

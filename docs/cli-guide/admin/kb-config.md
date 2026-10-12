# Knowledge Base

CLI equivalents of [Admin Tasks → Knowledge Base](../../saas-guide/admin/kb-config.md). All commands are admin-only, same as the Knowledge Base tab.

> Looking for Doc Team Roles, Deployment Tags, or CSV Column Mappings? Those are separate pages: [Doc Team Roles](doc-team-roles.md) and [Compose Release Notes](../user/release-composer.md) - see [Configure the Knowledge Base](../../saas-guide/admin/kb-config.md#product-categories) for why they live where they do.

## Show Current Configuration

```bash
sudodocs admin kb get
```

Prints the org's full Knowledge Base config as JSON - base framework, product categories, and (if set) the Neural Style Guide overrides.

## Set Base Framework

```bash
sudodocs admin kb set-base-framework --framework microsoft
```

`--framework` is one of `google`, `microsoft`, `apple`, `ibm` - see [Set Base Frameworks](../../saas-guide/admin/kb-config.md#set-base-frameworks) for what each one means.

## Set Product Categories

```bash
sudodocs admin kb set-product-categories --category "Security" --category "API" --category "UI/UX"
```

Repeat `--category` for each one. This replaces the full list each call, same as the web form - omitting every `--category` clears back to just "Other". Product Categories are shared between Bulk Release Notes generation and the Feature Draft pipeline's Information Architect step, which is why they stay here rather than moving to Release Notes with Deployment Tags and CSV Mappings.

## Neural Style Guide Overrides

The "paste your style guide `.md` file here" box - a free-form Markdown document (product overview, tone/terminology rules, writing instructions) injected into every AI writing task on top of the base framework. This is what the dashboard calls **Neural Overrides**.

```bash
sudodocs style-guide get                              # print current overrides to stdout
sudodocs style-guide get -o current-style-guide.md     # or save to a local file
sudodocs style-guide set my-style-guide.md             # upload a local file, replacing the existing content
```

Unlike the other commands on this page, `style-guide` is **not admin-only** - it's available to any doc-team member, matching the underlying dashboard page (**Configure Markdown**, linked from the Knowledge Base tab) being open to Writers too.

## Run Auto-Learn

```bash
sudodocs admin kb auto-learn
```

Same as clicking **Run Auto-Learn** - scans your connected Documentation/Web repositories to extract tone and terminology (and, from a few existing screenshots, your screenshot style), and merges the result into your existing configuration (see [Auto-Learn Tone](../../saas-guide/admin/kb-config.md#auto-learn-tone)). Blocks until the job completes.

## Screenshot Style

```bash
sudodocs admin kb screenshot-style show
sudodocs admin kb screenshot-style set --theme dark --window 1600x1000 --annotation-color "#E5484D"
sudodocs admin kb screenshot-style set --mask-selector ".account-email" --never-page "/billing/cards" --notes-file screenshot-rules.md
sudodocs admin kb screenshot-style reset --yes
```

`show` lists every setting in use and where it comes from (yours, learned or default), your team's rules, and what Auto-Learn learned from your existing screenshots. `set` changes only the options you pass: `--theme`, `--window WIDTHxHEIGHT`, `--scale` (sharpness, 1-3), `--annotation-color`, `--numbered-callouts`, `--crop-padding`, `--max-width`, `--alt-text-max`, and the repeatable `--mask-selector`, `--mask-pattern` and `--never-page`. `reset --learned` also forgets what was learned. Admin-only. CLI equivalent of [Screenshot Style](../../saas-guide/admin/kb-config.md#screenshot-style).

## Remembered Screenshots

```bash
sudodocs admin kb screenshot-recipes
sudodocs admin kb screenshot-recipes --forget static/img/orders.png
```

Lists the Docflows screenshots SudoDocs knows how to re-take (image, page, the controls it points at, when it was last checked); `--forget` drops one. Admin-only. API: `GET /api/v1/admin/screenshot-recipes`, `DELETE /api/v1/admin/screenshot-recipes?image_path=...`.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/kb` | GET | Full config blob. Wrapped by `sudodocs admin kb get`. |
| `/admin/kb/base-framework` | POST | `{"base_style_framework"}`. Wrapped by `sudodocs admin kb set-base-framework`. |
| `/admin/kb/product-categories` | POST | `{"product_categories": [...]}`. Wrapped by `sudodocs admin kb set-product-categories`. |
| `/admin/kb/auto-learn` | POST | Returns `202 {"job_id"}`. Wrapped by `sudodocs admin kb auto-learn`. |
| `/admin/kb/screenshot-style` | GET / POST / DELETE | Settings in use, where each comes from, your rules and what was learned. POST any setting (or `"notes"`); `null` returns a setting to its learned/default value. DELETE resets (`?learned=1` also forgets what was learned). Wrapped by `sudodocs admin kb screenshot-style`. |
| `/kb/style-guide` | GET / POST | `{"neural_style_md"}`. Not admin-only. Wrapped by `sudodocs style-guide get/set`. |

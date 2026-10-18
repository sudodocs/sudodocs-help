# API Specs

The **API Specs** tab of the Admin Dashboard lists your OpenAPI specs and sets how they're checked. It works the same whether you keep one large spec, many smaller specs that different teams own (in one repository or many), or both. [API Readiness](../user/api-readiness.md) checks every spec on the list, and [Release Composer](../user/release-composer.md#incoming-api-changes) turns merged API changes into Developer Release Notes. Writers don't need repository access or tokens of their own.

Set up the [Knowledge Base](kb-config.md) first if you want spec descriptions checked against your style guide - that's why this tab comes after it.

> **Note**: API Readiness isn't included in every plan. If it isn't in yours, the tab says so. See [Plans & Billing](plans.md).

## How Are Your Specs Organized?

Pick the option that matches your team. It changes the wording on this tab and lets you mark a combined spec; the list below is what SudoDocs uses.

* **One spec**: one file, or one root file that pulls in other files with `$ref`.
* **Several independent specs**: a spec for each team or service, in one repository or many.
* **A combined spec plus independent specs**: one spec that has everything, with team specs next to it.

## Add a Spec

A spec is one root file. SudoDocs follows its `$ref`s to find every other file it uses, so you don't list those files yourself.

1. Click **+ Add a spec**.
2. Fill in:
    * **Name**: for example `Billing API`. Scans, release notes and pull requests use it.
    * **Repository**: one from the [Repositories](connect-repos.md) tab, so SudoDocs uses its saved GitHub token or GitHub App access. **A public repository (enter its URL)** also works, but SudoDocs can't open pull requests there.
    * **Branch**: defaults to `main`. If the repository has no `main` branch, SudoDocs reads its default branch and says so in the scan log.
    * **Spec file (root)**: the path to the spec in the repository, for example `billing/openapi.yaml`. It must be a `.yaml`, `.yml` or `.json` file.
    * **This spec is** (with **A combined spec plus independent specs**): **An independent spec** or **The combined spec**.
    * **Also watch folders** (optional): folders with files the spec uses without a `$ref`, comma-separated. Most specs don't need this.
    * **Check it in API Readiness**: include it when someone checks **All specs**.
    * **Turn its API changes into Developer Release Notes**: see [Incoming API changes](../user/release-composer.md#incoming-api-changes).
    * **Which operations are public**: **Everything except operations marked `x-internal: true`** (the default), or **Only operations marked** with a marker you choose (`x-public: true` by default) on the operation, its path, or one of its tags. Release notes cover only public operations.
3. Click **Add spec**.

SudoDocs then reads the spec. The card shows how many dependency files it found and when it read them; expand **Files** to see each one. Use **↑** and **↓** to set the order specs appear in, **Edit** to change a spec, and **Remove** to take it off the list. Removing a spec keeps its scans in the history.

## Dependency Locations

A `$ref` can point outside the spec's repository - for example `../../common/errors.yaml`, where `common/` lives in a shared repository. SudoDocs can't guess where that is, so the card lists it under **$refs SudoDocs couldn't follow**, with a button to fix it:

1. Click **Add a dependency location for ../common** (or **+ Add a dependency location**).
2. Check **Path the $refs use**: the path, from the top of the spec's repository, that the `$ref`s reach - for example `../common`.
3. Pick the repository that holds the files, the **Folder in it** (leave it blank for the whole repository), and a **Branch** (blank: its default branch).
4. Click **Add**. SudoDocs reads the spec again; the files now appear under **Files** with the repository they come from.

A spec can have several dependency locations, and several specs can use the same shared folder.

`$ref`s written as GitHub links (`https://github.com/<owner>/<repo>/blob/<branch>/<path>`, or `raw.githubusercontent.com` links) are read too: through that repository's access if it's on your Repositories tab, otherwise only if it's public. SudoDocs never fetches other URLs; they're listed as references it couldn't follow.

Click **Check dependencies** (or **Check** on one spec) to read your specs again, for example after a teammate adds files. It's free.

## Settings for Every Spec

### Choose the Style Rules

**API style rules** sets the Redocly lint ruleset. The AI fix corrects violations of these rules too.

| Option | Checks |
|---|---|
| **Redocly recommended** | Redocly's default best-practice rules. The default. |
| **Redocly recommended (strict)** | The same rules, with warnings treated as errors. |
| **Redocly minimal** | A small set of essential rules. |
| **OpenAPI spec compliance only** | Only whether the spec is valid OpenAPI. |
| **Custom ruleset from the repository** | Your own `redocly.yaml`. Enter its **Path to redocly.yaml in each spec's repository**. |

> **Note**: For a custom ruleset, SudoDocs uses only built-in `extends` and `rules`. `plugins` and remote configurations are removed, because they would run code on SudoDocs' servers.

### Apply Your Writing Style

Select **Apply the Knowledge Base style guide to summaries and descriptions** to have the AI audit and fixes follow your style guide, not only Redocly's rules.

### API Base URL Domain

Optional. SudoDocs sets it as the `base-url` server variable of each root spec file before checking it.

Click **Save settings**. The next API Readiness scan uses them.

## Coming From the Old Settings

If you set up API Specs before it had a list, your **Main spec path** and **Other spec files** are now specs on the list, named after their files, and **Folders with referenced files** became **Also watch folders**. Rename them and add dependency locations as you like. A token saved with the old settings is still used for specs read from a repository URL; you can remove it under **API base URL domain**.

See [CLI Tasks → API Specs](../../cli-guide/admin/api-specs.md) to do all of this from the command line.

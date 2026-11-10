# Changelog

Every release has a **release notes queue**: the list of what goes into its notes. Items reach it from:

* **Docflows**: suggestions approved with **Include in release notes** - see [Manage Docflows](doc-drift.md#triage-suggestions).
* **Slack**: items your team sends to a release from Slack.
* **Jira** and **CSV**: added from Changelog (below).
* **By hand**: added in Changelog.
* **API changes**: merged pull requests that changed an API spec, once a writer includes them - see [Incoming API Changes](#incoming-api-changes).

Changelog drafts the release notes from the queue - grouped into **New Features**, **Enhancements**, **Bug Fixes**, **Known Issues** and **Developer Release Notes** (for developer-facing changes), then by product category - and pushes the finished notes to your docs repository where it keeps release notes. If no one drafts them, SudoDocs does it automatically before the release.

Open **Changelog** in the **Work** group of the left pane, or use **Compose release notes** on a release's Release Dashboard. The page has two tabs: **Queue** (the work below) and **Drafts** (every draft for the release). **History** lists past drafts, **Settings** opens the [release notes settings](#release-notes-settings), and **New release** creates a release.

A draft can be [reviewed](reviews.md): select words in the rendered draft and comment on them, @mention a colleague, or ask for a verdict, before you push it. **Push to source** then puts the notes on the Changelog page of your published docs site - see [Push to source](#push-to-source).

## Release Notes Settings

Before your first import, it's worth checking two optional settings that shape how generation categorizes and tags content - both have sensible built-in defaults, so you can skip this section entirely and come back to it later.

1. On the **Changelog** page, click **Settings** to open the settings panel.
2. **Deployment Tags** (one per line): the set of environment tags SudoDocs can apply to each item (e.g. "Cloud", "On-Premise", "Both"). Leave blank to use the defaults.
3. **CSV Column Mappings**: map your tracker's CSV export headers (Jira, Linear, Asana, or anything else) to the fields SudoDocs looks for - Ticket ID/Key, Summary, and Description. Each of the three is independent and optional; leave any of them blank to fall back to common default header names (e.g. "Key"/"Issue key" for the ticket ID).
4. Click **Save**.

These settings are shared across every release's release notes for your org, not just the one you're currently viewing - see [CLI Tasks → Compose Release Notes](../../cli-guide/user/release-composer.md) to manage them from a script instead. Looking for Product Categories? Those are a Knowledge Base setting, shared with other AI features - see [Configure the Knowledge Base](../admin/kb-config.md#product-categories).

## The Release Notes Queue

1. Open **Changelog** and pick the **Release** in the bar at the top of the page - it shows how many items are queued and when the latest draft was made, and it opens on your newest unreleased release. **New release** (in the header, or at the end of the list) creates one: a name and an optional target date. **Draft the release notes** comes first, then the queue.
2. The queue lists every item, grouped by section and then by product category. Each one shows where it came from - **Docflows**, **Slack**, **Jira**, **CSV**, **Manual** or **API changes** - and links to it (the pull request, ticket, suggestion or feature draft). **Developer Release Notes** are grouped by **Breaking Changes**, **New Endpoints**, **Changes** and **Deprecations** instead of product categories.
3. To change an item, pick a different section or category in its row; it's saved at once. **Remove** takes it out of the queue.

Items already written into a draft are listed under **Already in a draft**. A Jira ticket is only queued once per release, even if it arrives from several places (for example a Jira filter and a Jira-sourced Docflows suggestion). When a Feature Author draft for a ticket that's already queued from Jira is included, the queued item becomes the feature draft's item instead of a second one.

## Incoming API Changes

When a pull request that changes an API spec merges, SudoDocs compares the spec before and after it - with every file its `$ref`s reach, so a change to a shared file or to a file in another repository counts - and lists what changed for developers under **Incoming API changes**, between **Draft the release notes** and the queue. It covers every spec on the Admin Dashboard's [API Specs](../admin/api-specs.md) tab that has **Turn its API changes into Developer Release Notes** on, and only its public operations (by default, everything not marked `x-internal: true`). Comparing is free.

Each item is one spec's changes in one pull request: a file several specs share gives an item for each of them. It shows:

* the spec, **Breaking** when a change can break existing clients (a removed endpoint, field or parameter, a new required input, a narrower type), its sub-heading, and a link to the pull request;
* the changes, one line each (expand **N changes**);
* a drafted **Release note**, which you can edit.

For each, pick the **Release** and click **Include**: it joins that release's queue under **Developer Release Notes** and its sub-heading, and is drafted like every other item. Or click **Not needed**; **Marked Not needed** lists those, with **Bring back**. Taking an included item out of the queue (**Remove**) sends it back to **Incoming API changes**.

Only merges into the branch the spec is read from count. Changes arrive through the GitHub webhook of the spec's repository, or the SudoDocs GitHub App. Missed one - for example a merge from before you set up the spec? Click **Check merged PR**, pick the repository, enter the pull request number and check it.

## Add to the Queue

Under **Add to the queue**, pick a tab:

* **From Jira**: enter saved Jira filter IDs (from `?filter=12345` in the Jira URL) and click **Add from Jira**. Each filter's tickets go into its section - Epics and Stories under New Features, Bugs and Escalations under Bug Fixes, Known Issues under Known Issues. Nothing is drafted yet.
* **From CSV**: choose CSV exports for each kind and click **Add from CSV**. Make sure the column headers match your [Release Notes Settings](#release-notes-settings) (or the common defaults such as Key, Summary, Description).
* **Add an item**: describe the change, pick a section and category, and click **Add to the queue**.

SudoDocs picks a product category for Jira and CSV items from your [Product Categories](../admin/kb-config.md#product-categories) keywords; change it in the queue if it's wrong.

## Draft the Release Notes

1. Under **Draft the release notes**, check the **Title** (it labels the draft in your history), the **Writer** and the **Format**.
2. Click **Draft notes**; the button shows how many items are queued. SudoDocs writes every queued item in your house style, under its section and category, then opens the draft. This costs 10 AI credits.

Release notes go through SudoDocs' built-in [Doc Team Roles](../admin/doc-team-roles.md): its Technical Writer writes each entry following your Technical Writer instructions, and its Editor checks that every queued item appears once, in its own section, with nothing invented and nothing internal. If the Editor finds a blocking issue, the Writer revises the notes once. If anything is still open after that, the draft opens with **The Editor still has open issues with these notes** and what they are, and the release's **Release notes** card shows **Editor: open issues**. Fix what's left and click **Save**; saving clears the flag.

When items are queued after a draft was written, the Draft card shows **N new items since** that draft. Click **Add to draft**: SudoDocs writes only the new items and adds them under their headings, leaving the rest of the draft - including your edits - as it is. This costs 5 AI credits.

## Automatic Drafting

So release notes are ready even when no one gets to them, SudoDocs drafts them automatically:

* From **5 days before the release's target date**, each day: if items are queued and there's no draft yet, it drafts from the queue; if there is a draft, it adds the newly queued items to it.
* Automatic drafts show as **by SudoDocs (automatic)**, with the release's creator as the writer. They use AI credits like a manual draft; if your organization is out of credits, the release's **Release notes** card says so.
* It doesn't run for released releases or releases without a target date.

To change it for one release, open its Release Dashboard, expand **Automatic drafting settings** on the **Release notes** card, and turn it off or change the number of days.

## Review and Export a Draft

Open a draft from the **Drafts** tab or from **History**. Every draft is listed there with its release and writer. Deleting a release keeps its release notes; they just lose the release tag. See [Tag work with a release and a writer](releases.md#tag-work-with-a-release-and-a-writer).

The draft page has the same **Queue** and **Drafts** tabs at the top, so you can always go back. The **Release notes** card shows the release and writer, and a tag once the notes have a pull request (**PR open**, **Merged**, **Live** or **PR closed**). Its buttons, in the order you usually use them:

1. **Save**: saves your edits to the draft. Edit the text (Markdown) in the box below.
2. **Review**: opens the review panel - see [Reviews](reviews.md).
3. **Push to source**: puts the notes in your docs repository - see [Push to source](#push-to-source).
4. **Set status**: opens the **Tags** dialog, where you change the release, the writer and the work status (**To do**, **In progress**, **In review**, **Blocked** - with a reason - **Done** or **Rejected**). The status also moves by itself when you push: **In review** while the pull request is open, **Done** when it's merged.

Below them, pick a **Format** for the export. **Download** saves the notes as a file. If you signed in with Google, **Create GDoc** exports the notes to a new Google Doc and **Sync GDoc** brings edits made there back; these two buttons aren't shown when you sign in with a password or single sign-on.

## Push to Source

When the notes are final, click **Push to source** on the draft. The notes go to **the Changelog page of your published docs site**, in a pull request you review and merge:

1. Pick the docs repository. If it backs a Publish site, the dialog says **Changelog page of** that site, with **View current page** when the page is already live. If the repository backs several sites, pick the **Site**; the newest is selected.
2. Under **Where it goes**, SudoDocs says which file the notes go in and why: **site setting** (the page you chose for the site - see [The Changelog page of a site](#the-changelog-page-of-a-site)), **saved for this repository**, **found automatically** or **your choice**. Found automatically means:
    * **One file for every release**, such as `CHANGELOG.md` or `release-notes.md`: this release's section is added at the top, below the file's title. If the file already has a section for this release, that section is replaced. The other releases stay exactly as they are.
    * **One file per release** in a folder such as `release-notes/` or `changelog/`: a new file there, named like the others (for example `v2.4.md`), with the same kind of front matter. If this release already has a file, it's updated.
    * **No changelog yet**: a new `changelog` page in your docs folder - `.md`, `.mdx` for Mintlify, `.rst` for Sphinx or `.adoc` for Antora.
3. If the page is new, the dialog also shows **Navigation**: the pull request adds the page to your site's navigation, so readers can find it. See [Navigation](#navigation).
4. To put the notes somewhere else, click **Change where it goes** (see [Choose where release notes go](#choose-where-release-notes-go)), then **Update the preview**.
5. Open **Preview** to see the result for each file.
6. Click **Open pull request**. SudoDocs saves your edits first, then opens the pull request.

### The Format Follows the Page

The notes are written the way the page is written, so the pull request never mixes markups:

* **Markdown**: this release's section, as drafted.
* **Mintlify**: for a `.mdx` changelog, each release is an `<Update label="2026-11-03" description="v2.4">` entry, newest first, which your site shows as a changelog and as an RSS feed. The label is the release's date (the day you push when it has none) and the description is the release's name. Pushing the same release again replaces its entry.
* **reStructuredText** (`.rst`) and **AsciiDoc** (`.adoc`): the section or file is converted - headings, lists (including nested lists), bold and italic, code, links and images - and follows the headings the file already uses. A new release goes at the top; the older releases are untouched.

### Navigation

When a push creates a new changelog page, the same pull request lists it in your site's navigation, in the file your docs tool uses:

| Docs tool | Where the page is listed |
|---|---|
| Any site with a `sudodocs.json` navigation | `sudodocs.json` |
| MkDocs | `mkdocs.yml` |
| Docusaurus | the sidebar file, when it is plain data |
| Mintlify | `docs.json` (or `mint.json`) |
| Sphinx | the toctree of the nearest index page - nothing is added when a glob toctree already takes the page |
| Antora | the module's `nav.adoc` |

A site that follows its folders, or one that hasn't been published yet, needs nothing. If SudoDocs can't edit the navigation file, the dialog shows the line to add by hand and the pull request still carries the page.

### Track It Until It's Live

After you open the pull request, the draft shows where it stands:

* **PR open**: the pull request is open.
* **Merged**: merged, waiting for the next publish of your site.
* **Live**: the site was published after the merge and has the page; **View current page** opens it.
* **PR closed**: closed without merging.

SudoDocs checks pull requests every 15 minutes, so allow a little time after the merge. On the Release Dashboard, the release notes' card on the board also shows **Live**.

### Choose Where Release Notes Go

**Change where it goes** has two parts:

* **Release notes**: **A file with every release** - pick an existing file from the list (the ones that look like release notes come first) or type a new path to create it - or **A folder with one file per release** - pick or type the folder.
* **Developer Release Notes (API changes)**: **Same file as the release notes** (the default), **Its own file with every release**, or **A folder with one file per release**. With its own file or folder, the draft's **Developer Release Notes** section goes there and the rest goes to the release notes file, in the same pull request. Use this when your API changelog lives apart from your product release notes, for example `docs/api/changelog.md`.

Leave **Remember for this repository** on to use the same places for every later push to that repository, by anyone on your team. A file you pick or create must be a `.md`, `.mdx`, `.rst` or `.adoc` page. To set or reset these from a script, see [CLI Tasks → Compose Release Notes](../../cli-guide/user/release-composer.md#choose-where-release-notes-go).

## The Changelog Page of a Site

To always use the same page for a site, set it once. Open **Publish**, choose the site, then **Content** > **Navigation** and use the **Changelog page** card: type a path such as `docs/changelog.md` (the list suggests the pages of the live site) and click **Save**. Leave it empty and SudoDocs finds your changelog, or starts a `changelog` page. The page can be `.md`, `.mdx`, `.rst` or `.adoc`.

This is a site setting, so it is for administrators - or Writers, when your organization lets them manage site settings. It takes effect at the next push; nothing is rebuilt. To set it from a script, see [CLI Tasks → Publish](../../cli-guide/user/publish.md).

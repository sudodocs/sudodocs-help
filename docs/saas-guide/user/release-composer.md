# Compose Release Notes

Every release has a **release notes queue**: the list of what goes into its notes. Items reach it from:

* **Docflows**: suggestions approved with **Include in release notes** - see [Manage Docflows](doc-drift.md#triage-suggestions).
* **Feature Author**: drafts approved with **Include** - see [Author a Feature](feature-author.md#decide-on-release-notes).
* **API changes**: Docflows suggestions whose public API changed, approved with **Developer Release Notes: Include** - see [API Changes](doc-drift.md#api-changes).
* **Slack**: items your team sends to a release from Slack.
* **Jira** and **CSV**: added from Release Composer (below).
* **By hand**: added in Release Composer.

Release Composer drafts the release notes from the queue - grouped into **New Features**, **Enhancements**, **Bug Fixes**, **Known Issues** and **Developer Release Notes** (API changes), then by product category - and pushes the finished notes to your docs repository where it keeps release notes. If no one drafts them, SudoDocs does it automatically before the release.

## Release Notes Settings

Before your first import, it's worth checking two optional settings that shape how generation categorizes and tags content - both have sensible built-in defaults, so you can skip this section entirely and come back to it later.

1. On the **Release Composer** page, click **Release Notes Settings** to expand the panel.
2. **Deployment Tags** (one per line): the set of environment tags SudoDocs can apply to each item (e.g. "Cloud", "On-Premise", "Both"). Leave blank to use the defaults.
3. **CSV Column Mappings**: map your tracker's CSV export headers (Jira, Linear, Asana, or anything else) to the fields SudoDocs looks for - Ticket ID/Key, Summary, and Description. Each of the three is independent and optional; leave any of them blank to fall back to common default header names (e.g. "Key"/"Issue key" for the ticket ID).
4. Click **Save Release Notes Settings**.

These settings are shared across every release's release notes for your org, not just the one you're currently viewing - see [CLI Tasks → Compose Release Notes](../../cli-guide/user/release-composer.md) to manage them from a script instead. Looking for Product Categories? Those are a Knowledge Base setting, shared with other AI features - see [Configure the Knowledge Base](../admin/kb-config.md#product-categories).

## The Release Notes Queue

1. Open **Release Composer** (Workspace, or **Draft release notes** on a release's Release Dashboard) and pick the **Release** at the top of the page - it opens on your newest unreleased release, and **+ New release...** creates one (a name and an optional target date). **Draft the release notes** comes first, then the queue.
2. The queue lists every item, grouped by section and then by product category. Each one shows where it came from - **Docflows**, **Feature Author**, **API change**, **Slack**, **Jira**, **CSV** or **Manual** - and links to it (the pull request, ticket, suggestion or feature draft).
3. To change an item, pick a different section or category in its row; it's saved at once. **Remove** takes it out of the queue.

Items already written into a draft are listed under **Already in a draft**. A Jira ticket is only queued once per release, even if it arrives from several places (for example a Jira filter and a Jira-sourced Docflows suggestion). When a Feature Author draft for a ticket that's already queued from Jira is included, the queued item becomes the feature draft's item instead of a second one.

## Add to the Queue

Under **Add to the queue**, pick a tab:

* **From Jira**: enter saved Jira filter IDs (from `?filter=12345` in the Jira URL) and click **Add from Jira**. Each filter's tickets go into its section - Epics and Stories under New Features, Bugs and Escalations under Bug Fixes, Known Issues under Known Issues. Nothing is drafted yet.
* **From CSV**: choose CSV exports for each kind and click **Add from CSV**. Make sure the column headers match your [Release Notes Settings](#release-notes-settings) (or the common defaults such as Key, Summary, Description).
* **Add an item**: describe the change, pick a section and category, and click **Add to the queue**.

SudoDocs picks a product category for Jira and CSV items from your [Product Categories](../admin/kb-config.md#product-categories) keywords; change it in the queue if it's wrong.

## Draft the Release Notes

1. Under **Draft the release notes**, check the **Title** (it labels the draft in your history), the **Writer** and the **Format**.
2. Click **Draft from the queue**. SudoDocs writes every queued item in your house style, under its section and category, then opens the draft. This costs 10 AI credits.

Release notes go through SudoDocs' built-in [Doc Team Roles](../admin/doc-team-roles.md): its Technical Writer writes each entry following your Technical Writer instructions, and its Editor checks that every queued item appears once, in its own section, with nothing invented and nothing internal. If the Editor finds a blocking issue, the Writer revises the notes once, using only what's in the queue. If anything is still open after that, the draft opens with **The Editor still has open issues with these notes** and what they are, and the release's **Release notes** card shows **Editor: open issues**. Fix what's left and click **Save Notes**; saving clears the flag.

When items are queued after a draft was written, Composer shows **N new items since** that draft. Click **Add them to that draft**: SudoDocs writes only the new items and adds them under their headings, leaving the rest of the draft - including your edits - as it is. This costs 5 AI credits.

## Automatic Drafting

So release notes are ready even when no one gets to them, SudoDocs drafts them automatically:

* From **5 days before the release's target date**, each day: if items are queued and there's no draft yet, it drafts from the queue; if there is a draft, it adds the newly queued items to it.
* Automatic drafts show as **by SudoDocs (automatic)**, with the release's creator as the writer. They use AI credits like a manual draft; if your organization is out of credits, the release's **Release notes** card says so.
* It doesn't run for released releases or releases without a target date.

To change it for one release, open its Release Dashboard, expand **Automatic drafting settings** on the **Release notes** card, and turn it off or change the number of days.

## Reviewing and Exporting

Every draft is listed in the history on the left, with its release and writer. Deleting a release keeps its release notes; they just lose the release tag. See [Tag work with a release and a writer](releases.md#tag-work-with-a-release-and-a-writer).

Once generation is complete, you will be redirected to the draft view.

1.  Review the generated Markdown content in the editor.
2.  Edit the notes in the editor and click **Save Notes**.
3.  Use the toolbar to take them elsewhere:

    * **Create GDoc**: exports the notes to a new Google Doc in your connected account; **Sync from GDoc** brings edits made there back.
    * **Download**: downloads the notes as a file.
    * **Push to docs**: opens a pull request in your docs repository - see [Push to Your Docs](#push-to-your-docs).

## Push to Your Docs

When the notes are final, click **Push to docs** on the draft:

1. Pick the docs repository. Under **Where it goes**, SudoDocs says which file the notes go in and why: **found automatically**, **saved for this repository** or **your choice**. Found automatically means:
    * **One file per release** in a folder such as `release-notes/` or `changelog/`: a new file there, named like the others (for example `v2.4.md`), with the same kind of front matter. If this release already has a file, it's updated.
    * **One file for every release**, such as `CHANGELOG.md` or `release-notes.md`: this release's section is added at the top, below the file's title. If the file already has a section for this release, that section is replaced. The other releases stay exactly as they are.
    * **No release notes yet**: a new `release-notes/` folder in your docs folder.
2. To put them somewhere else, click **Change where it goes** (see [Choose where release notes go](#choose-where-release-notes-go)), then **Update the preview**.
3. Open **Preview** to see the result for each file.
4. Click **Open pull request**. SudoDocs saves your edits first, then opens the pull request.

The draft then follows the pull request: **In review** while it's open, **Done** when it's merged. The release's **Release notes** card on the Release Dashboard shows the pull request too.

### Choose Where Release Notes Go

**Change where it goes** has two parts:

* **Release notes**: **A file with every release** - pick an existing file from the list (the ones that look like release notes come first) or type a new path to create it - or **A folder with one file per release** - pick or type the folder.
* **Developer Release Notes (API changes)**: **Same file as the release notes** (the default), **Its own file with every release**, or **A folder with one file per release**. With its own file or folder, the draft's **Developer Release Notes** section goes there and the rest goes to the release notes file, in the same pull request. Use this when your API changelog lives apart from your product release notes, for example `docs/api/changelog.md`.

Leave **Remember for this repository** on to use the same places for every later push to that repository, by anyone on your team. Release notes are Markdown, so a file you pick or create must be a `.md` or `.mdx` file. To set or reset these from a script, see [CLI Tasks → Compose Release Notes](../../cli-guide/user/release-composer.md#choose-where-release-notes-go).

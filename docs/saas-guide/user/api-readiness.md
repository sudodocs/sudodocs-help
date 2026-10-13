# API Readiness

The API Readiness tool validates your OpenAPI Specifications (OAS) against industry standards and your own style guide. It supports Swagger and Redocly workflows, and leverages AI to automatically repair technical syntax errors and improve content descriptions.

## Before You Start

A System Administrator sets which repository, branch, and spec file API Readiness scans, and which style rules apply, on the Admin Dashboard's [API Specs](../admin/api-specs.md) tab.

1. Open **API Readiness** from the Workspace and click **Open Validator**.
2. Check the **Configuration** summary: repository, branch and main spec, API style rules, and whether your style guide is applied.

If it says **No API spec is set up yet**, ask an administrator to set it up. Administrators see an **Edit in Admin** link that goes straight to the tab.

## Run a Scan

1. Under the configuration form, select the validation checks you wish to run:

    * **Swagger CLI**: Validates basic OAS structure and syntax.

    * **Redocly CLI**: Lints the spec for best practices and style violations.

    * **AI Tech Fixes**: Uses AI to analyze validation errors and suggest raw code corrections.

    * **AI Content Audit**: Uses AI to review endpoint descriptions, summaries, and tone for clarity.

2. Click **🚀 Check API Specs** to start the pipeline.

## Review Results

The dashboard displays the results of your scan in four sections:

* **CLI Validation Logs**: Raw output and error tracing from the Swagger and Redocly tools.

* **Technical Analysis**: A breakdown of structural errors found, with an option to **Apply Technical Fixes** automatically via AI.

* **Content Audit**: Qualitative feedback on your API descriptions, with an option to **Apply Content Fixes** via AI.

* Final Specification:

    * A. **Pre-Processed Spec**: The original file with basic programmatic fixes applied.

    * B. **AI Corrected Spec**: The final version with all requested AI technical and content fixes applied.

When the AI fix writes or changes descriptions, summaries or titles, SudoDocs' Technical Writer writes them following your [Doc Team Roles](../admin/doc-team-roles.md) instructions (when your API Specs settings apply your style guide), and its Editor reviews just that text against the original spec - for example, a description that promises a limit the spec doesn't state. If the Editor finds a blocking issue, the Writer rewrites only the flagged fields, once. The **AI Corrected Spec** card then shows **Descriptions reviewed by SudoDocs' Editor**, or **The Editor still has open issues with the descriptions this fix wrote** with what's left, next to its **Open Pull Request** button. This is included in the fix's usual credits.

## Scan History

Every scan is listed under **Scan History** on the left, titled with when it ran (for example "OAS Validation - Oct 10, 2026 14:05"). Rename a scan, tag it with a release and a writer, or delete it from there - see [Tag work with a release and a writer](releases.md#tag-work-with-a-release-and-a-writer). New scans record who ran them as the writer; scans from before this change have no writer until you tag one.

## Decide and Publish

The **Decide and publish** panel - beside the scan on wide screens, where it stays in view while you scroll, and first on narrow ones - holds what you decide before the spec leaves SudoDocs:

* **Release notes** (required before you open a pull request): **Include** or **Not needed**. Include puts a line in the release's [release notes queue](release-composer.md#the-release-notes-queue) with an **API Readiness** badge. By default it goes under **Developer Release Notes**, with the sub-heading taken from the changes (**Breaking Changes**, **New Endpoints**, **Changes** or **Deprecations**); pick another section, such as **New Features** for a big new API, and a product category. The line is drafted from the changes. The scan needs a release - pick one here if it has none. Changing the scan's release moves its line; **Not needed** or deleting the scan removes it. **Save release notes decision** changes it later.
* **Open Pull Request**, for the AI-corrected spec (or the pre-processed one) - see below. Your release-notes choice is saved with it.
* **Changes since the published spec**: what this scan's spec changes in your public API compared with the spec your docs publish (API Specs > [the public spec in your docs](../admin/api-specs.md#the-public-spec-in-your-docs)) - added, changed, removed and deprecated endpoints and fields, breaking changes, and operations that aren't public yet. **Check again** re-reads your docs.

## Push to Production

Each spec under **Final Specification** has two ways to leave SudoDocs:

* **🚀 Open Pull Request**: opens a pull request with the spec straight away, in the spec's own repository, a docs repository, or both.
    1. Click **Open Pull Request** under the spec you want (pre-processed or AI-corrected).
    2. Under **Open it in**, tick where it goes:
        * **The spec's repository**: the repository, branch and file that API Specs validates, so engineering gets the corrections. Change the file path if needed. This needs API Specs to read the spec from a connected repository (Admin Dashboard > API Specs); if it reads from a repository URL instead, add that repository under **Repositories** and pick it there.
        * **A docs repository**: for the published API reference, for example for this scan's release. Pick the repository; SudoDocs fills in where your public spec lives (API Specs > the public spec in your docs), or the path of a file with the spec's name that's already there. You can change it. Your docs get **only the public part** of the spec - the operations marked or ticked as public in [API Specs](../admin/api-specs.md#public-api-changes), without internal operations or fields. If nothing in the spec is public yet, SudoDocs says so instead of opening the pull request.
    3. Click **Open Pull Request**.

    Tick both to open a pull request in each. The scan moves to **In review** and shows the pull request's review status; it moves to **Done** when the pull request merges, or **Rejected** if it's closed - see [Track work and pull requests](releases.md#track-work-and-pull-requests). With both, the scan follows the docs pull request; the links to both appear once they're opened.

* **📬 Send to Docflows**: creates a Docflows suggestion instead, so a writer can review the spec in Docflows before pushing it. Like a docs pull request, it carries only the public part of the spec. The suggestion keeps the scan's release and writer, and once its pull request is opened the scan follows it the same way.

Both use the scan you're viewing, so you can push an older scan's spec from **Scan History**.

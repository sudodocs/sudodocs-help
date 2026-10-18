# API Readiness

The API Readiness tool validates your OpenAPI Specifications (OAS) against industry standards and your own style guide. It supports Swagger and Redocly workflows, and leverages AI to automatically repair technical syntax errors and improve content descriptions.

## Before You Start

A System Administrator lists your specs - one large spec, many team specs in any repository, or both - and sets the style rules on the Admin Dashboard's [API Specs](../admin/api-specs.md) tab.

1. Open **API Readiness** from the Workspace and click **Open Validator**.
2. Check **Your API specs**: each spec with its repository, branch and file. A spec with `$ref`s SudoDocs couldn't follow says so; an administrator can add a dependency location for them.

If it says **No API spec is set up yet**, ask an administrator to add your specs. Administrators see an **Edit in Admin** link that goes straight to the tab.

## Run a Scan

1. Under **Check**, pick **All specs** (every spec set to be checked) or one spec.
2. Select the checks to run:

    * **Swagger CLI**: validates basic OpenAPI structure and syntax.
    * **Redocly CLI**: lints the spec with your organization's rules.
    * **AI Tech Fixes**: analyzes the problems and fixes them, file by file.
    * **AI Content Audit**: reviews summaries, descriptions and tone against your style guide.

3. Click **🚀 Check API Specs**.

SudoDocs reads each spec with every file its `$ref`s reach - split files, a shared folder, or files in another repository - and checks them together. Your files are never changed by a scan.

## Review Results

A scan of **All specs** shows a tab for each spec with its error count. For the spec you're viewing:

* **The summary** at the top: how many files, errors and warnings, and any `$ref`s SudoDocs couldn't follow. After an AI fix it shows the errors before and after (SudoDocs checks the fixed files again) and the Editor's verdict. **Open Pull Request**, **Send to Docflows** and **Download** are here too.
* **1. Problems by file**: each file of the spec, with every problem's line, severity, rule and message - in the file that holds it, even a dependency file in another repository. Files the AI fixed are marked **Fixed** and show **Before** and **After the AI fix**. **CLI log** has the tools' output.
* **2. Technical Analysis** and **3. Content Audit**: what the AI found. **Apply Technical Fixes** or **Apply Content Fixes** fixes the spec with that analysis (a new scan, titled "(AI fix)").
* **4. The whole spec as one file**: the spec with every `$ref` file put in (bundled), as checked and with the AI fix - for a docs site that needs one file.

### How the AI Fix Works

The AI fixes each file that has a problem (and, with the content audit, each file with descriptions), and changes nothing else: every file keeps its name and path, every `$ref` stays as written, and content doesn't move between files. It doesn't invent facts the spec doesn't give - server URLs, licenses, security schemes or requirements, or behaviour. A problem that needs those is left for you, and the summary shows how many errors are left.

When the AI fix writes or changes descriptions, summaries or titles, SudoDocs' Technical Writer writes them following your [Doc Team Roles](../admin/doc-team-roles.md) instructions (when your API Specs settings apply your style guide), and its Editor reviews just that text against the original - for example, a description that promises something the spec doesn't state. If the Editor finds a blocking issue, the Writer rewrites only the flagged fields, once. The summary then shows **Descriptions reviewed by SudoDocs' Editor**, or **The Editor still has open issues with the descriptions this fix wrote** with what's left.

**Credits.** The checks are free. For each spec, a scan reserves 5 credits for the AI fix and 3 for the content audit when it starts. The fix costs 5 credits for every 15,000 characters of the files it fixes (at least 5); for bigger files SudoDocs reserves the rest once it has read them. If there aren't enough credits, that spec gets the free checks only and its log says so; the other specs still run.

## Scan History

Every scan is listed under **Scan History** on the left, titled with its spec and when it ran (for example "Billing API - Oct 18, 2026 14:05"). A scan of **All specs** adds one entry per spec. Rename a scan, tag it with a release and a writer, or delete it from there - see [Tag work with a release and a writer](releases.md#tag-work-with-a-release-and-a-writer). New scans record who ran them as the writer; scans from before this change have no writer until you tag one.

## Push to Production

The summary's buttons send the scan's spec out of SudoDocs:

* **🚀 Open Pull Request**: opens pull requests straight away. Under **Open it in**, tick where they go:
    * **The spec's repositories**: the changed files go back to the repositories they came from, each with its own name and path, so engineering gets the corrections. SudoDocs opens one pull request per repository, against the branch the spec (or its dependency location) is read from, and lists the files each one gets. A spec read from a repository URL can't get pull requests; add that repository under **Repositories** first.
    * **A docs repository**: the whole spec as one file, for the published API reference. Pick the repository; if a file with the spec's name is already there, SudoDocs fills in its path so the pull request updates it. Otherwise it's added at the spec's path, which you can change.

    Tick both to open both. The scan moves to **In review** and shows the pull request's review status; it moves to **Done** when the pull request merges, or **Rejected** if it's closed - see [Track work and pull requests](releases.md#track-work-and-pull-requests). With both, the scan follows the docs pull request.

* **Open pull requests for all specs** (a scan of **All specs**): the same, for every spec in the scan. A file several specs share - for example `common/errors.yaml` - goes into its pull request once.
* **📬 Send to Docflows**: creates a Docflows suggestion with the whole spec instead, so a writer can review it in Docflows before pushing it. The suggestion keeps the scan's release and writer.
* **⬇️ Download fixed files (.zip)**: the changed files in their folders (with the repository's name first when a spec spans repositories), plus the bundled spec. **Download all fixed files** does it for every spec in the scan.

Everything uses the scan you're viewing, so you can push an older scan from **Scan History**.

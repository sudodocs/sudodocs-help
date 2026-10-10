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

## Scan History

Every scan is listed under **Scan History** on the left, titled with when it ran (for example "OAS Validation - Oct 10, 2026 14:05"). Rename a scan, tag it with a release and a writer, or delete it from there - see [Tag work with a release and a writer](releases.md#tag-work-with-a-release-and-a-writer). New scans record who ran them as the writer; scans from before this change have no writer until you tag one.

## Push to Production

Each spec under **Final Specification** has two ways to reach your documentation repository:

* **🚀 Open Pull Request**: opens a pull request with the spec straight away.
    1. Click **Open Pull Request** under the spec you want (pre-processed or AI-corrected).
    2. Pick the **Target Docs Repository** and check the **File Path in Repo**.
    3. Click **Open Pull Request**.

    The scan moves to **In review** and shows the pull request's review status; it moves to **Done** when the pull request merges, or **Rejected** if it's closed - see [Track work and pull requests](releases.md#track-work-and-pull-requests).

* **📬 Send to Docflows**: creates a Docflows suggestion instead, so a writer can review the spec in Docflows before pushing it. The suggestion keeps the scan's release and writer, and once its pull request is opened the scan follows it the same way.

Both use the scan you're viewing, so you can push an older scan's spec from **Scan History**.

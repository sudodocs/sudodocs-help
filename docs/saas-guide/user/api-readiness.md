# API Readiness

The API Readiness tool validates your OpenAPI Specifications (OAS) against industry standards and your own style guide. It supports Swagger and Redocly workflows, and leverages AI to automatically repair technical syntax errors and improve content descriptions.

## Configure API Readiness

1. Navigate to API Readiness from the Workspace dashboard under **Global Tools**.

2. Click **Save Config** after filling in the configuration form:

    * **Git Repo URL**: The HTTPS URL of the repository containing your spec.

    * **Branch**: The branch to scan (defaults to main).

    * **Main Spec Path**: The exact file path to your primary spec (e.g., `src/openapi.yaml`).

    * **Advanced Settings (Optional)**: Expand the advanced menu to configure:

        * **Secondary Paths** & **Reference Folders**: Map additional files if your specification is split across multiple directories.

        * **Base URL Domain**: Programmatically override the base URL in the final spec.

        * **Git User** & **Git PAT**: Provide a Personal Access Token for private repositories not connected via an active Integration.

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

## Push to Production

Once you are satisfied with the AI corrected spec, click **📬 Send to Docflows**.

This will route the updated `JSON` or `YAML` file directly to **Docflows** as a pending suggestion. From there, a writer can assign it to a target release and push the updated specification directly to your documentation repository via a pull request.

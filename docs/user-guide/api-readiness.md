# Check API Readiness

The API Readiness tool validates your OpenAPI Specifications (OAS) against industry standards and your own style guide. It supports Swagger, Redocly, and ReadMe workflows.

## Configuration

1.  On the **Project Dashboard**, click **Check** on the **API Readiness** card.
2.  Fill in the configuration form:
    * **Git Repo URL**: The HTTPS URL of the repository containing your spec.
    * **Branch**: The branch to scan (defaults to `main`).
    * **Main Spec Path**: The file path to your primary spec (e.g., `src/openapi.yaml`).
    * (Optional) **ReadMe API Key**: Required if you plan to upload the validated spec directly to ReadMe.io.
3.  Click **Save Config**.

## Running a Scan

Under the configuration form, select the checks you wish to run:

* **Swagger CLI**: Validates basic OAS structure and syntax.
* **Redocly CLI**: Lints the spec for best practices and style violations.
* **ReadMe CLI**: Checks for compatibility with the ReadMe platform.
* **AI Tech Fixes**: Uses AI to analyze validation errors and suggest code corrections.
* **AI Content Audit**: Uses AI to review descriptions and summaries for clarity and tone.

Click **Run Audit** to start the pipeline.

## Reviewing Results

The dashboard displays the results in four sections:

1.  **CLI Logs**: Raw output from the validation tools.
2.  **Technical Analysis**: A breakdown of errors found, with an option to **Apply Technical Fixes** automatically.
3.  **Content Audit**: Qualitative feedback on your API descriptions, with an option to **Apply Content Fixes**.
4.  **Final Specification**:
    * **Pre-Processed Spec**: The original file with basic programmatic fixes.
    * **AI Corrected Spec**: The version with AI-generated fixes applied.
    * **Upload to ReadMe**: Push the validated spec directly to your ReadMe project version.

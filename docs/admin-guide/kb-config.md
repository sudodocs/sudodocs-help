# Configure the Knowledge Base

Configure how the SudoDocs AI understands your product terminology, tone, and deployment structures.

## Auto-Learn Tone

The Auto-Learn agent scans your connected documentation and public web repositories to extract your company's writing style and terminology. SudoDocs explicitly ignores code repositories during this process to prevent a robotic tone.

1. Ensure you have synced at least one Documentation or Web repository.
2. Navigate to **Admin Dashboard > Knowledge Base**.
3. Click **Run Auto-Learn**.

## Set Base Frameworks

Select a foundational formatting rule set for the AI. 

* **Google Developer Docs**: Objective and direct.
* **Microsoft Style**: Conversational and accessible.
* **Apple Style**: Minimalist and user-focused.
* **IBM Style**: Strict and enterprise-grade.

## Neural Overrides

Define absolute laws for the AI regarding your brand. You can upload Markdown files containing your product ontology, taxonomy, and strict terminology maps (e.g., mapping internal engineering terms to public feature names).

## Manual Enhancements

You can fine-tune specific logic rules.

1.  On the **Knowledge Base** tab, click **Configure Logic**.
2.  Update the following sections as needed:
    * **Jira CSV Mapping**: Map your CSV headers (e.g., "Issue Key", "Summary") to SudoDocs fields.
    * **Product Categories**: List your product areas (one per line) to help the AI sort release notes (e.g., "API", "Frontend", "Security").
    * **Terminology Rules**: Define strict replacement rules in the format `InternalTerm : PublicTerm` (e.g., `User_DB : Customer Directory`).
    * **Deployment Tags**: List environments valid for your product (e.g., "Cloud", "On-Prem").
3.  Click **Save Configuration**.
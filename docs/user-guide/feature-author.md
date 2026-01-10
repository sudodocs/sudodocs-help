# Author a Feature

The Feature Author tool drafts comprehensive documentation topics (conceptual overviews, prerequisites, configuration steps) by analyzing your codebase and engineering specifications.

## Creating a Draft

1.  Navigate to your **Project Dashboard** and click **Author** on the **Feature Author** card.
2.  **Code Verification (Recommended)**:
    * Select a **Repository** (e.g., ""Backend Code"") from the dropdown.
    * (Optional) Enter a **Branch Name** if the feature code is not in the default branch. If left empty, the system attempts to find a branch matching the Jira Key.
3.  **Import Source**:
    * Select **Fetch from Jira** and enter the ticket key to pull the summary and description.
    * Alternatively, select **Start from Blank** to type the details manually.
4.  **Context & Attachments**:
    * **Upload Design/Spec PDFs**: Click to upload PRDs or technical specs (PDF format supported). The AI reads this text to understand the feature's intent.
    * **Generate Architecture Diagram**: Check this box to have the AI attempt to generate a Mermaid.js diagram code block based on the description.
5.  Click **Author a Feature**.

## Reviewing the Draft

The editor provides three views for your generated content:

* **Draft**: The main documentation content, including headers, steps, and configuration tables.
* **Analysis**:
    * **Placement Proposal**: Suggestions on where this new topic should fit within your existing documentation hierarchy.
    * **Documentation Audit**: An analysis of existing docs that might conflict with or duplicate this new feature.
* **Diagram**: A visual rendering of the generated Mermaid diagram (if requested). You can edit the code directly to refine the chart.

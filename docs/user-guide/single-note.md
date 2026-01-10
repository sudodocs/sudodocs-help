# Compose Release Notes (Single)

The Single Note Composer is designed for creating a standalone, polished release entry for a specific feature, bug fix, or known issue. This is useful for hotfixes or ad-hoc updates.

## Create a Single Note

1.  Navigate to your **Project Dashboard** and click **Compose** on the **Release Composer (Single)** card.
2.  (Optional) **Code Verification**: Select a repository from the dropdown to allow the AI to verify the ticket against the actual code changes.
3.  **Import Source**:
    * **Fetch from Jira**: Enter the **Jira Key** (e.g., `PROJ-123`) and click **Fetch Data**. This auto-fills the summary and description.
    * **Start from Blank**: Manually enter the **Feature Summary** and **Technical Description**.
4.  **Entry Type**: Select the category for the note:
    * **Feature / Enhancement**: Writes a benefit-focused summary.
    * **Bug Fix**: Writes a concise ""Fixed an issue..."" entry.
    * **Known Issue**: Writes an issue description with a workaround.
5.  **Deployment Tag**: Select the environment (e.g., Cloud, On-Prem) to tag the note.
6.  (Optional) **Attachments**: Upload a PDF spec if the Jira ticket lacks sufficient detail.
7.  Click **Compose**.

## Output

The system generates a single Markdown entry. You can copy, download, or export this entry to Google Docs just like a full release draft.

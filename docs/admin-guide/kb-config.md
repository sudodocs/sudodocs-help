# Configure the Knowledge Base

The Knowledge Base (KB) controls the voice, tone, and categorization rules the AI uses when generating content.

## Auto-Learn Tone

The quickest way to set up your KB is to let the AI analyze your existing documentation.

1.  Ensure you have synced at least one **Documentation** repository.
2.  Go to **Admin Dashboard** > **Knowledge Base**.
3.  In the **Auto-Learn Tone** card, click **Start Auto-Learn**.
4.  The system scans 50 random samples from your docs and automatically configures:
    * **Tone**: Professional, friendly, or technical.
    * **Categories**: Product areas derived from your content.
    * **Terminology**: Common internal terms.

## Manual Enhancements

You can fine-tune specific logic rules.

1.  On the **Knowledge Base** tab, click **Configure Logic**.
2.  Update the following sections as needed:
    * **Jira CSV Mapping**: Map your CSV headers (e.g., "Issue Key", "Summary") to SudoDocs fields.
    * **Product Categories**: List your product areas (one per line) to help the AI sort release notes (e.g., "API", "Frontend", "Security").
    * **Terminology Rules**: Define strict replacement rules in the format `InternalTerm : PublicTerm` (e.g., `User_DB : Customer Directory`).
    * **Deployment Tags**: List environments valid for your product (e.g., "Cloud", "On-Prem").
3.  Click **Save Configuration**.

## Advanced JSON Configuration

For total control, you can edit the raw configuration object.

1.  On the **Knowledge Base** tab, click **Edit Raw JSON**.
2.  Modify the JSON structure directly.
    * **Warning**: Ensure valid JSON syntax. Invalid JSON will cause generation errors.
3.  Click **Save JSON Configuration**.

# Compose Release Notes

The Release Composer allows you to generate a consolidated, launch-ready changelog for an entire release cycle. It supports importing data automatically from Jira or manually via CSV files.

## Release Notes Settings

Before your first import, it's worth checking two optional settings that shape how generation categorizes and tags content - both have sensible built-in defaults, so you can skip this section entirely and come back to it later.

1. On the **Release Composer** page, click **Release Notes Settings** to expand the panel.
2. **Deployment Tags** (one per line): the set of environment tags SudoDocs can apply to each item (e.g. "Cloud", "On-Premise", "Both"). Leave blank to use the defaults.
3. **CSV Column Mappings**: map your tracker's CSV export headers (Jira, Linear, Asana, or anything else) to the fields SudoDocs looks for - Ticket ID/Key, Summary, and Description. Each of the three is independent and optional; leave any of them blank to fall back to common default header names (e.g. "Key"/"Issue key" for the ticket ID).
4. Click **Save Release Notes Settings**.

These settings are shared across every project's release notes for your org, not just the one you're currently viewing - see [CLI Tasks → Compose Release Notes](../cli-guide/release-composer.md) to manage them from a script instead. Looking for Product Categories? Those are a Knowledge Base setting, shared with other AI features - see [Configure the Knowledge Base](../admin-guide/kb-config.md#product-categories).

## Automatic Import (Jira)

To generate notes directly from your Jira project:

1.  Navigate to your **Project Dashboard** and click **Compose** on the **Release Composer** card.
2.  Under **Import Data**, ensure the **Automatic (Jira)** button is selected.
3.  Locate the filter fields for each category (Epics, Stories, Bugs, Known Issues, Escalations).
4.  Enter the **Jira Filter ID** for each category you wish to include.
    * *Tip*: To find a Filter ID, open your filter in Jira and look at the URL (e.g., `?filter=12345`).
    * You may leave fields blank if you do not have tickets for that category.
5.  Click **Compose**.

## Manual Import (CSV)

If you do not have a direct Jira connection, you can upload CSV exports.

1.  On the **Release Composer** page, click the **Manual (CSV)** button.
2.  Click **Choose File** for the corresponding category (e.g., **Stories CSV**, **Bugs CSV**).
3.  Select the CSV file from your computer.

    * *Note*: Ensure your CSV headers match the mappings configured in [Release Notes Settings](#release-notes-settings) above (e.g., Summary, Description, Key) - or just use one of the common default header names if you haven't customized them.
4.  Click **Compose**.

## Reviewing and Exporting

Once generation is complete, you will be redirected to the draft view.

1.  Review the generated Markdown content in the editor.
2.  Use the toolbar buttons to export your notes:

    * **Copy Markdown**: Copies the raw text to your clipboard.
    * **Download Word**: Downloads a formatted `.docx` file.
    * **Create Google Doc**: Exports the content directly to a new Google Doc in your connected account.

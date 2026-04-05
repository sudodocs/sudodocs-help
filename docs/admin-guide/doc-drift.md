# Configure Webhooks for Doc Drift Prevention

> **Note:** The standalone **Technical Drift Audit** feature has been deprecated and superseded by the real-time **Doc PR Inbox**.

The Doc PR Inbox provides a proactive approach to preventing documentation drift. Instead of running periodic audits, the system now automatically analyzes engineering pull requests (PRs) and Jira tickets as they happen, suggesting documentation changes directly to the writing team.

To enable this feature, you must configure a webhook for each connected repository or Jira instance. This allows the external service (like GitHub) to securely notify our platform about new activity.

## Configuring Webhooks for Automated Suggestions

After connecting a repository or Jira instance in the **Admin Dashboard**, you must set up the corresponding webhook to begin receiving automated suggestions.

### Step 1: Retrieve Webhook Credentials

1.  Navigate to the **Admin Dashboard** page.
2.  Under the **Settings** tab, locate the **Active Repositories & Services** list.
3.  Find the repository or service you want to connect and click the **Webhook** button.
4.  A dialog will appear containing a unique **Payload URL** and a **Secret** for that specific integration. Keep this dialog open.

### Step 2: Set up the Webhook in GitHub

For each connected code repository, follow these steps in GitHub:

1.  Navigate to your repository's main page.
2.  Click **Settings** > **Webhooks** > **Add webhook**.
3.  Paste the **Payload URL** from the SudoDocs dialog into the corresponding field.
4.  Change the **Content type** to `application/json`.
5.  Paste the **Secret** from the SudoDocs dialog into the corresponding field.
6.  Under "Which events would you like to trigger this webhook?", select **Let me select individual events.**
7.  Deselect **Pushes** and select **Pull requests**.
8.  Ensure **Active** is checked, and click **Add webhook**.

Once configured, the system will begin analyzing new and updated pull requests for that repository, and suggestions will appear in the **Doc PR Inbox**.

### Step 3: Set up the Webhook in Jira

For connected Jira instances, follow these steps in your Jira account:

1.  Navigate to **Jira Settings** > **System**.
2. Under **Advanced**, click **Webhooks**.
3.  Click **Create a Webhook**.
4.  Give the webhook a descriptive name (e.g., "SudoDocs Doc Suggestions").
5.  Paste the **Payload URL** from the SudoDocs dialog into the URL field. Note that the Jira URL already contains the secret as a query parameter.
6.  In the "Issue related events" section, find the **Issue** subsection and check the box for **updated**.
7.  Click **Create**.

This configuration will notify the system when Jira tickets are moved to a "Done" or "Closed" status, triggering a documentation suggestion.

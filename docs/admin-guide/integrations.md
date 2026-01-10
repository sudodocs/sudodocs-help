# Connect Services

Connect external tools to fetch data and push notifications.

## Connect Jira

Connecting Jira allows you to import tickets directly into the Release Composer.

1.  Go to **Admin Dashboard** > **Connect Services**.
2.  Click **+ Add New Connection**.
3.  In the **Service Provider** list, select **Atlassian Jira**.
4.  Enter a **Connection Name** (e.g., "Corporate Jira").
5.  Fill in your Jira details:
    * **Jira Domain**: Your full URL (e.g., `https://company.atlassian.net`).
    * **Email**: The email address of the service account.
    * **API Token**: An Atlassian API Token (not your password).
6.  Click **Connect Service**.

## Connect Slack

Connecting Slack allows users to push draft notes directly from Slack conversations.

1.  Go to **Admin Dashboard** > **Connect Services**.
2.  Click **+ Add New Connection**.
3.  Select **Slack Workspace**.
4.  Enter the required credentials from your Slack App:
    * **Bot User OAuth Token**: Starts with `xoxb-`.
    * **Signing Secret**: Found in your App Credentials.
5.  Click **Connect Service**.

> **Verification**: Once connected, you will see the integration listed in the **Active Service Connections** table.

# Connect Services

Connect external tools to fetch data and push notifications. Open **Admin > Services**: **Connected** lists what you have connected (each with **Manage**), and **Available to connect** offers Jira, Slack and the SudoDocs GitHub App. Services are part of the Pro plan.

## Connect Jira

Connecting Jira allows you to import tickets directly into the Changelog.

1.  Go to **Admin > Services**.
2.  Click **Connect a service**.
3.  Choose **Jira**.
4.  Enter a **Name** (e.g., "Corporate Jira").
5.  Fill in your Jira details:
    * **Jira address**: Your full URL (e.g., `https://company.atlassian.net`).
    * **Email**: The email address of the service account.
    * **API token**: An Atlassian API token (not your password).
6.  Click **Connect**.

**Manage** on the connected service shows the webhook address and secret to add in Jira so ticket events reach SudoDocs (select **Pull requests** and **Issue comments** where the webhook asks for events), and **Disconnect**.

## Connect Slack

Connecting Slack allows users to push draft notes directly from Slack conversations.

1.  Go to **Admin > Services**.
2.  Click **Connect a service**.
3.  Choose **Slack**.
4.  Enter the required credentials from your Slack App:
    * **Bot User OAuth Token**: Starts with `xoxb-`.
    * **Signing secret**: Found in your App Credentials.
5.  Click **Connect**.

> **Verification**: Once connected, the service appears under **Connected**.

## GitHub

The SudoDocs GitHub App is connected from **Admin > Repositories** (see [Connect repositories](connect-repos.md)). Its row on **Services** shows the account and the number of repositories, and **Manage** takes you to **Repositories**.

## Disconnect a service

**Manage** > **Disconnect**, then confirm. Docflows and notices that use it stop working; nothing already created is deleted.

## See Also

* [CLI Tasks → Connect Services](../../cli-guide/admin/integrations.md) - connect Jira or Slack from a script.

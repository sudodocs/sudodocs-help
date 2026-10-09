# Organization

The **Organization** tab of the Admin Dashboard lets System Administrators manage the organization's subscription and API keys, and delete the organization. It used to be called **Account**.

> **Note**: Your own name, password, and two-factor settings aren't here - they're on [Profile & security](../user/profile-security.md), in the menu under your initials.

## Subscription Management

This section provides a real-time overview of your current billing status (e.g., `ACTIVE`, `TRIALING`, `CANCELLED`). For what each plan includes, see [Plans & Billing](plans.md).

* **Cancel Subscription**: If you are on a paid plan, you can initiate a cancellation from this menu.

> **Note**: Canceling your subscription does not immediately lock your account. You will retain full access to your Pro or Enterprise features until the end of your current billing period. Once the period expires, your workspace will be downgraded, and premium features will be locked.

Pro runs on SudoDocs' platform Gemini key. Enterprise can instead bring its own key - for text generation, embeddings & search, or both independently - for data trust and residency: see [Provider](llm-provider.md) for setup and how the transition from the platform key works.

> **Not available via CLI**: Cancelling a subscription and deleting an organization are both deliberately dashboard-only actions, given the blast radius of either one being scriptable.

## API Keys

The Organization tab also lets you generate API keys for the [SudoDocs CLI](../../cli-guide/getting-started.md) and its underlying Headless API, used for scripting doc syncs, spec conversions, and Docflows suggestions from CI/CD pipelines - see [CLI Tasks → Organization](../../cli-guide/admin/settings.md) for the command-line equivalent of everything on this page.

1. On the **Organization** tab, find the **API Keys** card.
2. Enter a name for the key (e.g., "CI Pipeline") and click **Generate New Key**.
3. Copy the key immediately - it is shown only once and cannot be retrieved again later.

> **Note**: Existing keys are listed with their name, prefix, and last-used time, but never their full value. Click **Revoke** next to a key to invalidate it immediately - anything using that key (CLI, CI job, script) stops working right away.

## Delete the Organization

**Delete organization** is a permanent, irreversible operation that completely erases your organization's footprint from SudoDocs:

* Your active Paddle billing subscription is immediately canceled.
* All synced Knowledge Graph data, vector embeddings, and cached code snippets are purged.
* All connected repository integrations and Slack/Jira webhook credentials are deleted.
* All generated documentation drafts, release notes, and OpenAPI configurations are destroyed.
* Every member loses access, and all user accounts and pending invitations associated with your organization are removed.

To delete the organization:

1. On the **Organization** tab, find the **Delete organization** card.
2. Type your organization's name, exactly as shown in the card, into the confirmation box. Capitals and extra spaces don't matter.
3. Click **Delete organization** and confirm. You're signed out immediately, and all data is wiped.

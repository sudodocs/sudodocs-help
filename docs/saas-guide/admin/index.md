# Admin Tasks

Instructions for System Administrators to configure, manage, and secure the SudoDocs workspace.

The Admin Dashboard's tabs, in the order they appear:

* [Provider](llm-provider.md): Bring your own key for text generation and/or embeddings & search (OpenAI, Claude, DeepSeek, Voyage AI, or a custom endpoint) instead of the platform Gemini key.
* [Repositories](connect-repos.md): Connect GitHub repositories (with **Connect with GitHub** or a token) and public websites, and sync them.
* [Knowledge Base](kb-config.md): Configure the knowledge base and style guide SudoDocs writes to.
* [API Specs](api-specs.md): Set where your OpenAPI spec lives and which style rules check it.
* [Doc Team Roles](doc-team-roles.md) (**Roles** tab): Customize what the Information Architect, Technical Writer, and Editor each prioritize and check for, with sample instructions.
* [Connect Services](integrations.md) (**Services** tab): Connect Jira and Slack to SudoDocs.
* [Security & SSO](sso-setup.md) (**SSO** tab): Set up Single Sign-On for accessing SudoDocs.
* [Users](users.md): Invite and remove members, assign roles, manage members' sign-in and two-factor, and set the organization's sign-in policy.
* [Organization](settings.md): Manage your subscription and API keys, or delete the organization.

Also for administrators:

* [Configure Docflows Webhook](doc-drift.md): Configure your GitHub webhook settings to connect SudoDocs.
* [Plans & Billing](plans.md): What each plan includes - seats, AI credits, add-ons, and Enterprise-only features.

Your own password and two-factor settings are on [Profile & security](../user/profile-security.md), not in the Admin Dashboard.

Every task above - and most [User Tasks](../user/index.md) too - has a scriptable equivalent for Enterprise organizations: see the [CLI Guide](/cli-guide) to automate them from the command line or CI/CD pipelines instead of the dashboard.

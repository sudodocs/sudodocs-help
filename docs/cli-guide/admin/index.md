# CLI Admin Tasks

Command-line equivalents of every [SaaS Guide → Admin Tasks](../../saas-guide/admin/index.md) page - same settings, same effect, triggered from a terminal, a script, or a CI/CD pipeline instead of the dashboard. All commands here require the System Administrator role, same as the dashboard pages they mirror. See [Getting Started](../getting-started.md) first if you haven't installed or logged in to the CLI yet.

| Dashboard page | CLI equivalent |
|---|---|
| [Overview](../../saas-guide/admin/overview.md) | [Admin Status](#admin-status) |
| [Repositories](../../saas-guide/admin/connect-repos.md) | [Repositories](connect-repos.md) |
| [Configure Docflows Webhook](../../saas-guide/admin/doc-drift.md) | [Docflows](doc-drift.md) |
| [Knowledge Base](../../saas-guide/admin/kb-config.md) | [Knowledge Base](kb-config.md) |
| [API Specs](../../saas-guide/admin/api-specs.md) | [API Specs](api-specs.md) |
| [Doc Team Roles](../../saas-guide/admin/doc-team-roles.md) | [Doc Team Roles](doc-team-roles.md) |
| [Users](../../saas-guide/admin/users.md) | [Users](users.md) |
| [Connect Services](../../saas-guide/admin/integrations.md) | [Connect Services](integrations.md) |
| [Security & SSO](../../saas-guide/admin/sso-setup.md) | [Security & SSO](sso-setup.md) |
| [Provider](../../saas-guide/admin/llm-provider.md) | [Provider](llm-provider.md) |
| [Organization](../../saas-guide/admin/settings.md) | [Organization](settings.md) |

## Admin Status

```bash
sudodocs admin status
sudodocs admin status --json
```

Prints the same setup progress as the Admin Dashboard's [Overview](../../saas-guide/admin/overview.md): how many setup steps are done, the next step, each step's status (done, built-in, to do, or not on your plan), seats and AI credits, and any repository whose access needs fixing. `--json` prints everything. API: `GET /api/v1/admin/status`.

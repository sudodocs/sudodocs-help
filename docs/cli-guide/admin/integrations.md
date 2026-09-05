# Connect Services

CLI equivalents of [Admin Tasks → Connect Services](../../saas-guide/admin/integrations.md). Admin-only, same as the Services tab.

## Connect Jira

```bash
sudodocs admin services connect-jira \
  --name "Corporate Jira" \
  --jira-url "https://company.atlassian.net" \
  --jira-email "service-account@company.com" \
  --jira-token "your-atlassian-api-token"
```

`--jira-token` is an Atlassian API Token, not your password - see [Connect Jira](../../saas-guide/admin/integrations.md#connect-jira).

## Connect Slack

```bash
sudodocs admin services connect-slack \
  --name "Team Slack" \
  --slack-token "xoxb-..." \
  --slack-secret "your-signing-secret"
```

Once connected, the integration appears in `sudodocs admin integrations list` alongside your Git and website repositories.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/services/connect` | POST | `{"provider": "jira"\|"slack", "name", ...provider fields}`. Wrapped by `sudodocs admin services connect-jira`/`connect-slack`. |

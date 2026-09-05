# Doc Team Roles

CLI equivalent of [Admin Tasks → Doc Team Roles](../admin-guide/doc-team-roles.md). Admin-only, same as the Roles tab.

## Show Current Instructions

```bash
sudodocs admin doc-team-roles get
```

Prints the org's current instructions for all three roles as JSON. A missing or empty field means that role is using the built-in default - see [What to Write for Each Role](../admin-guide/doc-team-roles.md#what-to-write-for-each-role) for good examples of each.

## Set Role Instructions

```bash
sudodocs admin doc-team-roles set \
  --information-architect "Place all API reference content under docs/api-reference/, grouped by resource name." \
  --technical-writer "Every procedure must end with a Verify step." \
  --editor "Treat a missing rate-limit note on any API endpoint as blocking."
```

Each option is independent - pass only the ones you want to change. Leaving one blank uses the built-in default for that role, the same as leaving its box empty on the web form.

Changes apply to every draft generated afterward, in both Author a Feature and Docflows - see [Verifying a Change Took Effect](../admin-guide/doc-team-roles.md#verifying-a-change-took-effect) for how to confirm a new instruction is live.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/doc-team-roles` | GET | `{"information_architect", "technical_writer", "editor"}`. Wrapped by `sudodocs admin doc-team-roles get`. |
| `/admin/doc-team-roles` | POST | Same shape. Wrapped by `sudodocs admin doc-team-roles set`. |

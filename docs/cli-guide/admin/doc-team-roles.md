# Doc Team Roles

CLI equivalent of [Admin Tasks → Doc Team Roles](../../saas-guide/admin/doc-team-roles.md). Admin-only, same as the Roles page.

## Show Current Instructions

```bash
sudodocs admin doc-team-roles get
```

Prints the org's current instructions for all three roles as JSON. A missing or empty field means no text is set this way: the role uses the skill files uploaded on the **Roles** page if there are any, otherwise the built-in default - see [What to Write for Each Role](../../saas-guide/admin/doc-team-roles.md#what-to-write-for-each-role) for good examples of each.

## Set Role Instructions

```bash
sudodocs admin doc-team-roles set \
  --information-architect "Place all API reference content under docs/api-reference/, grouped by resource name." \
  --technical-writer "Every procedure must end with a Verify step." \
  --editor "Treat a missing rate-limit note on any API endpoint as blocking."
```

Each option is independent - pass only the ones you want to change. Leaving one blank uses the built-in default for that role, the same as leaving its box empty on the web form.

Text set this way is used instead of any skill files uploaded on the **Roles** page until you clear it (see [Give a Role Its Skill](../../saas-guide/admin/doc-team-roles.md#give-a-role-its-skill)). Changes apply to every draft generated afterward, in both Docflows and Author mode's ticket tool - see [Verifying a Change Took Effect](../../saas-guide/admin/doc-team-roles.md#verifying-a-change-took-effect) for how to confirm a new instruction is live.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/doc-team-roles` | GET | `{"information_architect", "technical_writer", "editor"}`. Wrapped by `sudodocs admin doc-team-roles get`. |
| `/admin/doc-team-roles` | POST | Same shape. Wrapped by `sudodocs admin doc-team-roles set`. |

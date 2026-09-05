# Users

CLI equivalents of [Admin Tasks → Users](../admin-guide/users.md). All commands are admin-only, same as the Users tab.

## List Users

```bash
sudodocs admin users list
```

## Invite a Team Member

```bash
sudodocs admin users invite --email newperson@example.com --role Writer
```

`--role` is `Writer` or `System Administrator`. Blocked with an error if your organization is already at its seat limit - see [Invite a Team Member](../admin-guide/users.md#invite-a-team-member).

If the email already belongs to an existing SudoDocs user, they're added directly to your org (no invite email needed) or, if they're already a member, their role is updated - same as the web form. Otherwise an invitation is created and, if email delivery is configured, sent automatically; the command always prints the invite link too, so you can share it directly if email delivery isn't set up.

## Update a User's Role

```bash
sudodocs admin users update-role <user_id> --role "System Administrator"
```

Find `<user_id>` via `sudodocs admin users list`.

## Remove a User

```bash
sudodocs admin users remove <user_id>
```

Removes the user from your organization immediately - self-service, no need to contact support. They keep their SudoDocs account (so re-inviting the same email later works normally) but lose access to your org right away, including revoking any API keys they'd generated. You can't remove yourself this way - use `sudodocs logout` instead.

## Manage Pending Invitations

```bash
sudodocs admin users invitations list
sudodocs admin users invitations cancel <invite_id>
```

Cancelling frees up the seat the pending invitation was holding.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/users` | GET | List org users. Wrapped by `sudodocs admin users list`. |
| `/admin/users/invite` | POST | `{"email", "role"}`. Wrapped by `sudodocs admin users invite`. |
| `/admin/users/{id}/role` | POST | `{"role"}`. Wrapped by `sudodocs admin users update-role`. |
| `/admin/users/{id}` | DELETE | Wrapped by `sudodocs admin users remove`. |
| `/admin/invitations` | GET | Wrapped by `sudodocs admin users invitations list`. |
| `/admin/invitations/{id}` | DELETE | Wrapped by `sudodocs admin users invitations cancel`. |

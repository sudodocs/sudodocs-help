# Users

CLI equivalents of [Admin Tasks → Users](../../saas-guide/admin/users.md). All commands are admin-only, same as the Users tab.

## List Users

```bash
sudodocs admin users list
```

Each line shows the user's ID, email, name, role, and join date, plus `[2FA]` if they use two-factor authentication and `[DISABLED]` if their account is disabled.

## Invite a Team Member

```bash
sudodocs admin users invite --email newperson@example.com --role Writer
```

`--role` is `Writer`, `Walkthrough Auditor`, or `System Administrator`. Blocked with an error if your organization is already at its seat limit - see [Invite a Team Member](../../saas-guide/admin/users.md#invite-a-team-member).

If the email already belongs to an existing SudoDocs user, they're added directly to your org and emailed that you added them; if they're already a member, their role is updated instead - same as the web form. Otherwise an invitation is created and, if email delivery is configured, sent automatically; the command always prints the invite link too, so you can share it directly if email delivery isn't set up.

## Update a User's Role

```bash
sudodocs admin users update-role <user_id> --role "System Administrator"
```

Find `<user_id>` via `sudodocs admin users list`. The new role applies immediately, including in any browser where the user is signed in.

## Remove a User

```bash
sudodocs admin users remove <user_id>
```

Removes the user from your organization immediately, including in any browser where they're signed in - self-service, no need to contact support. They keep their SudoDocs account (so re-inviting the same email later works normally) but lose access to your org right away, including revoking any API keys they'd generated. You can't remove yourself this way - use `sudodocs logout` instead.

## Manage a Member's Sign-In

The same actions as the **Sign-in...** menu on the Users tab - see [Manage a Member's Sign-In](../../saas-guide/admin/users.md#manage-a-members-sign-in):

```bash
sudodocs admin users send-reset <user_id>   # email a password reset link
sudodocs admin users reset-2fa <user_id>    # remove their two-factor (e.g. lost phone)
sudodocs admin users sign-out <user_id>     # end every session they have
sudodocs admin users disable <user_id>      # sign them out and block sign-in
sudodocs admin users enable <user_id>       # let a disabled user sign in again
```

You can't run these on your own account.

## Set the Sign-In Policy

```bash
sudodocs admin users login-policy get
sudodocs admin users login-policy set --methods password,google,sso
sudodocs admin users login-policy set --require-2fa-all       # or --no-require-2fa-all
```

`--methods` is a comma-separated list of `password`, `google`, and `sso` - the sign-in methods members may use. System Administrators always need two-factor for password sign-ins, whatever the policy says. See [Set the Sign-In Policy](../../saas-guide/admin/users.md#set-the-sign-in-policy).

> **Note**: The sign-in commands on this page need `sudodocs-cli` 1.1.0 or later. Upgrade with `pip install --upgrade sudodocs-cli`.

## Manage Pending Invitations

```bash
sudodocs admin users invitations list
sudodocs admin users invitations cancel <invite_id>
```

Cancelling frees up the seat the pending invitation was holding.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/users` | GET | List org users. Each user includes `two_factor`, `disabled`, `last_login_at`, and `last_login_method`. Wrapped by `sudodocs admin users list`. |
| `/admin/users/invite` | POST | `{"email", "role"}`. Wrapped by `sudodocs admin users invite`. |
| `/admin/users/{id}/role` | POST | `{"role"}`. Wrapped by `sudodocs admin users update-role`. |
| `/admin/users/{id}` | DELETE | Wrapped by `sudodocs admin users remove`. |
| `/admin/users/{id}/security` | POST | `{"action"}`: one of `send_reset`, `reset_2fa`, `sign_out`, `disable`, `enable`. Wrapped by the sign-in commands above. |
| `/admin/login-policy` | GET, POST | POST takes `{"methods": [...], "require_2fa_all": true/false}`. Wrapped by `sudodocs admin users login-policy`. |
| `/admin/invitations` | GET | Wrapped by `sudodocs admin users invitations list`. |
| `/admin/invitations/{id}` | DELETE | Wrapped by `sudodocs admin users invitations cancel`. |

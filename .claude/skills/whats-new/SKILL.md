---
name: whats-new
description: Rules for writing and updating the public "What's New" page (docs/whats-new.md) on the SudoDocs help site. Use whenever adding a release entry, summarizing app changes for customers, or editing that page. Covers what to include, what must never appear (private code and security details), wording and format.
---

# Writing the "What's New" page

`docs/whats-new.md` is a **public, customer-facing** changelog on
docs.sudodocs.com, linked from the navbar. This repository is public too.
Readers are SudoDocs customers (admins, writers, developers using the CLI),
not SudoDocs engineers. Write about what changed for them, never about how
it was built.

## Never include

These are private to the SudoDocs codebase. They must not appear in an
entry, a link, an example, or a commit message for this page:

- File, module, function, class, variable, route, table, column, environment
  variable or setting names from the app (e.g. `mailer.py`,
  `enforce_session_validity`, `users.welcomed_org_id`, `RESEND_FROM_EMAIL`).
  Exception: names customers already type or click, such as CLI commands
  (`sudodocs admin users list`), CLI flags, and UI labels.
- Commit hashes, branch names, pull request or issue numbers, internal plan
  documents, or the private `sudodocs-app` repository.
- **How a security problem worked.** Describe the improvement, not the
  weakness: write "Role changes and removals now take effect immediately",
  not "removed users kept access in open sessions". No exploit steps, no
  "previously anyone could...", no affected versions or timelines. If
  customer data was actually exposed, that's a direct notice to the affected
  customers decided by the owner, never a changelog line.
- Infrastructure and vendors behind the scenes: hosting, databases, queues,
  cloud projects, email or AI providers, deploy process, costs, rate limits,
  or internal tooling. Exception: vendors customers deal with directly, such
  as Paddle for payments, GitHub, Jira and Slack integrations, and AI
  providers an Enterprise customer connects themselves.
- Internal-only work: refactors, tests, code moves, logging, CI, deploy
  scripts, performance work customers can't notice.
- Names of people, customers, organizations, test accounts or email
  addresses.
- Anything not yet live in production. Add the entry when the release
  reaches app.sudodocs.com, not when it merges.
- Unannounced or future plans ("coming soon", roadmap items) and pricing
  numbers. Prices live only on sudodocs.com/#pricing; link there instead.

If unsure whether a detail is private, leave it out.

## What to include

Only changes a customer can see, use, or must act on:

| Change | Include? |
|---|---|
| New feature or command | Yes, with a link to its help page |
| Renamed or moved UI | Yes, one line saying where it is now |
| Something users must do (upgrade the CLI, set up two-factor) | Yes, say exactly what to do |
| Security improvement | One neutral line under **Improvements** |
| Bug fix users would have noticed | One line under **Improvements**, phrased as what works now |
| Internal work | No |

## Format

- Newest first. One `## Month YYYY` heading per release month; add to the
  existing month if it's already there.
- Group bullets under short `###` themes ("Sign in your way",
  "Repositories and API specs", "CLI", "Improvements"). Put
  **Improvements** last.
- Each bullet: a **bold short title**, then one or two sentences on what the
  customer can do now. Link to the help page with a relative Markdown link
  (`saas-guide/admin/users.md#anchor`), so the build checks it.
- Plain, friendly, present tense, second person ("you"). Use the exact UI
  labels in bold (**Profile & security**). No internal jargon, no hype words.
- Keep each release to the handful of changes that matter. The help pages
  hold the details.

## Before committing

1. Re-read every line against **Never include**.
2. Every link points to an existing page and anchor.
3. `npm run build` passes (broken links fail the build).

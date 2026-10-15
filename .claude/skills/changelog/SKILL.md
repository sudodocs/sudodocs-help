---
name: changelog
description: Rules for writing and updating the public Changelog page (docs/changelog.md) and the "Latest update" strip on the help home page on the SudoDocs help site. Use whenever adding a release entry, summarizing app changes for customers, or editing that page. Covers what to include, what must never appear (private code and security details), wording and format.
---

# Writing the Changelog

`docs/changelog.md` is the **public, customer-facing** changelog on
docs.sudodocs.com (the **Changelog** tab). The home page repeats the newest
release in a short "Latest update" strip (`LATEST_UPDATE` in
`src/pages/index.js`). This repository is public too.
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

`docs/changelog.md` holds **the current month only**. SudoDocs is a cloud
app, so older months aren't maintained - they're archived, read-only.

- Intro line names the month: "What's new in SudoDocs in **October 2026**,
  newest release first." (also in the front-matter `description`).
- **One `##` section per production release, by date**, newest first, with
  a stable id: `## October 14, 2026 {#2026-10-14}`. Use the day the release
  reached app.sudodocs.com (the production deploy), not the merge date.
  Never mix two releases under one heading; a later release gets its own
  section even on a busy day.
- Inside a release, group bullets under short `###` themes ("Release notes",
  "Doc Team Roles", "For administrators", "CLI", "Improvements"). Put
  **CLI** next to last and **Improvements** last. Only the themes that
  release needs.
- Each bullet: a **bold short title**, then one or two sentences on what the
  customer can do now. Link to the help page with a relative Markdown link
  (`saas-guide/admin/users.md#anchor`), so the build checks it.
- Plain, friendly, present tense, second person ("you"). Use the exact UI
  labels in bold (**Profile & security**). No internal jargon, no hype words.
- Keep each release to the handful of changes that matter. The help pages
  hold the details.

## New month: archive the old one

On the first production release of a new month, before adding its entry:

1. Move the current file to `docs/changelog-archive/<month>-<year>.md`
   (e.g. `october-2026.md`). Change its front matter to
   `title: Changelog - October 2026`, its `# Changelog` heading to
   `# Changelog: October 2026`, drop the "For earlier months" sentence, and
   add `../` to every relative link (it's one folder deeper):
   `sed -i '' -E 's/\]\((saas-guide|cli-guide)\//](..\/\1\//g' <file>`.
2. Add it at the top of the list in `docs/changelog-archive/index.md`
   (`- [October 2026](october-2026.md)`), and remove the "No earlier months
   yet" line the first time.
3. Start a fresh `docs/changelog.md` for the new month with the same front
   matter, intro and "For earlier months, see [Past Changelogs]..." line,
   then add the release.

## Before committing

0. Update `LATEST_UPDATE` in `src/pages/index.js` for every release: its
   `date` ("October 14, 2026"), a one-line summary of **that release only**,
   and `anchor` = the release's id (`2026-10-14`).

1. Re-read every line against **Never include**.
2. Every link points to an existing page and anchor.
3. `npm run build` passes (broken links fail the build).

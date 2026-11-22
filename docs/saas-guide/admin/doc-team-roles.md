# Configure Doc Team Roles

Every documentation draft SudoDocs produces - whether you started it yourself in **Author mode** (the ticket tool) or it arrived automatically through **Docflows** - passes through three roles before a human ever sees it:

* **Information Architect**: Decides where the content belongs (a new page, or an update to an existing one), audits your existing documentation for anything the change makes outdated, sets the section outline the Writer must follow, and decides whether the change is significant enough to warrant a generated architecture diagram (see [Author mode](../user/author-mode.md)). This diagram judgment isn't part of the editable instructions below - it's a fixed part of the role.
* **Technical Writer**: Drafts the content against that outline.
* **Editor**: Reviews the Writer's draft with fresh eyes - it never sees the Writer's own instructions, only the finished draft, the outline it should match, and the same source material the Writer had. It decides whether an issue is **blocking** (sends the draft back to the Writer for one more pass) or a **suggestion** (recorded, doesn't hold up the draft).

Each role's judgment is configurable per organization (as skill files), separately from your [Knowledge Base](kb-config.md) style guide and terminology - the Knowledge Base controls *how things are worded*, Doc Team Roles controls *what each role prioritizes and checks for*.

## Give a Role Its Skill

Each role runs on a **skill**: Markdown files you upload. With no file, a role uses SudoDocs' built-in instructions. You don't need to customize all three roles.

1. Open **Admin** in the left menu and open **Roles**.
2. On a role's card, click **Download template**. The file explains the format and starts from the role's built-in instructions, so you can edit what is already there.
3. Edit the file on your computer. Describe what the role should always do, check or avoid (see [What to Write for Each Role](#what-to-write-for-each-role)).
4. Click **Upload skill** and choose your file. You can choose several files at once. The upload starts as soon as you choose.

Each card then lists the files for that role with **Download** and **Remove** next to each. To change a skill, click **Download skill** (it gives you all the role's files joined into one file), edit it, remove the old files and upload the new one. Uploading a file with the same name replaces it.

| Limit | Value |
|---|---|
| File types | `.md`, `.markdown` or `.txt`, as UTF-8 text |
| Size | 100 KB for the upload, 20,000 characters of text for each file |
| Files per role | 5, with up to 20,000 characters in total |

SudoDocs reads each file before it keeps it. An optional header at the top (`name` and `description`) sets the file's title in the list, comments are removed, and a file that is empty, too large or not text is refused with the reason. **Reset to default** at the top of the page removes every uploaded file.

Changes apply to everything written afterward - you don't configure each tool separately. See [Where the Roles Apply](#where-the-roles-apply).

> **Note:** A skill changes only the *judgment* part of each role: what to prioritize and check. The structural contract that keeps SudoDocs' review pipeline working - what format each role responds in, how a draft moves between roles - stays fixed, so nothing you write here can break the pipeline itself.

> **Note:** If you set role instructions with the [CLI or API](../../cli-guide/admin/doc-team-roles.md), that text is used instead of the uploaded files until you clear it. The card says so.

## Public-Facing Documentation

When SudoDocs writes documentation from your code with [Start from code](../user/start-from-code.md), every role works under built-in **public-facing rules**: no internal file or code names, no installation or deployment steps, only what the code supports, and users and administrators kept on separate pages. Your skill files are added after these rules and can adjust them.

To apply the same rules to the rest of SudoDocs, turn on **Use the public-facing rules everywhere** on the **Roles** page and click **Save**. The rules are then added to the roles' instructions for [Docflows](../user/doc-drift.md), the [Changelog](../user/release-composer.md), reviews, Self review and the rewrite tools in [Author mode](../user/author-mode.md). Use it when your documentation is for customers and you want to keep it that way as it changes.

The switch changes what the AI is asked to do. The automatic checks that look for leaked internal names and invented paths run in Start from code, which has your code to compare with.

## Where the Roles Apply

These are SudoDocs' own built-in roles, not people on your team. Your writers and admins don't take on a role; SudoDocs uses the instructions you write here whenever it writes or revises documentation:

| Where | Information Architect | Technical Writer | Editor |
|---|---|---|---|
| [Author mode](../user/author-mode.md) | Plans the page | Drafts and revises | Reviews every round, and suggests the release-notes line |
| [Docflows](../user/doc-drift.md) suggestions | Plans which files change | Drafts and revises | Reviews the whole set |
| [Request changes](../user/doc-drift.md#request-changes) on a Docflows card | - | Makes your requested changes | Reviews the result |
| [Sync Latest Code](../user/assign-pr.md#manage-engineering-changes) | - | Writes what's missing | Reviews it |
| [Mentioning SudoDocs on a docs pull request](../user/assign-pr.md#ask-sudodocs-to-revise-a-docs-pull-request) | - | Makes the change | Reviews it; nothing is pushed while it has blocking issues |
| [Start from code](../user/start-from-code.md) | Plans the pages of a documentation type | Drafts every page | Reviews every page against the facts |
| [Changelog](../user/release-composer.md#draft-the-release-notes) | - | Writes every entry | Checks every queued item is there once, in its section, with nothing invented |
| [Universal Converter](../user/converter.md#generate-ai-reference-docs-pro) reference pages | - | Writes the page | Checks it against your spec or values file: nothing invented, nothing missing |
| [API Readiness](../user/api-readiness.md#review-results) AI fixes | - | Writes the descriptions and summaries | Reviews only the text the fix wrote or changed |
| [Doc Assistant](../user/chat.md#chat-modes) Author, Rewrite and Release Note | - | Writes the draft | Checks it against your request and the docs it found |

The Assistant's Discuss and Analyze Doc Gaps modes answer questions rather than write documentation, so they don't use the roles. Capture captions and diagrams don't either.

When the Editor marks something as blocking, the Writer gets another pass. If the Editor still has open issues after that, SudoDocs doesn't hide them: the draft or suggestion is flagged with what's still open.

## What to Write for Each Role

Think of each skill file as onboarding notes for a new hire in that role: what should they always check, always do, or never do, that a generic technical writer or editor wouldn't automatically know about your organization?

### Information Architect

Good candidates: naming and folder conventions, how you want new vs. updated content weighted, or how your product categories should influence placement.

```text
Place all API reference content under docs/api-reference/, grouped by
resource name (e.g. docs/api-reference/users.md), never by HTTP method.
If a change touches both a public and an internal-only endpoint, only
document the public one unless the ticket explicitly says otherwise.
When Org_Product_Categories includes "Notifications", prefer grouping
new content alongside the existing notifications docs even if the
existing-doc match isn't exact.
```

### Technical Writer

Good candidates: house style rules that go beyond your base framework, formatting conventions for specific content types, or things you're tired of manually fixing after every draft.

```text
Every procedure must end with a "Verify" step describing what the user
should see if it worked. Never use "simply" or "just" to describe a
step. Code samples must include error handling, not just the happy
path. Always write a one-line "Prerequisites" note even if the answer
is "None" - do not omit the section.
```

### Editor

Good candidates: compliance or completeness rules you want enforced automatically, or the specific mistakes you keep catching in review.

```text
Treat a missing rate-limit note on any API endpoint as blocking, not a
suggestion. Treat any code sample without error handling as blocking.
Flag (as a suggestion) any sentence written in passive voice. Do not
block a draft solely for minor wording preferences - reserve blocking
for factual gaps, missing required sections, or compliance issues.
```

## Verifying a Change Took Effect

Skill files apply the next time a draft is generated - editing them doesn't retroactively change drafts already in progress or already published. To confirm a change is live:

1. Upload your skill file.
2. Generate a new draft with [Author mode](../user/author-mode.md)'s **Draft from a ticket or pull request** (or wait for the next Docflows suggestion).
3. Open a Docflows card's **Review history** and check the Editor's comments. They should reflect your new instruction.

## See Also

* [Configure the Knowledge Base](kb-config.md) - style guide, terminology, and product categories, which every role already reads alongside its instructions here.
* [Author mode](../user/author-mode.md) - the manually-initiated path through this same pipeline.
* [Manage Docflows](../user/doc-drift.md) - the automatically-initiated path through this same pipeline.
* [Changelog](../user/release-composer.md) - release notes written by the Technical Writer and checked by the Editor.
* [CLI Tasks → Doc Team Roles](../../cli-guide/admin/doc-team-roles.md) - script role instruction changes.

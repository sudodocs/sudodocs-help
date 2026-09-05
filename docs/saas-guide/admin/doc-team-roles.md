# Configure Doc Team Roles

Every documentation draft SudoDocs produces - whether you started it yourself with **Author a Feature** or it arrived automatically through **Docflows** - passes through three roles before a human ever sees it:

* **Information Architect**: Decides where the content belongs (a new page, or an update to an existing one), audits your existing documentation for anything the change makes outdated, sets the section outline the Writer must follow, and decides whether the change is significant enough to warrant a generated architecture diagram (see [Author a Feature](../user/feature-author.md#generate-architecture-diagrams)). This diagram judgment isn't part of the editable instructions below - it's a fixed part of the role.
* **Technical Writer**: Drafts the content against that outline.
* **Editor**: Reviews the Writer's draft with fresh eyes - it never sees the Writer's own instructions, only the finished draft, the outline it should match, and the same source material the Writer had. It decides whether an issue is **blocking** (sends the draft back to the Writer for one more pass) or a **suggestion** (recorded, doesn't hold up the draft).

Each role's judgment is admin-configurable per organization, separately from your [Knowledge Base](kb-config.md) style guide and terminology - the Knowledge Base controls *how things are worded*, Doc Team Roles controls *what each role prioritizes and checks for*.

## Edit Role Instructions

1. Navigate to **Admin Dashboard**.
2. Open the **Roles** tab.
3. You'll see three boxes, one per role, each pre-filled with a greyed-out placeholder showing the built-in default. An empty box means that role is using the default - you don't need to fill in all three to customize one.
4. Type your own instructions into any box to override the default for that role.
5. Click **Save Role Instructions**.

Changes apply to every draft generated afterward, in both Author a Feature and Docflows - you don't configure the two separately.

> **Note:** Only the *judgment* portion of each role's prompt is editable here. The structural contract that keeps SudoDocs' review pipeline working - what format each role responds in, how a draft moves between roles - stays fixed, so nothing you write here can break the pipeline itself.

## What to Write for Each Role

Think of each box as onboarding notes for a new hire in that role: what should they always check, always do, or never do, that a generic technical writer or editor wouldn't automatically know about your organization?

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

Role instructions apply the next time a draft is generated - editing them doesn't retroactively change drafts already in progress or already published. To confirm a change is live:

1. Save your new instructions.
2. Generate a new draft with [Author a Feature](../user/feature-author.md) (or wait for the next Docflows suggestion).
3. Open the draft's **History** on the Pipeline Review page and check the Editor's comments - they should reflect your new instruction.

## See Also

* [Configure the Knowledge Base](kb-config.md) - style guide, terminology, and product categories, which every role already reads alongside its instructions here.
* [Author a Feature](../user/feature-author.md) - the manually-initiated path through this same pipeline.
* [Manage Docflows](../user/doc-drift.md) - the automatically-initiated path through this same pipeline.
* [CLI Tasks → Doc Team Roles](../../cli-guide/admin/doc-team-roles.md) - script role instruction changes.

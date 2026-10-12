# User Tasks

Comprehensive instructions for technical writers, developers, and product managers using SudoDocs to automate documentation workflows.

New here? Start with:

* [Sign In and Create an Account](sign-in.md): Sign in with a password, Google, or company SSO; create an organization; accept an invitation; reset a forgotten password.
* [Profile & Security](profile-security.md): Change your password, turn on two-factor authentication, and see your recent sign-ins.

Not sure whether to start with **Author a Feature** or let **Docflows** handle it? See [Author a Feature vs. Docflows](feature-author-vs-docflows.md).

Every tool is a card in the **Tools** grid on your Workspace:

* [Compose Release Notes](release-composer.md): Each release's queue of what goes into its notes - from Docflows, Slack, Jira, CSVs or added by hand - drafted for you (automatically before the release if no one gets to it) and pushed to your docs.
* [Author a Feature](feature-author.md): Draft comprehensive feature documentation.
* [DocOps Assistant](chat.md): Bridges the gap between your engineering codebase and your published documentation. By querying your synced code and documentation repositories in real-time, it acts as a technical co-pilot that understands your actual product logic. It streamlines your entire documentation lifecycle—from answering highly technical codebase queries and generating first drafts, to automating release notes and proactively auditing your site for technical drift.
* [Universal Converter](converter.md): Translates documentation between different markup languages
* [Docflows](doc-drift.md): Generates automated documentation suggestions directly from engineering pull/merge requests or Jira tickets.
* [Diagram Generator](diagram-gen.md): Builds brand-compliant `Mermaid.js` sequence diagrams based on natural language descriptions or visual reference images.
* [API Readiness](api-readiness.md): Validates your OpenAPI Specifications (OAS) against industry standards and your own style guide.
* [Capture](capture.md): A Chrome extension for turning a live product into a shareable click-through walkthrough, a narrated screen recording, or an annotated screenshot.

At the top, **Release Dashboard** opens all your team's work, release by release - see [Dashboards](dashboards.md). A release groups one version's feature drafts, release notes and Docflows; see [Manage Releases](releases.md), and [Review and Push Docflows](assign-pr.md) to review the Docflows on a release.

### Your Work

When anything is assigned to you, a **Your work** row above the tools sums it up, for example **4 open · 1 blocked · 2 Docflows to review · 1 PR has changes requested · 1 flagged by the Editor**. Click a number to open the Release Dashboard showing just that: your open work, your blocked items (highlighted on the board), your Docflows, or what needs attention. **Flagged by the Editor** opens Docflows: suggestions assigned to you that SudoDocs' Editor couldn't sign off on. It only counts tools in your plan, and it's hidden when nothing is assigned to you.

On an Enterprise plan? Most of the tools above - and every Admin Task - can also be scripted from a terminal or CI pipeline. See the [CLI Guide](../../cli-guide/getting-started.md).

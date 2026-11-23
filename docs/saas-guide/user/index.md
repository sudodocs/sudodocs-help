# User Tasks

Comprehensive instructions for technical writers, developers, and product managers using SudoDocs to automate documentation workflows.

New here? Start with:

* [Find your way around](find-your-way.md): the left menu, Home, quick jump and the user menu.
* [Sign In and Create an Account](sign-in.md): Sign in with a password, Google, or company SSO; create an organization; accept an invitation; reset a forgotten password.
* [Profile and Security](profile-security.md): Change your password, turn on two-factor authentication, and see your recent sign-ins.

* [Write from scratch or maintain existing docs](two-ways.md): the two ways to use SudoDocs, and when to use each.
* [Write docs from scratch with Start from code](start-from-code.md): draft public documentation from a code repository, one type at a time.

Not sure whether to write a page yourself in **Author mode** or let **Docflows** handle it? See [Author mode and Docflows](feature-author-vs-docflows.md).

Every tool is an item in the **left menu** (see [Find your way around](find-your-way.md)):

* [Changelog](release-composer.md): Each release's queue of what goes into its notes - from Docflows, Slack, Jira, CSVs or added by hand - drafted for you (automatically before the release if no one gets to it) and pushed to your docs.
* [Author mode](author-mode.md): Write and edit your docs pages in SudoDocs, with a live preview, AI tools and review. It replaces Author a Feature.
* [Reviews](reviews.md): Comments, @mentions, outside reviewers and AI helpers on diagrams, captures, release notes, Docflows and API scans.
* [Doc Assistant](chat.md): Bridges the gap between your engineering codebase and your published documentation. By querying your synced code and documentation repositories in real-time, it acts as a technical co-pilot that understands your actual product logic. It streamlines your entire documentation lifecycle—from answering highly technical codebase queries and generating first drafts, to automating release notes and proactively auditing your site for technical drift.
* [Universal Converter](converter.md): Translates documentation between markup languages and drafts reference pages from an API spec
* [Docflows](doc-drift.md): Generates automated documentation suggestions directly from engineering pull/merge requests or Jira tickets.
* [Mermaid diagrams](diagram-gen.md): A library of Mermaid diagrams you can generate from a description, edit visually and insert into pages.
* [API Specs](api-readiness.md): Checks your OpenAPI Specifications (OAS) against industry standards and your own style guide; administrators register the specs (see [API Specs](../admin/api-specs.md)).
* [Capture](capture.md): A Chrome extension for turning a live product into a shareable click-through walkthrough, a narrated screen recording, or an annotated screenshot.

**Release Dashboard** in the left menu opens all your team's work, release by release - see [Dashboards](dashboards.md). **Triage** lists the items that need a decision. A release groups one version's feature drafts, release notes and Docflows; see [Manage Releases](releases.md), and [Review and Push Docflows](assign-pr.md) to review the Docflows on a release.

## Your Work

When anything is assigned to you, **Home** sums it up in numbers - your open work, your blocked items, the Docflows to review, pull requests with changes requested, and what the Editor flagged. Click a number to open the Release Dashboard showing just that: your open work, your blocked items (highlighted on the board), your Docflows, or what needs attention. **Flagged** opens Docflows: suggestions assigned to you that SudoDocs' Editor couldn't sign off on. It only counts tools in your plan, and it's hidden when nothing is assigned to you.

On an Enterprise plan? Most of the tools above - and every Admin Task - can also be scripted from a terminal or CI pipeline. See the [CLI Guide](../../cli-guide/getting-started.md).

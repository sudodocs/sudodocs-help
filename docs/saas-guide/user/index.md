# User Tasks

Comprehensive instructions for technical writers, developers, and product managers using SudoDocs to automate documentation workflows.

Not sure whether to start with **Author a Feature** or let **Docflows** handle it? See [Author a Feature vs. Docflows](feature-author-vs-docflows.md).

You can use the features in two ways:

* **Global Tools**: The Workspace provides a list of globally available features that you can use without creating a release dashboard. These include the following tools:

    * [DocOps Assistant](chat.md): Bridges the gap between your engineering codebase and your published documentation. By querying your synced code and documentation repositories in real-time, it acts as a technical co-pilot that understands your actual product logic. It streamlines your entire documentation lifecycle—from answering highly technical codebase queries and generating first drafts, to automating release notes and proactively auditing your site for technical drift.
    * [Universal Converter](converter.md): Translates documentation between different markup languages
    * [Docflows](doc-drift.md): Generates automated documentation suggestions directly from engineering pull/merge requests or Jira tickets.
    * [Diagram Generator](diagram-gen.md): Builds brand-compliant `Mermaid.js` sequence diagrams based on natural language descriptions or visual reference images.
    * [API Readiness](api-readiness.md): Validates your OpenAPI Specifications (OAS) against industry standards and your own style guide.

* **Project Tools**: The Project dashboard page a set of specialized tools that you would need to work in a release cycle. These include the following tools:

    * [Compose Release Notes](release-composer.md): Generate consolidated changelogs from Jira or CSVs.
    * [Author a Feature](feature-author.md): Draft comprehensive feature documentation.
    * [Assigned Docflows](assign-pr.md): Allows you to review, edit, and finalize AI-generated documentation drafts before pushing them to production.

On an Enterprise plan? Most of the tools above - and every Admin Task - can also be scripted from a terminal or CI pipeline. See the [CLI Guide](/cli-guide).

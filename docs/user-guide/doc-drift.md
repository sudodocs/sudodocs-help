# Audit Docs (Technical Drift)

The Doc Drift Inspector compares your source code against your existing documentation to identify gaps, undocumented features, and contradictions.

## Prerequisites

* You must have at least one **Source Code** repository and one **Documentation** repository synced in the Admin Dashboard.
* This feature is available on **Pro** and **Enterprise** plans.

## Running an Audit

1.  On the **Project Dashboard**, click **Inspect** on the **Doc Drift Inspector** card.
2.  Select the **Source Code Repo** representing the ""Truth"" (the implementation).
3.  Select the **Target Docs Repo** representing the content to check.
4.  Click **Run Audit**.

## Analyzing the Report

The system generates a **Technical Audit Report** containing:

* **Executive Summary**: A high-level overview of the documentation's accuracy.
* **Undocumented Features**: A list of features or parameters found in the code that are missing from the docs.
    * Includes a **Draft Suggestion** code block with proposed content in your doc's format (Markdown, RST, or AsciiDoc).
* **Discrepancies**: Areas where the documentation contradicts the code (e.g., wrong default values, deprecated endpoints).

You can export this report to **Word**, **Google Docs**, or save it as a draft within SudoDocs.

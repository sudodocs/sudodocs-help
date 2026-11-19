# Universal Converter

The Universal Converter translates documentation between markup languages, and drafts reference pages from an API spec. Open **Converter** in the left menu. A switch at the top chooses the tool: **Convert file** or **Draft from spec**.

## Convert Document Formats

Use **Convert file** to translate text between formats without losing structure (tables, headers and lists). Nothing is saved: the result downloads.

1. Choose **Convert file**.
2. Under **Convert from**, select the input format:

   * Markdown (`.md`)
   * reStructuredText (`.rst`)
   * AsciiDoc (`.adoc`)
   * HTML (`.html`)
3. Drop a file on the page, or choose **Paste text instead** and paste your text.
4. Under **Convert to**, select the output format. SudoDocs converts to all the formats above, plus **Word (.docx)**.
5. Click **Convert and download**.

## Generate AI Reference Docs (Pro)

If you are on a Pro or Enterprise plan, choose **Draft from spec** to have the **API spec to docs** tool draft Markdown tables from an OpenAPI file.

SudoDocs applies strict anti-hallucination rules to this tool: it will only extract parameters explicitly defined in your uploaded file and will never invent endpoints or default values.

1. Enter a **Document title** (for example, Core API Reference).
2. Drop your spec file on the page. The tool reads **OpenAPI / Swagger** files in YAML or JSON and groups endpoints by tag, with tables for parameters (Name, Type, Required, Description).
3. Click **Generate AI reference**.

> **Helm charts are not converted here any more.** They have their own place under **API Specs > Helm charts**, with checks, AI-written descriptions and a published Helm reference. The tool shows an **Open Helm charts** button where the Helm option used to be.

The page is written by SudoDocs' Technical Writer, following your [Doc Team Roles](../admin/doc-team-roles.md) instructions, and checked by its Editor against your file: every endpoint, parameter and default must be in the file, and nothing in the file may be missing. If the Editor finds a blocking issue, the Writer revises the page once. When it's done:

* **Checked against your source file by SudoDocs' Editor** means the Editor is satisfied.
* **The Editor still has open issues with this page** lists what's left. Fix it in the editor and click **Save**; saving clears the notice.

It costs 5 credits for every 25,000 characters of the file you upload (at least 5), since the AI reads the whole file and writes a page that grows with it - for example 15 credits for a 60,000-character spec. If there aren't enough credits, it says how many a file that size needs.

### Edit and Export Generated Specs

Open **History** to see your earlier conversions. Rename, tag (release and writer) or delete them from there - see [Tag work with a release and a writer](releases.md#tag-work-with-a-release-and-a-writer).

1. Click a generated spec to open it in the **Markdown editor**.
2. Make any manual adjustments to the text and click **Save**.
3. To export the finalized reference document, choose the format (Word, RST or AsciiDoc) and click **Download**.

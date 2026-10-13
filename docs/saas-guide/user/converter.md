# Universal Doc Converter

The Universal Doc Converter allows technical writers to seamlessly translate documentation between different markup languages, or instantly generate Markdown reference tables from raw engineering specifications.

## Convert Document Formats

Use the Universal Format Converter to instantly translate text between formats without losing structural integrity (like tables, headers, and lists).

1. On the Workspace, click **Open Converter** on the **Universal Converter** card.
2. Under the **Universal Format Converter** section, select your **Input Format**:

   * Markdown (`.md`)
   * reStructuredText (`.rst`)
   * AsciiDoc (`.adoc`)
   * HTML (`.html`)
3. Either paste your text into the editor or click **Upload File** to import a document.
4. Select your desired **Output** format. SudoDocs supports conversion to all the formats listed above, plus **Microsoft Word (.docx)**.
5. Click **Convert & Download**.

## Generate AI Reference Docs (Pro)

If you are on a Pro or Enterprise plan, you can use the **API / Helm to Docs** tool to automatically draft Markdown tables from raw configuration files. 

SudoDocs applies strict anti-hallucination rules to this tool: it will only extract parameters explicitly defined in your uploaded file and will never invent endpoints or default values.

1. Under the **API / Helm to Docs** section, enter a **Document Title**.
2. Select your **Source Type**:

   * **OpenAPI / Swagger**: Accepts JSON or YAML files. The AI will group endpoints by tags and create tables for parameters (Name, Type, Required, Description).
   * **Helm Chart**: Accepts `values.yaml` files. The AI will extract variables, parse inline comments for descriptions, and log default values.
3. Click **Upload Spec File** to attach your configuration document.
4. Click **Generate AI Reference**.

The page is written by SudoDocs' Technical Writer, following your [Doc Team Roles](../admin/doc-team-roles.md) instructions, and checked by its Editor against your file: every endpoint, parameter and default must be in the file, and nothing in the file may be missing. If the Editor finds a blocking issue, the Writer revises the page once. When it's done:

* **Checked against your source file by SudoDocs' Editor** means the Editor is satisfied.
* **The Editor still has open issues with this page** lists what's left. Fix it in the editor and click **Save Changes**; saving clears the notice.

This is included in the tool's usual credits.

### Edit and Export Generated Specs

Generated specs are listed on the left. Rename, tag (release and writer) or delete them from there - see [Tag work with a release and a writer](releases.md#tag-work-with-a-release-and-a-writer).

Once the AI finishes processing your specification, it will appear in the **AI Generated Specs** history panel on the left sidebar.

1. Click on a generated spec to open it in the **Markdown Editor**.
2. Make any manual adjustments to the text and click **Save Changes**.
3. To export the finalized reference document, use the dropdown menu to select your format (Word, RST, or AsciiDoc) and click **⬇️ Download**.
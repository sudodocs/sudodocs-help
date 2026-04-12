# Universal Doc Converter

The Universal Doc Converter allows technical writers to seamlessly translate documentation between different markup languages, or instantly generate Markdown reference tables from raw engineering specifications.

## Convert Document Formats

Use the Universal Format Converter to instantly translate text between formats without losing structural integrity (like tables, headers, and lists).

1. Navigate to **Global Tools > Universal Converter**.
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

### Edit and Export Generated Specs

Once the AI finishes processing your specification, it will appear in the **AI Generated Specs** history panel on the left sidebar.

1. Click on a generated spec to open it in the **Markdown Editor**.
2. Make any manual adjustments to the text and click **Save Changes**.
3. To export the finalized reference document, use the dropdown menu to select your format (Word, RST, or AsciiDoc) and click **⬇️ Download**.
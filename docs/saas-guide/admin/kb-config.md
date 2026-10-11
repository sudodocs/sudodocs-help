# Configure the Knowledge Base

Configure how the SudoDocs AI understands your product terminology, tone, and structure. See [CLI Tasks → Knowledge Base](../../cli-guide/admin/kb-config.md) for the command-line equivalent of everything on this page.

## Set Base Frameworks

Select a foundational formatting rule set for the AI.

* **Google Developer Docs**: Objective and direct.
* **Microsoft Style**: Conversational and accessible.
* **Apple Style**: Minimalist and user-focused.
* **IBM Style**: Strict and enterprise-grade.

1. Navigate to **Admin Dashboard > Knowledge Base**.
2. Choose a framework from the **Base Framework** dropdown - it saves automatically.

## Product Categories

List your product areas (one per line) to help the AI sort and place content - used by both [Compose Release Notes](../user/release-composer.md) (to bucket items into sections) and [Author a Feature](../user/feature-author.md)'s Information Architect step (as a hint when deciding where new content belongs).

1. On the **Knowledge Base** tab, find the **AI-Learned Classifications** card.
2. Edit the **Product Categories** box (one category per line, e.g. "API", "Frontend", "Security"). This box is also populated automatically by Auto-Learn, but you can edit it manually at any time.
3. Click **Save Product Categories**.

> Looking for Deployment Tags or CSV Column Mappings? Those moved to [Compose Release Notes](../user/release-composer.md#release-notes-settings) - they're specific to Bulk Release Notes generation, not a Knowledge Base concern shared across features the way Product Categories is.

## Neural Overrides (Style Guide)

Define absolute laws for the AI regarding your brand: product ontology and taxonomy, tone and terminology rules, and structural writing instructions - as one free-form Markdown document. This is the mechanism for customizing your style guide on top of whichever Base Framework you selected above.

1. On the **Knowledge Base** tab, click **Configure Markdown** under **Neural Overrides**.
2. Paste your content into the text box - typically the combined contents of a product overview, a style guide, and writing instructions, each as its own `.md` file you already maintain elsewhere. (Scripting this instead? [CLI Tasks → Knowledge Base](../../cli-guide/admin/kb-config.md#neural-style-guide-overrides) uploads a local file directly.)
3. Click **Save Overrides**.

Auto-Learn (below) appends a **Auto-Learned Rules** section to this same box rather than overwriting it, so anything you've written by hand is preserved.

There's no separate structured field for terminology rules - write them directly into this Markdown document in whatever format you want (e.g. a table, or a list like `InternalTerm → PublicTerm`); the AI treats the whole document as a strict instruction set, not a specific schema.

## Auto-Learn Tone

The Auto-Learn agent scans your connected documentation and public web repositories to extract your company's writing style and terminology, merging what it finds into your Product Categories and Neural Overrides above rather than replacing them. SudoDocs explicitly ignores code repositories during this process to prevent a robotic tone.

1. Ensure you have synced at least one Documentation or Web repository.
2. Navigate to **Admin Dashboard > Knowledge Base**.
3. Click **Run Auto-Learn**.

Auto-Learn also looks at up to six screenshots already in your documentation repository and adds what it notices - annotation colour, theme, cropping, whether personal data is hidden - to your [Screenshot Style](#screenshot-style). That part costs 5 credits on top of Auto-Learn's usual cost, and only when there are screenshots to look at.

## Screenshot Style

How SudoDocs takes screenshots for your docs - for Docflows today, and for every screenshot feature that builds on it. Like the writing style guide, it has three layers:

1. **The built-in guide**: sensible defaults - a 1440×900 browser window at 2× sharpness, light theme, crops focused on what the step is about with space around it, one annotation colour, boxes around controls, no cursor or pop-up messages, personal data replaced with demo values, and alt text of 125 characters or fewer.
2. **Learned from your existing screenshots**: what [Auto-Learn](#auto-learn-tone) noticed.
3. **Your settings**: anything you set wins over both.

To change it, go to **Admin Dashboard > Knowledge Base > Screenshot Style**. Each setting shows where its current value comes from - **Yours**, **Learned** or **Default** - and a field left blank uses the value shown.

| Setting | What it does |
|---|---|
| **Theme**, **Window size**, **Sharpness** | The browser SudoDocs captures in. Sharpness is pixel density: 2× looks crisp on high-resolution screens. |
| **Annotation colour**, **Numbered callouts** | How boxes, arrows and numbers are drawn, and when numbers are used. |
| **Space around a crop**, **Largest width in the docs** | How tightly to crop, and the widest an image should appear. |
| **Alt text length** | The most characters SudoDocs uses for an image's alt text. |
| **Always hide these elements** | CSS selectors (for example `.account-email`) covered on every screenshot. |
| **Also treat as private** | Text patterns of your own, such as account numbers. Emails, phone numbers, tokens and keys are always handled. |
| **Never screenshot these pages** | Page addresses SudoDocs must not capture; `*` matches anything. |
| **Your team's rules** | Anything else, in plain words. |

Click **Save screenshot style**. **Reset to default** clears your settings and rules; **Forget what was learned** removes what Auto-Learn picked up and keeps yours.

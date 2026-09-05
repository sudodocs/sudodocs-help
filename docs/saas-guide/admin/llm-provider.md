# Bring Your Own LLM Key (BYOK)

Enterprise organizations can bring their own API keys instead of using SudoDocs' platform Gemini key. Bring Your Own Key (BYOK) exists for data trust and residency: with BYOK configured, your organization's content is only ever sent to the vendor you chose, not to SudoDocs' own key.

The **Provider** tab (the first tab in the Admin Dashboard) has two independent settings - configuring one does not configure the other:

* **Text Generation**: powers drafting, editing, and all AI-generated content.
* **Embeddings & Search**: powers search, "Chat with Docs," and RAG context retrieval.

## Prerequisites

* An active SudoDocs Enterprise subscription.
* System Administrator privileges.
* An API key from your chosen provider(s).

## Text Generation

1. Navigate to the **Admin Dashboard** and select the **Provider** tab.
2. Under **Text Generation**, choose your **Provider**: Gemini, OpenAI, Claude, DeepSeek, or Custom (for any other OpenAI-compatible endpoint, such as a self-hosted vLLM/Ollama deployment or a third-party router like OpenRouter).
3. **Base URL**: (Custom only) Enter the full base URL of your OpenAI-compatible endpoint.
4. Enter the **Model Name** exactly as your provider identifies it (e.g. `claude-opus-5`, `gpt-5`, `deepseek-chat`). SudoDocs does not restrict this to a fixed list, since model names change frequently - use whatever your provider currently supports.
5. Paste your **API Key**.
6. Click **Save Configuration**.

## Embeddings & Search

1. On the same **Provider** tab, scroll to **Embeddings & Search**.
2. Choose your **Provider**: Gemini, OpenAI, Voyage AI, or Custom (for any other OpenAI-compatible embeddings endpoint).
3. **Base URL**: (Custom only) Enter the full base URL of your endpoint.
4. Enter the **Model Name** (e.g. `voyage-4`, `text-embedding-3-small`, `gemini-embedding-001`).
5. Paste your **API Key**.
6. Click **Save Configuration**.

> **Note**: Claude and DeepSeek aren't offered here - neither provider has an embeddings API. If you want your embeddings on a key other than the platform Gemini key, Voyage AI is worth a look: it's the provider Anthropic itself recommends for embeddings.

## How the two settings interact

* Until you configure **Text Generation**, your organization runs on the platform Gemini key for documentation generation, metered the same as the Pro plan. Once you save a configuration, generation switches to your key immediately and is no longer subject to the Pro credit limit.
* Until you configure **Embeddings & Search**, it independently runs on the platform Gemini key too - configuring Text Generation alone does not change this, and vice versa.
* If a configured key becomes invalid, rate-limited, or unreachable, the affected job fails with a clear error rather than silently falling back to the platform Gemini key - this is intentional, so your organization's trust boundary is never crossed without your knowledge.
* **Configure both settings before connecting your first repository.** Content is embedded for search the moment it's synced, using whatever's configured for Embeddings & Search at that time - repositories synced before you configure it will need to be re-synced afterward to pick up your chosen provider.

## Multi-modal Attachments

Image and video attachments (chat attachments, diagram-from-image, and similar features) are supported across all Text Generation providers. For a Custom endpoint, whether attachments work depends on that specific deployment's own vision support - SudoDocs cannot verify this in advance for a self-hosted or third-party endpoint you configure.

## See Also

* [CLI Tasks → Provider](../../cli-guide/admin/llm-provider.md) - configure BYOK from a script.

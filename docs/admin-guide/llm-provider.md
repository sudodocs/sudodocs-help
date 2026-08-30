# Configure Your Own LLM Provider (BYOK)

Enterprise organizations can bring their own LLM API key - OpenAI, Claude (Anthropic), DeepSeek, or any OpenAI-compatible endpoint (self-hosted or third-party) - instead of using SudoDocs' platform Gemini key. Bring Your Own Key (BYOK) is strictly an Enterprise feature, and exists for data trust and residency: with BYOK configured, your organization's content is only ever sent to the LLM vendor you chose, not to SudoDocs' own key.

## Prerequisites

* An active SudoDocs Enterprise subscription.
* System Administrator privileges.
* An API key from your chosen provider.

## Connect Your LLM Provider to SudoDocs

1. Navigate to the **Admin Dashboard** and select **LLM Provider**.
2. Choose your **Provider**: Gemini, OpenAI, Claude, DeepSeek, or Custom (for any other OpenAI-compatible endpoint, such as a self-hosted vLLM/Ollama deployment or a third-party router like OpenRouter).
3. **Base URL**: (Custom only) Enter the full base URL of your OpenAI-compatible endpoint.
4. Enter the **Model Name** exactly as your provider identifies it (e.g. `claude-opus-5`, `gpt-5`, `deepseek-chat`). SudoDocs does not restrict this to a fixed list, since model names change frequently - use whatever your provider currently supports.
5. Paste your **API Key**.
6. Click **Save Configuration**.

> **Note**: Until you configure a key, your organization continues to run on the platform Gemini key, metered the same as the Pro plan - there is no hard cutoff. Once you save a configuration, all documentation generation switches to your key immediately and is no longer subject to the Pro credit limit.

> **Note**: If your configured key becomes invalid, rate-limited, or unreachable, the affected job fails with a clear error rather than silently falling back to the platform Gemini key - this is intentional, so your organization's trust boundary is never crossed without your knowledge.

> **Note**: Embeddings used for search, RAG, and Chat with Docs always run on the platform Gemini key, regardless of your LLM Provider configuration - there is no cross-provider equivalent for the embedding model SudoDocs' knowledge base relies on.

## Multi-modal Attachments

Image and video attachments (chat attachments, diagram-from-image, and similar features) are supported across all providers. For a Custom endpoint, whether attachments work depends on that specific deployment's own vision support - SudoDocs cannot verify this in advance for a self-hosted or third-party endpoint you configure.

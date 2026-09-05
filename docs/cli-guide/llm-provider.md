# Bring Your Own LLM Key (BYOK)

CLI equivalent of [Admin Tasks → Provider](../admin-guide/llm-provider.md). Admin-only, and Enterprise-only, same as the Provider tab.

## Show Current Configuration

```bash
sudodocs admin llm-provider get
```

Prints `provider_type`, `base_url`, and `model_name` for both Text Generation and Embeddings & Search - never the API key.

## Configure Text Generation

```bash
sudodocs admin llm-provider set-generation \
  --provider-type claude \
  --model-name "claude-opus-5" \
  --api-key "sk-ant-..."
```

`--provider-type` is one of `gemini`, `openai`, `claude`, `deepseek`, `custom_openai_compatible` (add `--base-url` for the last one) - see [Text Generation](../admin-guide/llm-provider.md#text-generation).

## Configure Embeddings & Search

```bash
sudodocs admin llm-provider set-embeddings \
  --provider-type voyage \
  --model-name "voyage-4" \
  --api-key "pa-..."
```

`--provider-type` is one of `gemini`, `openai`, `voyage`, `custom_openai_compatible` - Claude and DeepSeek aren't offered here, neither has an embeddings API. See [Embeddings & Search](../admin-guide/llm-provider.md#embeddings--search).

As with the web form, these two commands are independent - running one doesn't touch the other. See [How the two settings interact](../admin-guide/llm-provider.md#how-the-two-settings-interact) for what happens before you configure either, and the re-sync requirement if you connect repositories before setting Embeddings & Search.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/admin/llm-provider` | GET | Both configs, key omitted. Wrapped by `sudodocs admin llm-provider get`. |
| `/admin/llm-provider/generation` | POST | `{"provider_type", "base_url", "api_key", "model_name"}`. Wrapped by `sudodocs admin llm-provider set-generation`. |
| `/admin/llm-provider/embeddings` | POST | Same shape. Wrapped by `sudodocs admin llm-provider set-embeddings`. |

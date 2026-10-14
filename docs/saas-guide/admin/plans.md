# Plans & Billing

SudoDocs has three plans - Free (Basic), Pro, and Enterprise - with Pro and Enterprise available monthly or annually. This page covers what each plan includes. For current prices, see the [pricing table on sudodocs.com](https://sudodocs.com/#pricing), which is the single authoritative source for plan prices.

## What Each Plan Includes

| | Free (Basic) | Pro | Enterprise |
|---|---|---|---|
| **Seats** | 1 (admin only) | 2, expandable with seat add-ons | 25, expandable with seat add-ons (up to 100) |
| **AI credits** | 100 / month | 500 / month (Pro Annual: 6,000 / year) | Unlimited with your own LLM key; 2,000 / month until one is configured |
| **Capture recording length** | 5 minutes | 10 minutes | 30 minutes |
| **LLM provider** | Platform Gemini key | Platform Gemini key | Platform Gemini key, or [bring your own key](llm-provider.md) |
| **Single Sign-On (SSO)** | - | - | ✅ |
| **CLI & Headless API** | - | - | ✅ |
| **Add-ons (seats, credit packs)** | - | ✅ | ✅ (credit packs only until you connect your own LLM key) |

Every plan, including Free, includes the core documentation tools: Author a Feature, Release Composer, Docflows (automated doc PRs), the OAS Validator & Fixer, the Universal Doc Converter, Chat with Docs, Git, Code, Jira, Slack and web source sync, and [SudoDocs Capture](../user/capture.md).

## What AI Actions Cost

Each AI action uses credits. A failed action gives its credits back.

| Action | Credits |
|---|---|
| [DocOps Assistant](../user/chat.md) question (Discuss) | 2 (3 with an attached image or video) |
| DocOps Assistant draft (Author, Rewrite, Release Note - written, then checked by SudoDocs' Editor) | 5 (6 with an attachment) |
| [Author a Feature](../user/feature-author.md) draft | 20 |
| [Docflows](../user/doc-drift.md) suggestion from a pull request or Jira ticket | 20 |
| Request changes on a Docflows suggestion, or mentioning SudoDocs on a docs pull request | 8 |
| Sync Latest Code | 5, or 8 when the Editor reviews an update |
| [Release Composer](../user/release-composer.md) draft / adding new items to it | 10 / 5 |
| [Universal Converter](../user/converter.md) reference page | 5 per 25,000 characters of the spec or values file (at least 5) |
| [API Readiness](../user/api-readiness.md) AI fix | 5 per 15,000 characters of the spec (at least 5) |
| API Readiness content audit | 3 |
| Repository sync | Free when nothing changed, 1 per 10 changed files, up to 20 - see [What a Sync Costs](connect-repos.md#what-a-sync-costs) |

The Converter and the AI fix are priced by size because the AI reads the whole file and writes output that grows with it - a typical 60,000-character spec costs 15 to convert and 20 to fix. [Capture](../user/capture.md#ai-credit-costs) and screenshots have their own costs, listed on their pages.

## Free Trial and the Basic Tier

Every new organization starts with a 14-day trial with no credit card required. After 14 days, the organization moves automatically to the permanent free Basic tier - it doesn't expire and nothing is deleted. Basic keeps the same feature set but is limited to a single admin seat, so inviting writers requires upgrading to Pro.

SSO, BYOK and the CLI are Enterprise-only and aren't included in the trial.

## Annual Billing

Pro and Enterprise can both be billed annually instead of monthly, at a discount equivalent to two months free. Pro Annual gives the same seats and features as Pro, with AI credits granted as a 6,000-credit yearly bucket instead of 500 per month.

## Add-ons

Organizations on Pro, Pro Annual or Enterprise can buy add-ons from the Admin Dashboard (**Organization** tab):

* **Seats**: one additional user seat per add-on, billed monthly. See [Users](users.md#expand-seat-limits).
* **Credit packs**: 250 additional AI credits per month, billed monthly.

The Free tier can't buy add-ons - upgrade to Pro first. On Enterprise, seats can be added beyond the included 25, up to 100 in total; for more, contact us. Credit packs add to Enterprise's 2,000 monthly credits until you [connect your own LLM key](llm-provider.md) - after that, credits are unlimited and credit packs aren't offered.

## Upgrade, Downgrade or Cancel

Upgrade from the **Upgrade** prompt in the app, or from the [pricing table](https://sudodocs.com/#pricing). Payments are processed by Paddle, so receipts, invoices and payment notices come from Paddle by email.

To cancel, see [Settings → Subscription Management](settings.md#subscription-management). You keep your paid features until the end of the current billing period. Refunds are covered by the [Refund Policy](https://sudodocs.com/refund).

---
title: AI-ready docs
description: Every published site comes with llms.txt, a Markdown copy of every page, copy buttons for ChatGPT and Claude, and an MCP server for AI tools.
---

# AI-ready docs

AI tools read documentation more and more. Every site Publish builds is ready for them, on every plan, with nothing to set up.

## `llms.txt` and Markdown copies

- `/llms.txt` is a short index of your site for AI tools. `/llms-full.txt` holds every page. Large sites also get one file per section.
- Every page has a Markdown copy: add `.md` to its address, or send `Accept: text/markdown`.
- API reference pages have Markdown copies too.
- A **Copy page** menu on each page copies the Markdown, or opens the page in ChatGPT or Claude.

## An MCP server

Each site has an MCP server at `/mcp` with three tools: **search_docs**, **get_page** and **list_pages**. The **Connect** panel on the site shows how to add it to Claude, Cursor and other clients. It works on versions and translations as well.

## Keep things out

Anything excluded from the site (see [Keep files out](navigation.md#keep-files-out-of-the-site)) is not in these files.

## Protected sites

On a [protected site](protected-docs.md) all of this is locked. An **access key** lets an AI tool or script read it: see [Access keys](protected-docs.md#access-keys-for-ai-tools-and-scripts).

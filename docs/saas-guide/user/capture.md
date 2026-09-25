# Capture

Capture is the **SudoDocs Capture** Chrome extension plus its dashboard - a way to turn what you actually do in a live product into something you can share with a link. It supports three different modes, each producing a different kind of result:

* **Interactive**: click through a workflow yourself; SudoDocs turns each click into a captioned step with an on-image hotspot.
* **Recording**: a continuous screen recording of the tab, with the tab's own audio and, optionally, your narration mixed in, Loom-style.
* **Screenshot**: one screenshot, annotated (arrows, boxes, highlights, text) and cropped in a built-in editor before upload.

All three live under **Capture** in the Workspace's **Global Tools**, and are captured entirely from the extension - not from this dashboard page, which is for editing, redacting, and sharing what you've already captured.

Capture has **no approval workflow**: every capture is shareable the moment it finishes, for all three modes. It's fully user-controlled - you own editing, redacting, and deleting whatever you captured directly, the same way you would any other file. AI still flags likely PII on Interactive and Screenshot captures so it's easy to spot (see [Redaction](#redaction) below), but nothing blocks on that flag - if you need to hide something, you redact it whenever you notice, not before anyone can see the capture at all.

## Install and Connect the Extension

1. Install **SudoDocs Capture** from the [Chrome Web Store](https://chromewebstore.google.com/detail/sudodocs-capture/kcjmfohocapknbkdnecfenjfibfidadk).
2. Click the new SudoDocs Capture icon in your toolbar, then **Connect to SudoDocs**. This opens a tab to approve the connection - confirm the code shown matches the popup, then **Approve**.
3. Back in the popup, click **I approved it - check again**.

This is a one-time setup. The extension links to your SudoDocs organization the same way `sudodocs login` links the CLI - a personal, revocable API key, shown in your account's API Keys settings labeled **SudoDocs Capture**.

If you're pointing the extension at a non-default SudoDocs deployment (a test instance, for example), set that first under the extension's **Options** page before connecting.

## Interactive: Click-Through Walkthroughs

1. Switch to the tab you want to capture, open the extension popup, and select **Interactive**.
2. Optional - give it a short title. Leave it blank and SudoDocs auto-names it for you (see [Auto-Naming](#auto-naming) below).
3. Optional - **Follow across tabs and windows**: off by default. With it on, the recording follows wherever you click next, even in a different tab or window, instead of staying pinned to the tab you started on. Leave it off if you don't want a stray click somewhere unrelated (checking email mid-recording) captured as a step.
4. Either click **Start** and use the product normally, **or** optionally click **Select Region** first to draw a rectangle constraining every step's screenshot to that area instead of the full tab - confirming the region starts the capture immediately, the same as clicking Start, so there's no separate Start click needed afterward. Either way, every click becomes a step, screenshot and all, and the recorder survives real page navigations and reloads.
5. Click **Finish** when done. AI captions each step and flags likely PII in the background; the capture appears in the Capture dashboard right away and is shareable immediately - editing continues to work for as long as the capture exists, there's no lock-out point.

### Auto-Naming

The title field is optional in every mode. Leave it blank and SudoDocs names it for you based on mode and how many captures of that mode your organization already has - e.g. **"Interactive Walkthrough 3"**, **"Screen Recording 12"**, **"Screenshot 1"**. This count is tracked server-side across your whole organization, not per person, so numbering stays correct even with several teammates capturing at once.

### Editing Steps

Anyone with edit permission (Walkthrough Auditor or System Administrator role) can, at any time:

* **Caption**: edit the AI-generated text and click **Save Caption**.
* **Hotspot**: a red box drawn on the screenshot. Drag it to reposition, drag its corner handle to resize - saves automatically. Steps with no hotspot yet show a **+ Add Hotspot** button; an existing one shows a small **×** handle in its corner to remove it entirely.
* **Redact**: see [Redaction](#redaction) below.
* **Move Up / Move Down / Delete Step**: reorder or remove individual steps.

## Redaction

Interactive and Screenshot mode both support redacting sensitive content directly on the stored image - an API key, a customer name, anything AI flagged or you noticed yourself:

1. Click **Draw Redaction**.
2. Drag a box over the area to hide.
3. Confirm - this **permanently** blacks out that area of the stored image; there's no undo.

The image updates in place immediately (no page reload) and a **Redacted** badge appears once at least one redaction has been applied. Interactive mode redacts per step; Screenshot mode redacts the one whole-image capture the same way.

Recording mode has no redaction control - there's no video editor to black out a region of a video after the fact, so review what's in frame before you start recording.

### AI PII Flagging

Interactive (per step) and Screenshot (the whole image) both get an automatic **⚠️ Possible PII** badge from AI - a real name, email address, API token/secret, or another user's data it noticed in the screenshot. It's advisory, not a gate: it doesn't block sharing, it just makes something worth redacting easy to spot in the sidebar and on the capture itself. Recording mode has no PII detection (matching its lack of a redaction tool - flagging something you can't act on wouldn't help).

## Voiceover, Video Export, and Embedding (Interactive mode)

Available as soon as an Interactive capture finishes - no approval needed, but **Generate/Regenerate Voiceover** and **Export Video** specifically require the Walkthrough Auditor or System Administrator role (the same role that gates editing steps - see [Editing Steps](#editing-steps) above):

* **Generate Voiceover**: narrates each step's caption using one of four AI voices - **Ava** (US, Female), **Andrew** (US, Male), **Sonia** (UK, Female), or **Ryan** (UK, Male). Once generated, each step gets an inline audio player to preview its narration right next to its caption. Pick a different voice and click **Regenerate Voiceover** at any time to replace every step's narration - there's no separate "include voiceover" toggle, export automatically narrates whatever's been generated and holds silently on any step that hasn't.
* **Export Video**: stitches every step into one downloadable `.mp4`, held on each frame for its voiceover's duration (or a fixed 3 seconds per step where there's none). A progress bar (with elapsed time, and percent-complete once per-step progress is available) shows above the buttons while either job runs, with a **Stop** button to cancel it - both action buttons gray out while a job is in flight so you can't start a second one against the same steps. Once it finishes, the video plays inline right there on the dashboard - it also keeps showing up on later visits, not just right after the export completes.
* **Export for Resolve/Premiere/Final Cut (FCPXML) / Export for Kdenlive**: builds an editable timeline project - each step's screenshot and voiceover as separate clips on the timeline, not a flattened video - for finishing in a real editor. Available to anyone with viewer access (System Administrator, Writer, or Walkthrough Auditor), a broader set than Voiceover/Export Video above.
* **Copy Embed Code** / **Preview Embed**: the `<iframe>` snippet for the interactive click-to-advance player (see [Sharing and Embedding](#sharing-and-embedding)) - **Preview Embed** expands an inline preview of exactly what that snippet renders, without leaving the dashboard.

## Recording: Narrated Screen Recordings

1. Select **Recording** in the popup, optionally give it a title (see [Auto-Naming](#auto-naming) above).
2. Optional - click **Allow microphone access** for narration. This is a one-time browser permission grant, and it's entirely skippable: a recording works fine with just the tab's own video and audio and no mic input at all, e.g. for capturing something already playing in the tab with no narration.
3. Optional - **Select Region** and **Follow across tabs and windows** work the same as in Interactive mode (see above). With following on, switching tabs or windows mid-recording doesn't cut the recording short - it's stitched into one continuous video across every tab/window you visited, even ones at different resolutions.
4. Click **Start**, narrate and act normally (if you granted mic access). **Pause**/**Resume** are available throughout.
5. Click **Stop**. The video uploads directly and is shareable the moment the upload finishes.

Recording length is capped by your plan: **5 minutes** on Basic, **10 minutes** on Pro (and Trial), **30 minutes** on Enterprise. A recording longer than your plan's limit is rejected at upload - stay under the cap, or upgrade for longer recordings. Uploaded recordings also have a flat 300MB file size cap.

## Editing a Recording: Trim, Replace Audio, and Export

A finished Recording-mode capture can be touched up from the Capture dashboard - no need to re-record for a rough start/end or a flubbed narration. **Trim** and **Replace Audio** both require the Walkthrough Auditor or System Administrator role, and only one of them can run at a time on a given recording:

* **Trim**: mark an in-point and out-point (**Mark A** / **Mark B**) against the video's own current playback position, then confirm. This is a single range, not a multi-cut timeline, and it's destructive - everything outside that range is discarded and the recording is overwritten in place, with no undo beyond re-uploading a fresh recording. Costs 5 credits.
* **Replace Audio**: swaps out the *entire* audio track - the original mic + tab audio, already mixed together - with new audio, either typed as a script (up to 5,000 characters) and narrated with AI voiceover, or a direct audio file upload. There's no way to replace just the narration and keep the tab's original sound. If the new audio is shorter than the video, the video is trimmed to match; if longer, the video's last frame holds for the difference. Costs 5 credits.
* **Export for Resolve/Premiere/Final Cut (FCPXML) / Export for Kdenlive**: same editable-timeline export offered for Interactive mode (see above) - the raw recording as an editable clip, for finishing in a real video editor. Available to anyone with viewer access (System Administrator, Writer, or Walkthrough Auditor), broader than the Trim/Replace Audio roles above. Screenshot mode has no timeline (it's a single still), so this export isn't offered there.

## Screenshot: Annotated Screenshots

1. Select **Screenshot** in the popup, optionally give it a title (see [Auto-Naming](#auto-naming) above). Either click **Capture Screenshot** directly, or optionally click **Select Region** first to draw a rectangle constraining the screenshot to just that area - confirming the region captures immediately, the same as clicking Capture Screenshot. Either way, this opens a new editor tab with the captured image.
2. In the editor, use the toolbar to mark up the image:
   * **Select** - click an existing annotation to select it, then drag to move it or use its handle to resize it.
   * **Arrow** / **Box** / **Highlight** (a translucent color, for drawing attention *to* something) / **Text** - drag or click to place, pick a color with the swatch.
   * **Crop** - drag a rectangle, and the canvas resizes to it. This clears other annotations already on the image, so crop first if you're using it.
   * **Undo** - steps back one annotation at a time.
3. Click **Save**. It's shareable the moment it uploads. AI flags likely PII on the image shortly after (see [Redaction](#redaction) above) - you can also redact it directly from the dashboard at any time.

## Cross-Tab and Window Following

The **Follow across tabs and windows** toggle (Interactive and Recording modes, off by default) is the one setting that changes what "the recording" actually covers:

* **Off** (default): pinned to the one tab you started on. Real page navigations and reloads of that tab are still followed; switching to a different tab or window is not.
* **On**: the capture follows your focus anywhere in the browser. For Interactive mode this just means the click listener moves with you. For Recording mode, since there's no way to redirect a single video stream to a different tab, a followed recording is actually several segments stitched into one video at upload time - segments from different tabs or window sizes are automatically normalized to a common resolution first, so the result still plays back as one clean video.

### Clicks Inside Embedded Content (Interactive mode)

A click inside an `<iframe>` embedded in the page you're capturing is handled based on whether that iframe is same-origin with the page or not:

* **Same-origin** (an iframe serving content from the same site): captured with a correctly positioned hotspot, same as any other click.
* **Cross-origin** (a genuinely third-party embed - a payment widget, an embedded viewer from another domain): the step is still captured - the screenshot and caption are correct either way - but without a precise hotspot marker for that one step. This is a hard browser security boundary, not a bug: a browser permanently blocks an embedded frame from a different origin from ever learning its own position on the page, for the same reason it blocks that frame from reading the rest of the page's content.

## Sharing and Embedding

Every capture, shareable the moment it finishes for all three modes, gets the same **Copy Embed Code** button, producing:

```html
<iframe src="https://<your-instance>/embed/capture/<id>" width="800" height="600" frameborder="0"></iframe>
```

Paste this into any page that allows iframes. The embed itself needs no login - it's a public link scoped to that one capture, and renders the right player automatically (the interactive click-through player for Interactive mode, a plain video player for Recording, a plain image for Screenshot). Use **Preview Embed** on the dashboard to see exactly what that snippet renders before copying it anywhere.

## AI Credit Costs

| Mode | Cost |
|---|---|
| Interactive | 1 credit per step (AI captioning + PII flag) |
| Interactive - Generate/Regenerate Voiceover | 5 credits, flat |
| Interactive - Export Video | 10 credits, flat |
| Interactive/Recording - Export for editor (FCPXML/Kdenlive) | Free |
| Recording | 3 credits, flat |
| Recording - Trim | 5 credits, flat |
| Recording - Replace Audio | 5 credits, flat |
| Screenshot | 3 credits, flat (upload) + 1 credit (AI PII flag) |

The base Recording charge is purely a usage throttle, not a pass-through AI cost - narration in a raw recording is your own real voice, with no AI work involved. Trim and Replace Audio are flat charges too, regardless of whether Replace Audio's new narration comes from an AI voiceover or an uploaded file. Screenshot mode's annotations are drawn locally in the editor too (no AI there either); the one extra credit is for the automatic PII flag described above.

## Availability

Capture is available on every plan, including the free Basic tier - it's not an Enterprise-exclusive feature. It's a browser-first tool by design (a Chrome extension plus a review dashboard) with no CLI or Headless API surface - a screen recording or an annotated screenshot has no terminal-friendly equivalent, so managing captures always happens here or in the extension, never from `sudodocs`.

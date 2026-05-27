# ElevenLabs Campaign Tracking Template

Use this sheet schema to track PartnerStack links, UTM usage, weekly campaign performance, and conversion signals for the EchoMedia.ai ElevenLabs launch.

## Recommended Sheet Location

Create the working sheet in the EchoMedia.ai operations workspace and link it from project notes:

```text
EchoMedia.ai / Growth / ElevenLabs Campaign Tracking
```

Keep this Markdown file in the repo as the canonical schema so the spreadsheet can be recreated or audited later.

## Campaign Columns

| Column | Purpose | Example |
| --- | --- | --- |
| Campaign ID | Stable internal identifier | EL-AUDIO-HUB-001 |
| Campaign Name | Human-readable name | AI Audio Hub Launch |
| Funnel | Which funnel the campaign supports | Foundation, Author, Creator, Business, EchoChamber |
| Landing Page | Destination route | /elevenlabs-ai-audio |
| CTA Label | Button/link copy | Try ElevenLabs |
| PartnerStack URL | Raw affiliate link | Paste official PartnerStack URL here |
| Final URL | PartnerStack URL plus UTM values | Generated manually or by sheet formula |
| UTM Source | Traffic source | echomedia-site |
| UTM Medium | Channel type | website, blog, email, linkedin |
| UTM Campaign | Campaign slug | elevenlabs-ai-audio-launch |
| UTM Content | CTA or placement identifier | hero-primary |
| Publish Date | Date placed live | 2026-05-27 |
| Owner | Responsible person | Shannon |
| Status | Draft, Live, Paused, Retired | Live |
| Notes | Operational notes | Replace with final PartnerStack link when available |

## Weekly Metrics Columns

| Column | Purpose |
| --- | --- |
| Week Starting | Monday date for reporting week |
| Campaign ID | Match to campaign table |
| Page Views | Landing page views |
| CTA Clicks | Clicks on the tracked CTA |
| Partner Clicks | Clicks leaving to ElevenLabs / PartnerStack |
| Lead Requests | Launch Kit or consult requests |
| Conversions | Confirmed signups or paid conversions if available |
| Revenue / Commission | Partner or service revenue tracked for that week |
| Conversion Notes | Qualitative notes, campaign changes, anomalies |

## Initial Campaign Rows

| Campaign ID | Campaign Name | Funnel | Landing Page | CTA Label | UTM Source | UTM Medium | UTM Campaign | UTM Content | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EL-AUDIO-HUB-001 | AI Audio Hub Hero | Foundation | /elevenlabs-ai-audio | Try ElevenLabs | echomedia-site | website | elevenlabs-ai-audio-launch | hub-hero-primary | Draft |
| EL-AUDIO-HUB-002 | AI Audio Workflow Consult | Foundation | /elevenlabs-ai-audio | Build My AI Audio Workflow | echomedia-site | website | elevenlabs-ai-audio-launch | hub-hero-consult | Draft |
| EL-LAUNCH-KIT-001 | AI Audio Launch Kit | Foundation | /ai-audio-launch-kit | Request the Kit | echomedia-site | website | ai-audio-launch-kit | launch-kit-primary | Draft |
| EL-AUTHOR-001 | Author Audiobook Workflow | Author | /audiobook-ai | Try ElevenLabs | echomedia-site | website | author-audiobook-ai | author-hero-elevenlabs | Draft |
| EL-AUTHOR-002 | Author Audio Prep Service | Author | /audiobook-ai | Book Author Audio Prep | echomedia-site | website | author-audiobook-ai | author-service-cta | Draft |

## Tracking Notes

- Replace placeholder PartnerStack URLs only after the official ElevenLabs partner link is available.
- Keep UTM slugs lowercase and hyphenated.
- Use one campaign row per CTA placement when placement-specific attribution matters.
- Track weekly metrics even when values are zero so launch history stays visible.
- Do not claim revenue until confirmed through PartnerStack, Stripe, invoice records, or another auditable source.

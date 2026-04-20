# AGENTS.md

## Purpose
- Keep the repo easy to change without re-learning the landing page structure every session.
- Prefer small composable modules over single large page files.

## Repo Best Practices
- Keep `apps/web/app/page.tsx` thin. It should compose feature or section components, not hold page data, SVG icon definitions, and full section markup inline.
- Store landing page copy and repeatable media metadata in `apps/web/app/components/landing/content.ts`.
- Keep reusable Tailwind UI primitives in `apps/web/app/components/landing/shared.tsx`.
- Keep inline SVGs in `apps/web/app/components/landing/icons.tsx`.
- Prefer one section component per major landing page block when a section has distinct layout or assets.
- When the design asset already contains the intended composition or text, use the asset directly instead of rebuilding redundant overlays in HTML.
- Preserve Tailwind-first styling. New layout or presentation work should stay in JSX class names unless there is a strong reason not to.
- Before replacing or cropping visual assets, inspect the supplied source images first so the live page uses the correct artwork.

## Landing Page Learnings
- The hero is asset-led on desktop: `hero.png` supplies the background/composition while `bs-vy.png` must be overlaid separately to preserve scale control.
- Several sections are intentionally image-led and should not be wrapped in extra white cards or duplicate headings.
- The quick-register panel uses a different child photo than the symptom section. The cropped asset lives at `apps/web/public/assets/quick-register-photo.jpg`.
- The press grid should present the supplied article images directly without extra frame wrappers.

## End-Of-Session Insight Routine
- At the end of every session, append one short practical insight to `docs/session-insights.md`.
- Keep the insight specific to a real mistake avoided, a reliable workflow, or a repo-specific layout fact.
- If a new recurring process would help future sessions, update this file and `docs/end-of-session-insight-task.md` in the same turn.

## Session Close Checklist
- Run the relevant verification command after structural edits.
- Note any new asset mapping or layout rule learned during the session.
- Append exactly one high-signal insight to `docs/session-insights.md` before wrapping up.

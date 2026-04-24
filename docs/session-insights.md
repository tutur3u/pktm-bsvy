# Session Insights

- 2026-04-20: Desktop hero composition depends on overlaying `bs-vy.png` on top of `hero.png`; using `hero.png` alone removes the doctor and breaks the mock immediately.
- 2026-04-20: For image-led landing sections, keep the desktop asset grid unchanged and add a separate mobile-only carousel wrapper instead of forcing one responsive layout to do both jobs.
- 2026-04-20: Mobile carousels with long image lists need capped indicator windows plus a current/total counter; rendering one dot per item breaks the control row on the press section.
- 2026-04-21: YouTube Shorts on this landing page should live in a dedicated post-hero section with a portrait ratio instead of being stretched into a wide embed that fights the asset-led layout.
- 2026-04-21: Desktop Shorts work better when the portrait video sits inside a deliberate phone-style frame and supporting layout, instead of a narrow standalone embed floating in whitespace.
- 2026-04-21: Contact/location changes belong in `landing/content.ts`; keeping the address and map URLs there lets the contact section gain embeds or external map actions without hardcoding clinic data in JSX.
- 2026-04-21: In the contact card, map actions work better as a compact header affordance above the embed; a big footer pill under the map reads like an unrelated CTA and pulls attention away from the form.
- 2026-04-21: When a landing asset pair includes a JPG background and a transparent PNG foreground, build the section from both layers and keep live copy in HTML so client feedback like “move the text off the image” stays easy to implement.
- 2026-04-22: Keep press screenshots image-led, but store each article URL and accessible label in `landing/content.ts` so the grid stays unchanged while links remain easy to update.
- 2026-04-22: Stacked uppercase Vietnamese headlines on this landing page read better with slightly relaxed leading; `leading-[0.98]` feels too tight once the copy spans three lines.
- 2026-04-22: When a CTA should land on the booking form, point the hash at the form itself and center-scroll that target; section-level anchors leave the fields too low in the viewport.
- 2026-04-22: The symptom-section CTA copy comes from `apps/web/app/components/landing/content.ts`; update that content module first before touching section markup for wording-only requests.
- 2026-04-24: `quickContacts` is only data until `FloatingQuickContacts` is mounted from the landing page; add new contact interactions through the shared button path so phone, Messenger, and Zalo stay consistent.
- 2026-04-24: The floating Zalo action should keep the QR dialog visible while also opening the direct `https://zalo.me/0838000644` link from `quickContacts` in a new tab.
- 2026-04-24: Baked-in hero contact icons need transparent hotspot anchors, while floating contact buttons should derive new-tab behavior from HTTP hrefs so Facebook opens separately and `tel:` stays in-place.

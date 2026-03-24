# Read it and Weep Website TODO

## Required Content Updates

- [ ] Update stream embed URL in `data/site-content.ts`:
  - Set `youtubeEmbedUrl` to a valid embed URL format:
    - `https://www.youtube.com/embed/VIDEO_ID`
- [ ] Update schedule in `data/schedule.json`:
  - Confirm final dates
  - Confirm heat names
  - Confirm start times
  - Confirm details text
- [ ] Update sponsor data in `data/site-content.ts`:
  - Replace placeholder sponsor names
  - Replace sponsor website URLs (use HTTPS)
  - Replace `logoPath` values to match final logos
- [ ] Add/replace sponsor logo files in `public/sponsors/`.

## Heat Replay Workflow (After Competition)

- [ ] For each heat in `data/site-content.ts` under `heatDownloads`:
  - Set `status` to `"available"`
  - Add `fileUrl` for the replay file
  - Update title/description if needed
- [ ] Verify each download button works and opens the correct file.

## Validation Before Publishing

- [ ] Run lint:
  - `npm run lint`
- [ ] Run production build:
  - `npm run build`
- [ ] Run locally and manually verify:
  - Stream section shows player when URL is set
  - Schedule order and wording are correct
  - Download cards show correct states
  - Sponsor logos and links are correct
  - Mobile and desktop layouts look good

## Optional Improvements

- [ ] Replace placeholder sponsor SVGs with official brand assets.
- [ ] Add final Open Graph image for social previews.
- [ ] Add fallback text link to YouTube channel/watch page under stream section.

## Event-Day Checklist

- [ ] Confirm livestream is active and embed URL still valid.
- [ ] Confirm all anchor navigation links work (`Stream`, `Schedule`, `Downloads`, `Sponsors`).
- [ ] Keep one person assigned to update replay links after each heat upload.

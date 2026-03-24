# Read it and Weep Stream Site

Official event website for the Read it and Weep Boulder Competition.

The site includes:

- Event title and intro
- Livestream section for YouTube iframe embed
- Editable schedule section
- Heat replay download cards
- Sponsor logo + link section

## Run Locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Content Management

### Update schedule

Edit [data/schedule.json](data/schedule.json) and adjust entries.

Each entry uses:

- `date`
- `time`
- `heat`
- `details`

### Add livestream iframe URL

Edit [data/site-content.ts](data/site-content.ts):

- Set `youtubeEmbedUrl` to a full YouTube embed URL.
- Keep format like `https://www.youtube.com/embed/VIDEO_ID`.

If no valid embed URL is set, the stream section shows a placeholder and TODO message.

### Publish heat downloads

Edit [data/site-content.ts](data/site-content.ts) in `heatDownloads`:

- Set `status` to `"available"`.
- Add `fileUrl` with your hosted replay file URL.

Cards without valid links remain disabled by design.

### Update sponsors

Edit [data/site-content.ts](data/site-content.ts) in `sponsors`:

- Update `name`
- Update `websiteUrl` (HTTPS preferred)
- Update `logoPath`

Drop logo files in [public/sponsors](public/sponsors).

## Security Notes

- External links use safe target/rel attributes.
- YouTube iframe accepts only approved YouTube embed hosts.
- HTTP response headers are configured in [next.config.ts](next.config.ts).

## Quality Checks

```bash
npm run lint
npm run build
```
# Read-It-And-Weep

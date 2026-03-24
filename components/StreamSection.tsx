type StreamSectionProps = {
  embedUrl: string;
  todoMessage: string;
};

function sanitizeEmbedUrl(embedUrl: string): string | null {
  if (!embedUrl) {
    return null;
  }

  try {
    const parsed = new URL(embedUrl);
    const allowedHosts = new Set(["www.youtube.com", "youtube.com", "www.youtube-nocookie.com", "youtube-nocookie.com"]);

    if (!allowedHosts.has(parsed.hostname)) {
      return null;
    }

    if (!parsed.pathname.startsWith("/embed/")) {
      return null;
    }

    return parsed.toString();
  } catch {
    return null;
  }
}

export function StreamSection({ embedUrl, todoMessage }: StreamSectionProps) {
  const safeEmbedUrl = sanitizeEmbedUrl(embedUrl);

  return (
    <section id="stream" aria-labelledby="stream-title" className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-slate-900/5 backdrop-blur sm:p-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id="stream-title" className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
          Live Stream
        </h2>
      </div>

      {safeEmbedUrl ? (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-inner">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={safeEmbedUrl}
              title="Read it and Weep livestream"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-100/70 p-8 text-center">
          <p className="text-base font-semibold text-slate-800">Stream is not linked yet.</p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">{todoMessage}</p>
        </div>
      )}
    </section>
  );
}

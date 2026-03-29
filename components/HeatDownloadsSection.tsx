"use client";

import type { HeatDownload } from "@/data/site-content";

type HeatDownloadsSectionProps = {

  downloads: readonly HeatDownload[];
};



type StreamReplay = {
  id: string;
  size: string;
  filename: string;
};



const archiveBaseUrl = "https://archive.org/download/maf_20260329";


const streamReplays: readonly StreamReplay[] = [
  { id: "MAF", size: "929.5 MB", filename: "MAF.mp4" },
  { id: "MAQ", size: "696.9 MB", filename: "MAQ.mp4" },
  { id: "MIF", size: "742.1 MB", filename: "MIF.mp4" },
  { id: "MIQ", size: "159.4 MB", filename: "MIQ.mp4" },
  { id: "WAF", size: "744.4 MB", filename: "WAF.mp4" },
  { id: "WAQ", size: "510.5 MB", filename: "WAQ.mp4" },
  { id: "WIF", size: "832.6 MB", filename: "WIF.mp4" },
  { id: "WIQ", size: "563.6 MB", filename: "WIQ.mp4" },
] as const;



export function HeatDownloadsSection({ downloads: _downloads }: HeatDownloadsSectionProps) {

  return (
    <section id="downloads" aria-labelledby="downloads-title" className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-slate-900/5 backdrop-blur sm:p-8">
      <h2 id="downloads-title" className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
        Heat Downloads
      </h2>
      <p className="mt-2 text-sm text-slate-600">Stream replays are hosted on Internet Archive.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {streamReplays.map((stream) => {
          const replayUrl = `${archiveBaseUrl}/${stream.filename}`;

          return (
            <article key={stream.id} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Ready</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{stream.id}</h3>
              <p className="mt-2 grow text-sm text-slate-600">
                <span className="font-semibold text-slate-700">File:</span> {stream.filename}
                <br />
                <span className="font-semibold text-slate-700">Size:</span> {stream.size}
              </p>

              <a className="mt-4 inline-flex items-center justify-center rounded-md bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700" href={replayUrl} target="_blank" rel="noopener noreferrer nofollow">
                Watch Replay
              </a>

              <p className="mt-2 text-xs text-slate-500">
                Opens in new tab. Click the three dots (⋮) in the video player to download.
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}


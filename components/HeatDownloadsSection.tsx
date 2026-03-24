"use client";

import { useMemo, useState } from "react";

import type { HeatDownload } from "@/data/site-content";

type HeatDownloadsSectionProps = {
  downloads: readonly HeatDownload[];
};

function isValidExternalHttpUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

export function HeatDownloadsSection({ downloads }: HeatDownloadsSectionProps) {
  const [selectedHeat, setSelectedHeat] = useState<string>("all");
  const [query, setQuery] = useState<string>("");

  const filteredDownloads = useMemo(() => {
    const loweredQuery = query.trim().toLowerCase();

    return downloads.filter((download) => {
      const matchesHeat = selectedHeat === "all" || download.title === selectedHeat;
      const searchable = `${download.title} ${download.description}`.toLowerCase();
      const matchesQuery = loweredQuery.length === 0 || searchable.includes(loweredQuery);
      return matchesHeat && matchesQuery;
    });
  }, [downloads, query, selectedHeat]);

  return (
    <section id="downloads" aria-labelledby="downloads-title" className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-slate-900/5 backdrop-blur sm:p-8">
      <h2 id="downloads-title" className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
        Heat Downloads
      </h2>
      <p className="mt-2 text-sm text-slate-600">Replay files will appear here after each heat is uploaded.</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700" htmlFor="heat-select">
          Select Heat
          <select
            id="heat-select"
            value={selectedHeat}
            onChange={(event) => setSelectedHeat(event.target.value)}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
          >
            <option value="all">All Heats</option>
            {downloads.map((download) => (
              <option key={download.title} value={download.title}>
                {download.title}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700" htmlFor="heat-query">
          Filter Text
          <input
            id="heat-query"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter by division, round, or keyword"
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDownloads.map((download) => {
          const isAvailable = download.status === "available" && download.fileUrl && isValidExternalHttpUrl(download.fileUrl);

          return (
            <article key={download.title} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{isAvailable ? "Ready" : "Coming Soon"}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{download.title}</h3>
              <p className="mt-2 grow text-sm text-slate-600">{download.description}</p>

              {isAvailable ? (
                <a
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                  href={download.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Download Replay
                </a>
              ) : (
                <button
                  className="mt-4 inline-flex items-center justify-center rounded-md border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500"
                  type="button"
                  disabled
                  aria-disabled="true"
                >
                  Upload Pending
                </button>
              )}
            </article>
          );
        })}
      </div>

      {filteredDownloads.length === 0 ? (
        <p className="mt-4 rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          No heats match this filter yet. Try resetting the dropdown to &quot;All Heats&quot; or clearing the text filter.
        </p>
      ) : null}
    </section>
  );
}

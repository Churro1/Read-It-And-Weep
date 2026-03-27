import { HeatDownloadsSection } from "@/components/HeatDownloadsSection";
import { HeroSection } from "@/components/HeroSection";
import { NameSubmissionSection } from "@/components/NameSubmissionSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { StreamSection } from "@/components/StreamSection";
import type { ScheduleEntry } from "@/components/types";
import scheduleData from "@/data/schedule.json";
import { siteContent } from "@/data/site-content";

const navigationLinks = [
  { href: "#stream", label: "Stream" },
  { href: "#schedule", label: "Schedule" },
  { href: "#downloads", label: "Downloads" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#name-submit", label: "Submit Name" },
] as const;

const schedule = scheduleData as ScheduleEntry[];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-site text-slate-900">
      <div className="site-grid-overlay" aria-hidden="true" />

      <header className="sticky top-0 z-30 border-b border-white/30 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <p className="font-display text-2xl tracking-wide text-white">Read it and Weep</p>
          <nav aria-label="Section navigation" className="flex flex-wrap justify-end gap-2 text-sm">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/30 px-3 py-1.5 font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:gap-10 sm:px-6 lg:px-8 lg:py-10">
        <HeroSection title={siteContent.eventTitle} subtitle={siteContent.eventSubtitle} />
        <StreamSection embedUrl={siteContent.youtubeEmbedUrl} todoMessage={siteContent.streamTodo} />
        <ScheduleSection schedule={schedule} />
        <SponsorsSection sponsors={siteContent.sponsors} />
        <HeatDownloadsSection downloads={siteContent.heatDownloads} />
        <NameSubmissionSection />
      </main>

      <footer className="relative z-10 border-t border-slate-200 bg-white/75 py-6 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-700 sm:px-6 lg:px-8">
          <p>Read it and Weep Boulder Competition. Hosted at Utah State University.</p>
          <p>Website built by Charlie Miner. Feel free to reach out! 
            <a href="charliejminer@gmail.com" className="ml-1 font-medium text-cyan-700 underline hover:text-cyan-900">
              charliejminer@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

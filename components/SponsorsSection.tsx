import type { Sponsor } from "@/data/site-content";

type SponsorsSectionProps = {
  sponsors: Sponsor[];
};

function hasSafeWebsiteUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  const sortedSponsors = [...sponsors].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const marqueeSponsors = [...sortedSponsors, ...sortedSponsors];

  return (
    <section id="sponsors" aria-labelledby="sponsors-title" className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-slate-900/5 backdrop-blur sm:p-8">
      <h2 id="sponsors-title" className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
        Thank You to Our Sponsors
      </h2>
      <p className="mt-2 text-sm text-slate-600">These partners help make Read it and Weep possible. Please visit and support them.</p>

      <div className="sponsor-marquee mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50/70 p-3">
        <ul className="sponsor-marquee-track flex w-max items-stretch gap-3">
          {marqueeSponsors.map((sponsor, index) => {
          const isSafeUrl = hasSafeWebsiteUrl(sponsor.websiteUrl);

          return isSafeUrl ? (
            <li key={`${sponsor.name}-${index}`} className="flex">
              <a
                href={sponsor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group flex w-48 shrink-0 flex-col rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                aria-label={`Visit ${sponsor.name}`}
              >
                <div className="flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-2">
                  <img src={`/Read-It-And-Weep${sponsor.logoPath}`} alt={`${sponsor.name} logo`} width={120} height={32} loading="lazy" className="h-auto w-auto object-contain" />                </div>
                <p className="mt-2 line-clamp-2 text-center text-xs font-semibold text-slate-800 transition-colors group-hover:text-cyan-900">
                  {sponsor.name}
                </p>
              </a>
            </li>
          ) : (
            <li key={`${sponsor.name}-${index}`} className="flex">
              <article className="flex w-48 shrink-0 flex-col rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <div className="flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-2">
                  <img src={`/Read-It-And-Weep${sponsor.logoPath}`} alt={`${sponsor.name} logo`} width={120} height={32} loading="lazy"className="h-auto w-auto object-contain"/>
                </div>
                <p className="mt-2 line-clamp-2 text-center text-xs font-semibold text-slate-700">{sponsor.name}</p>
              </article>
            </li>
          );
        })}
        </ul>
      </div>
    </section>
  );
}

type HeroSectionProps = {
  title: string;
  subtitle: string;
};

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section aria-labelledby="event-title" className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/85 p-8 shadow-lg shadow-slate-900/10 backdrop-blur sm:p-12">
      <div className="absolute -top-16 right-0 h-44 w-44 rounded-full bg-cyan-300/40 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 left-8 h-52 w-52 rounded-full bg-amber-300/35 blur-3xl" aria-hidden="true" />
      <p className="mb-3 inline-block rounded-full border border-slate-300 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
        Live Event Hub
      </p>
      <h1 id="event-title" className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg font-medium text-slate-700 sm:text-xl">{subtitle}</p>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
        Welcome to the official competition page for spectators, families, and athletes. Watch the livestream, follow the heat schedule,
        and download each replay once uploads are available.
      </p>
    </section>
  );
}

import type { ScheduleEntry } from "@/components/types";

type ScheduleSectionProps = {
  schedule: ScheduleEntry[];
};

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <section id="schedule" aria-labelledby="schedule-title" className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-slate-900/5 backdrop-blur sm:p-8">
      <h2 id="schedule-title" className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
        Schedule
      </h2>
      <p className="mt-2 text-sm text-slate-600">Times listed in local venue time. Times subject to change. These are best estimates as information becomes available.</p>

      <div className="mt-6 grid gap-4">
        {schedule.map((entry) => (
          <article key={`${entry.date}-${entry.time}-${entry.heat}`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-cyan-700">{entry.time}</p>
              <p className="text-sm font-semibold text-slate-500">{entry.date}</p>
            </div>
            <h3 className="mt-2 text-lg font-bold text-slate-900">{entry.heat}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">{entry.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

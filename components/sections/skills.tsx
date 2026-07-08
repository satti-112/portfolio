"use client";

import { Section } from "@/components/section";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { competencies, skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Tools of the trade"
        subtitle="A working command of the modern data-analytics stack — and a roadmap into AI and backend engineering."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={(i % 4) * 0.08}>
            <div className="glass h-full rounded-2xl p-5 transition-transform hover:-translate-y-1">
              <h3 className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                {cat.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Core competencies */}
      <div className="mt-16">
        <Reveal>
          <h3 className="text-center text-lg font-semibold">Core Competencies</h3>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 p-6 transition-colors hover:border-brand-400 dark:border-white/10">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-red-500 transition-transform group-hover:scale-x-100" />
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

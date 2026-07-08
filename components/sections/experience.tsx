"use client";

import { Section } from "@/components/section";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" className="bg-slate-50/60 dark:bg-white/[0.02]">
      <SectionHeading
        eyebrow="Professional Experience"
        title="Where I've applied it"
        subtitle="Real-world, industry-simulated data work — with more on the way."
      />

      <div className="mx-auto mt-14 max-w-3xl space-y-6">
        {experience.map((exp, i) => (
          <Reveal key={exp.role} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-brand-100 p-2.5 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-sm text-brand-600 dark:text-brand-400">{exp.org}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{exp.location}</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

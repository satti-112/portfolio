"use client";

import { Section } from "@/components/section";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" className="bg-slate-50/60 dark:bg-white/[0.02]">
      <SectionHeading eyebrow="Education" title="Academic journey" />

      <div className="mx-auto mt-14 max-w-3xl">
        <div className="relative border-l border-slate-200 pl-8 dark:border-white/10">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1} className="mb-10 last:mb-0">
              <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 ring-4 ring-white dark:ring-[#0a0a12]" />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 shrink-0 text-brand-500" size={20} />
                    <div>
                      <h3 className="font-semibold">{e.degree}</h3>
                      <p className="text-sm text-brand-600 dark:text-brand-400">{e.org}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300">
                    {e.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {e.detail}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
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
      </div>
    </Section>
  );
}

"use client";

import { Section } from "@/components/section";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { about, profile } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About Me" title="Data, made useful" />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            {about.summary}
          </p>
          <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">
            {about.narrative}
          </p>

          <div className="mt-8 rounded-2xl border border-brand-200/50 bg-brand-50/50 p-5 dark:border-brand-500/20 dark:bg-brand-500/5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Elevator pitch
            </p>
            <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-200">
              {profile.elevatorPitch}
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {about.facts.map((f) => (
              <div
                key={f.label}
                className="glass rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
              >
                <p className="text-3xl font-bold text-gradient">{f.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

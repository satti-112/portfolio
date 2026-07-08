"use client";

import { Section } from "@/components/section";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { careerGoals, researchInterests, services } from "@/lib/data";
import { Compass, Rocket, Sparkles } from "lucide-react";

const goalStages = [careerGoals.near, careerGoals.mid, careerGoals.long];

export function Focus() {
  return (
    <Section id="focus" className="bg-slate-50/60 dark:bg-white/[0.02]">
      <SectionHeading
        eyebrow="Research Interests & Career Goals"
        title="Where I'm headed"
        subtitle="A clear direction from data analytics today toward AI, machine learning, and backend engineering."
      />

      {/* Research interests */}
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <div className="glass rounded-2xl p-6">
          <h3 className="flex items-center gap-2 font-semibold">
            <Sparkles size={18} className="text-brand-500" /> Research Interests
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {researchInterests.map((r) => (
              <span
                key={r}
                className="rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-300"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Career roadmap */}
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {goalStages.map((stage, i) => (
          <Reveal key={stage.title} delay={i * 0.1}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
                <Compass size={16} />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {stage.title}
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {stage.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Services */}
      <Reveal className="mt-16">
        <h3 className="flex items-center justify-center gap-2 text-lg font-semibold">
          <Rocket size={18} className="text-brand-500" /> How I Can Help
        </h3>
      </Reveal>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-brand-400 dark:border-white/10">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

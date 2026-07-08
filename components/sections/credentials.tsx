"use client";

import { Section } from "@/components/section";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { achievements, certifications } from "@/lib/data";
import { Award, BadgeCheck, Trophy } from "lucide-react";

export function Credentials() {
  return (
    <Section id="certifications" className="bg-slate-50/60 dark:bg-white/[0.02]">
      <SectionHeading
        eyebrow="Certifications & Achievements"
        title="Credentials that back it up"
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {/* Certifications */}
        <div>
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
              <BadgeCheck size={20} className="text-brand-500" /> Certifications
            </h3>
          </Reveal>
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <div className="glass flex items-start gap-3 rounded-xl p-4 transition-transform hover:translate-x-1">
                  <Award size={18} className="mt-0.5 shrink-0 text-brand-500" />
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{c.issuer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
              <Trophy size={20} className="text-brand-500" /> Achievements
            </h3>
          </Reveal>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-xl border border-slate-200 p-5 transition-colors hover:border-brand-400 dark:border-white/10">
                  <div className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-red-500 transition-transform group-hover:scale-y-100" />
                  <p className="font-semibold">{a.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

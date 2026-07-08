"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Target,
  Lightbulb,
  Wrench,
  TrendingUp,
  X,
  ExternalLink,
} from "lucide-react";
import { Section } from "@/components/section";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { projects, type Project } from "@/lib/data";

const categoryColor: Record<Project["category"], string> = {
  "NLP / AI": "text-rose-600 bg-rose-500/10 dark:text-rose-400",
  "Data Analytics": "text-brand-600 bg-brand-500/10 dark:text-brand-400",
  "Business Intelligence": "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400",
};

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Work"
        title="Data Science & Analytics projects"
        subtitle="Each project is an end-to-end story — from a messy dataset to a decision-ready insight. Click any card for the full breakdown."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <button
              onClick={() => setActive(p)}
              className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-left transition-all hover:-translate-y-1.5 hover:border-brand-400 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${categoryColor[p.category]}`}
                >
                  {p.category}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {p.overview}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="rounded-md px-2 py-0.5 text-[11px] font-medium text-slate-400">
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-slate-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-2xl rounded-t-3xl bg-white p-6 shadow-2xl dark:bg-[#12121c] sm:rounded-3xl sm:p-8"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/5"
            >
              <X size={20} />
            </button>

            <span
              className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${categoryColor[project.category]}`}
            >
              {project.category}
            </span>
            <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{project.overview}</p>

            <div className="mt-6 space-y-5">
              <Block icon={Target} title="Problem" body={project.problem} />
              <Block icon={Lightbulb} title="Solution" body={project.solution} />

              <div>
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Wrench size={15} className="text-brand-500" /> Key features
                </p>
                <ul className="mt-2 space-y-1.5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <MiniBlock title="My role" body={project.role} />
                <MiniBlock title="Challenge" body={project.challenge} />
              </div>

              <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/60 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/5">
                <p className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  <TrendingUp size={15} /> Outcome
                </p>
                <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-300">
                  {project.outcome}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Tech stack</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Github size={16} /> View Code
              </a>
              <a
                href={project.demo || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5 ${
                  project.demo ? "" : "cursor-not-allowed opacity-50"
                }`}
              >
                <ExternalLink size={16} /> {project.demo ? "Live Demo" : "Demo coming soon"}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Target;
  title: string;
  body: string;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-semibold">
        <Icon size={15} className="text-brand-500" /> {title}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {body}
      </p>
    </div>
  );
}

function MiniBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {title}
      </p>
      <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{body}</p>
    </div>
  );
}

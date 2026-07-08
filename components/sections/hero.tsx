"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, socials } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-16"
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] dark:bg-brand-600/25" />
        <div className="absolute right-10 top-1/3 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />
      </div>

      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item} className="mb-6 flex justify-center">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">Muzammil Satti</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-xl text-lg font-medium text-slate-500 dark:text-slate-400"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {profile.heroIntro}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin size={16} className="text-brand-500" />
            {profile.location}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={profile.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.03] hover:bg-brand-500"
            >
              {profile.ctaPrimary.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center justify-center gap-4">
            {[
              { href: socials.github, icon: Github, label: "GitHub" },
              { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: socials.email, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg border border-slate-200 p-2.5 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:border-white/10 dark:text-slate-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

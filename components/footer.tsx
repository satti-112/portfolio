import { profile, socials } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono font-bold">
            <span className="text-gradient">Muzammil Satti</span>
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {profile.tagline}
          </p>
        </div>

        <div className="flex items-center gap-3">
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
              className="rounded-lg border border-slate-200 p-2 text-slate-500 transition-colors hover:border-brand-400 hover:text-brand-500 dark:border-white/10 dark:text-slate-400"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <p className="container mt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Muzammil Satti. Built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}

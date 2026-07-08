"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { profile, socials } from "@/lib/data";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // Default behaviour: opens the visitor's email client pre-filled.
  // To use EmailJS/Resend instead, replace handleSubmit with an API call
  // (see README → "Wiring the contact form").
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something with data"
        subtitle="Open to internships, entry-level, and graduate roles in Data, AI, and Python development — and always happy to talk shop."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-5">
        {/* Info */}
        <Reveal className="lg:col-span-2">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: socials.email },
              { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: profile.location, href: undefined },
            ].map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:translate-x-1">
                  <div className="rounded-xl bg-brand-100 p-3 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href}>
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}

            <div className="flex gap-3 pt-2">
              {[
                { href: socials.github, icon: Github, label: "GitHub" },
                { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-xl border border-slate-200 p-3 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:border-white/10 dark:text-slate-400"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                type="text"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5"
                placeholder="Tell me about the role or project…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.01] hover:bg-brand-500"
            >
              <Send size={16} /> Send Message
            </button>
            {sent && (
              <p className="text-center text-sm text-emerald-600 dark:text-emerald-400">
                Your email client should have opened — thanks for reaching out!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5"
      />
    </div>
  );
}

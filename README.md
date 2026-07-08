# Muzammil Satti — Portfolio

A modern, premium, recruiter-friendly portfolio built with **Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons**. Dark/light mode, fully responsive, SEO-ready.

**Live:** _add your Vercel URL here after deploying_

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build (also runs type-checking)
npm start        # serve the production build
```

> Node 18.17+ is required (Node 20/22 recommended). The build fetches Google Fonts, so the first `build`/`dev` needs internet access.

---

## Editing your content

**Everything lives in one file: `lib/data.ts`.** Change text there and the whole site updates — no need to touch components.

| Want to change… | Edit in `lib/data.ts` |
|---|---|
| Name, headline, pitch, email, phone | `profile` |
| GitHub / LinkedIn / email links | `socials` |
| About paragraphs, stats | `about` |
| Education timeline | `education` |
| Skill groups | `skillCategories` |
| Core competencies | `competencies` |
| Experience | `experience` |
| Projects (add GitHub/demo links here) | `projects` |
| Certifications / achievements | `certifications`, `achievements` |
| Research interests, career roadmap, services | `researchInterests`, `careerGoals`, `services` |

### Placeholders to fill before launch
- **Project GitHub links** — each project currently points to your profile. Add the real repo URL in `projects[].github`.
- **Live demos** — add `projects[].demo` URLs where available (dashboards, notebooks, deployed apps). Empty = "Demo coming soon".
- **Resume PDF** — a copy of your CV is already at `public/Muzammil-Satti-Resume.pdf`. Replace it to update the download.
- **Site URL** — update `siteUrl` in `app/layout.tsx` and the URLs in `public/robots.txt` after deploying.
- **GitHub stats username** — set in `components/sections/github-stats.tsx` (currently `satti-112`).

---

## Folder structure

```
muzamil_portfolio/
├── app/
│   ├── globals.css        # Tailwind + theme tokens, utilities
│   ├── layout.tsx         # <html>, SEO metadata, fonts, ThemeProvider
│   └── page.tsx           # assembles all sections in order
├── components/
│   ├── navbar.tsx         # sticky nav + theme toggle + mobile menu
│   ├── footer.tsx
│   ├── scroll-top.tsx
│   ├── section.tsx        # section wrapper
│   ├── theme-provider.tsx # next-themes wrapper
│   ├── ui/
│   │   └── reveal.tsx     # scroll-reveal animation + SectionHeading
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── education.tsx
│       ├── skills.tsx      # technical skills + core competencies
│       ├── experience.tsx
│       ├── projects.tsx    # interactive cards + detail modal
│       ├── credentials.tsx # certifications + achievements
│       ├── github-stats.tsx
│       ├── focus.tsx       # research interests + career goals + services
│       └── contact.tsx
├── lib/
│   └── data.ts            # ← all site content
├── public/                # favicon, resume, robots.txt
└── config files           # next, tailwind, tsconfig, postcss, eslint
```

### Component hierarchy

```
RootLayout (ThemeProvider)
└── Home (page.tsx)
    ├── Navbar
    ├── Hero
    ├── About
    ├── Education
    ├── Skills  ─ (SkillCategory card ×8, Competency card ×6)
    ├── Experience
    ├── Projects ─ ProjectCard ×N → ProjectModal
    ├── Credentials ─ Certification row ×N, Achievement card ×N
    ├── GithubStats
    ├── Focus ─ Research chips, Roadmap ×3, Service card ×3
    ├── Contact ─ Info panel + Form
    ├── Footer
    └── ScrollTop
```

---

## Deploying to Vercel (recommended)

1. Push this folder to a **GitHub repo**:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/satti-112/portfolio.git
   git push -u origin main
   ```
2. Go to **vercel.com → New Project → Import** your repo.
3. Vercel auto-detects Next.js. Click **Deploy** — no config needed.
4. After deploy, copy your URL and update `siteUrl` in `app/layout.tsx` and `public/robots.txt`, then push again.

**Alternatives:** Netlify (auto-detects Next.js) or GitHub Pages via `next export` (static — the contact mailto still works).

---

## Wiring the contact form (optional)

Out of the box the form opens the visitor's email client (mailto) — zero setup, works immediately. To collect submissions without that, use **EmailJS**:

1. `npm install @emailjs/browser`
2. Create a service + template at [emailjs.com](https://www.emailjs.com/) and copy the IDs into `.env.local` (see `.env.example`).
3. In `components/sections/contact.tsx`, replace the body of `handleSubmit` with:
   ```ts
   import emailjs from "@emailjs/browser";
   // ...
   await emailjs.send(
     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
     { from_name: form.name, from_email: form.email, message: form.message },
     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
   );
   ```

Prefer **Resend**? Create an `app/api/contact/route.ts` API route and `fetch("/api/contact")` from the form.

---

## Design system

| Token | Value |
|---|---|
| Base (dark) | `#0a0a12` |
| Accent | Indigo `#6366f1` → Violet `#8b5cf6` → Fuchsia `#d946ef` |
| Font (body/headings) | Inter |
| Font (mono/logo) | JetBrains Mono |
| Radius | `rounded-2xl` cards, `rounded-xl` controls |
| Motion | Framer Motion scroll-reveal, 0.55s ease-out |

All colours use Tailwind tokens + the `brand` scale in `tailwind.config.ts`, so re-theming is a one-line change.

---

## Performance & accessibility notes

- Next.js App Router + server components keep the JS bundle small; only interactive sections are client components.
- Fonts are self-hosted via `next/font` (no layout shift, no external requests at runtime).
- Images/badges are lazy-loaded.
- Semantic HTML, `aria-label`s on icon buttons, keyboard-navigable, and colour contrast tuned for both themes.
- Target Lighthouse 95+ across the board once deployed.

See **STRATEGY.md** for career, GitHub/LinkedIn, and portfolio-growth recommendations.

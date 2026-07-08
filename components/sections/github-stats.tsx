"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/section";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { socials } from "@/lib/data";
import { Github, GitFork, Star, Users, FolderGit2, AlertCircle } from "lucide-react";

const USERNAME = "satti-112";

type Stats = {
  repos: number;
  stars: number;
  forks: number;
  followers: number;
  following: number;
  languages: { name: string; pct: number }[];
};

// Colours for the language bar (cycles if there are more than defined).
const LANG_COLORS = ["#f59e0b", "#ea580c", "#ef4444", "#eab308", "#f97316", "#dc2626"];

export function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const user = await userRes.json();
        const repos: Array<{
          stargazers_count: number;
          forks_count: number;
          language: string | null;
          fork: boolean;
        }> = await reposRes.json();

        const owned = repos.filter((r) => !r.fork);
        const stars = owned.reduce((a, r) => a + (r.stargazers_count || 0), 0);
        const forks = owned.reduce((a, r) => a + (r.forks_count || 0), 0);

        // Language distribution from primary repo language.
        const counts: Record<string, number> = {};
        owned.forEach((r) => {
          if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
        });
        const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
        const languages = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, n]) => ({ name, pct: Math.round((n / total) * 100) }));

        if (!cancelled) {
          setStats({
            repos: user.public_repos ?? owned.length,
            stars,
            forks,
            followers: user.followers ?? 0,
            following: user.following ?? 0,
            languages,
          });
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const cards = stats
    ? [
        { icon: FolderGit2, label: "Public Repos", value: stats.repos },
        { icon: Star, label: "Total Stars", value: stats.stars },
        { icon: GitFork, label: "Total Forks", value: stats.forks },
        { icon: Users, label: "Followers", value: stats.followers },
      ]
    : [];

  return (
    <Section id="github">
      <SectionHeading
        eyebrow="GitHub Statistics"
        title="Building in public"
        subtitle="Live snapshots of my open-source activity, pulled straight from the GitHub API."
      />

      <Reveal className="mx-auto mt-12 max-w-4xl">
        {loading && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="glass h-28 animate-pulse rounded-2xl"
                aria-hidden
              />
            ))}
          </div>
        )}

        {error && (
          <div className="glass flex flex-col items-center gap-3 rounded-2xl p-10 text-center">
            <AlertCircle className="text-brand-500" size={28} />
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Couldn&apos;t load live stats right now (GitHub API rate limit). View everything
              directly on my profile instead.
            </p>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              <Github size={16} /> Open GitHub Profile
            </a>
          </div>
        )}

        {stats && (
          <div className="space-y-6">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {cards.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-5 text-center transition-transform hover:-translate-y-1"
                >
                  <Icon className="mx-auto mb-2 text-brand-500" size={22} />
                  <p className="text-2xl font-bold text-gradient">{value}</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Top languages */}
            {stats.languages.length > 0 && (
              <div className="glass rounded-2xl p-6">
                <h3 className="mb-4 text-sm font-semibold text-brand-600 dark:text-brand-400">
                  Most Used Languages
                </h3>
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                  {stats.languages.map((l, i) => (
                    <div
                      key={l.name}
                      style={{
                        width: `${l.pct}%`,
                        backgroundColor: LANG_COLORS[i % LANG_COLORS.length],
                      }}
                      title={`${l.name} ${l.pct}%`}
                    />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {stats.languages.map((l, i) => (
                    <span
                      key={l.name}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: LANG_COLORS[i % LANG_COLORS.length] }}
                      />
                      {l.name} <span className="text-slate-400">{l.pct}%</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 text-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
          >
            <Github size={16} /> Explore my repositories
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

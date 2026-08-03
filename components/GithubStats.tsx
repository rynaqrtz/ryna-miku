import React, { useEffect, useRef, useState } from 'react';
import { motion as m, useInView } from 'framer-motion';
import { FolderGit2, Star, Users, History, Github, ExternalLink } from 'lucide-react';
import { GITHUB_USERNAME } from '../constants';
import { useCountUp } from '../hooks/useCountUp';

const motion = m as any;

interface GithubRepo {
  name: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  language: string | null;
}

interface GithubUser {
  public_repos: number;
  followers: number;
  html_url: string;
}

interface GithubData {
  user: GithubUser;
  totalStars: number;
  topRepo: GithubRepo | null;
  latestRepo: GithubRepo | null;
}

const formatRelativeTime = (dateString: string): string => {
  const diffMs = Date.now() - new Date(dateString).getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return 'hari ini';
  if (diffDays === 1) return 'kemarin';
  if (diffDays < 30) return `${diffDays} hari lalu`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) return `${diffMonths} bulan lalu`;
  return `${Math.floor(diffMonths / 12)} tahun lalu`;
};

const StatBox: React.FC<{ icon: React.ReactNode; label: string; value: number; isActive: boolean; suffix?: string }> = ({
  icon,
  label,
  value,
  isActive,
  suffix = '',
}) => {
  const count = useCountUp(value, isActive);
  return (
    <div className="flex flex-col items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] py-8 px-4 shadow-sm">
      <div className="text-zinc-900 dark:text-zinc-100">{icon}</div>
      <span className="text-2xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">
        {label}
      </span>
    </div>
  );
};

const GithubStats: React.FC = () => {
  const [data, setData] = useState<GithubData | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API request failed');

        const user: GithubUser = await userRes.json();
        const repos: GithubRepo[] = await reposRes.json();

        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const topRepo = repos.length
          ? repos.reduce((max, repo) => (repo.stargazers_count > max.stargazers_count ? repo : max), repos[0])
          : null;
        const latestRepo = repos.length ? repos[0] : null;

        setData({ user, totalStars, topRepo, latestRepo });
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-[9px] font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.8em] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 px-6 py-2.5 rounded-full shadow-sm">
              Live Data
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter mb-4 leading-[0.85]"
          >
            GitHub
          </motion.h2>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-bold transition-colors"
          >
            <Github size={16} /> @{GITHUB_USERNAME}
          </a>
        </div>

        {status === 'loading' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className="h-36 rounded-[2rem] bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 bg-[length:200%_100%] animate-shimmer"
              />
            ))}
          </div>
        )}

        {status === 'error' && (
          <p className="text-center text-sm text-zinc-400 font-medium">
            Data GitHub sedang tidak bisa dimuat. Coba lagi nanti.
          </p>
        )}

        {status !== 'error' && data && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              <StatBox
                icon={<FolderGit2 size={22} />}
                label="Total Repository"
                value={data.user.public_repos}
                isActive={isInView}
              />
              <StatBox
                icon={<Star size={22} />}
                label="Total Stars"
                value={data.totalStars}
                isActive={isInView}
              />
              <StatBox
                icon={<Users size={22} />}
                label="Followers"
                value={data.user.followers}
                isActive={isInView}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {data.topRepo && (
                <motion.a
                  href={data.topRepo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-[2.5rem] group hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Repo Terpopuler</p>
                    <ExternalLink size={16} className="opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <p className="text-xl font-black tracking-tight mb-2">{data.topRepo.name}</p>
                  <p className="flex items-center gap-2 text-sm font-bold opacity-70">
                    <Star size={14} className="fill-current" /> {data.topRepo.stargazers_count} stars
                  </p>
                </motion.a>
              )}

              {data.latestRepo && (
                <motion.a
                  href={data.latestRepo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] group hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] uppercase font-black tracking-widest text-zinc-400">Update Terbaru</p>
                    <History size={16} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                  </div>
                  <p className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">{data.latestRepo.name}</p>
                  <p className="text-sm font-bold text-zinc-400">{formatRelativeTime(data.latestRepo.updated_at)}</p>
                </motion.a>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GithubStats;

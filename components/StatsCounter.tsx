import React, { useRef } from 'react';
import { motion as m, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const motion = m as any;

interface StatItem {
  label: string;
  value: number | null;
  suffix: string;
  display?: string;
}

const STATS: StatItem[] = [
  { label: 'Umur', value: 15, suffix: '' },
  { label: 'Tahun Ngoding', value: 3, suffix: '+' },
  { label: 'Total Project', value: 7, suffix: '' },
  { label: 'Anime Ditonton', value: 120, suffix: '+' },
  { label: 'Baris Kode Ditulis', value: 50000, suffix: '+' },
  { label: 'Kopi Diminum', value: null, suffix: '', display: '∞' },
];

const StatCard: React.FC<{ stat: StatItem; index: number; isActive: boolean }> = ({ stat, index, isActive }) => {
  const count = useCountUp(stat.value, isActive);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] py-8 px-4 shadow-sm"
    >
      <span className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter tabular-nums">
        {stat.display ?? count}
        {stat.suffix}
      </span>
      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">
        {stat.label}
      </span>
    </motion.div>
  );
};

const StatsCounter: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="px-6 pb-24">
      <div className="container max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {STATS.map((stat, idx) => (
          <StatCard key={stat.label} stat={stat} index={idx} isActive={isInView} />
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;

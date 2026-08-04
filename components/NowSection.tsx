import React from 'react';
import { motion as m } from 'framer-motion';
import { Sparkle, ArrowRight } from 'lucide-react';
import { NOW_LEARNING } from '../constants';

const motion = m as any;

const NowSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, skewY: 2 }}
          whileInView={{ opacity: 1, scale: 1, skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-[3rem] p-10 md:p-16 overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-10 -right-10 opacity-[0.06] pointer-events-none select-none">
            <span className="font-jp text-[14rem] font-black">今</span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-white/10 dark:bg-zinc-900/10 flex items-center justify-center flex-shrink-0"
            >
              <Sparkle size={28} />
            </motion.div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.6em] opacity-50 mb-3 flex items-center gap-2">
                Sekarang Lagi <ArrowRight size={12} />
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-[0.95]">
                {NOW_LEARNING.title}
              </h2>
              <p className="text-sm md:text-base font-medium opacity-70 leading-relaxed max-w-xl">
                {NOW_LEARNING.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NowSection;

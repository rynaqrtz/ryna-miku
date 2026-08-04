import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const motion = m as any;

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          const jump = Math.floor(Math.random() * 8) + 1;
          return Math.min(prev + jump, 100);
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader-screen"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#0b0906] overflow-hidden transition-colors duration-500"
        >
          <div className="absolute inset-0 bg-grid-main opacity-20 dark:opacity-[0.08]" />

          <div className="relative z-10 flex flex-col items-center w-64">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-10 w-24 h-24 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-3 shadow-xl overflow-hidden"
            >
              <img
                src="https://cdn.zass.in/MoqV0lNVa3.jpg"
                alt="Logo"
                className="w-full h-full object-cover rounded-xl"
                width={96}
                height={96}
                decoding="async"
              />
            </motion.div>

            <div className="w-full space-y-4">
              <div className="flex justify-between items-end px-1">
                <span className="text-[9px] font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.4em]">Memulai Perjalanan</span>
                <span className="text-[12px] font-black text-zinc-900 dark:text-zinc-100">{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-zinc-900 dark:bg-zinc-100"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 font-jp text-[8px] font-black uppercase tracking-[0.6em] text-zinc-300 dark:text-zinc-700">
            BACKEND DEV • RYNA
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

import React, { useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const motion = m as any;

const CatSilhouette: React.FC = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
    <path
      d="M4 20 Q2 12 8 10 L6 4 L11 9 Q16 7 21 9 L26 4 L24 10 Q30 12 28 20 Q20 24 4 20 Z"
      className="fill-zinc-900/[0.07] dark:fill-zinc-100/[0.08]"
    />
    <circle cx="12" cy="14" r="1.2" className="fill-zinc-900/[0.15] dark:fill-zinc-100/[0.18]" />
    <circle cx="20" cy="14" r="1.2" className="fill-zinc-900/[0.15] dark:fill-zinc-100/[0.18]" />
    <path d="M28 18 Q36 18 38 8" strokeWidth="2" strokeLinecap="round" className="stroke-zinc-900/[0.07] dark:stroke-zinc-100/[0.08]" fill="none" />
  </svg>
);

const CatDecor: React.FC = () => {
  const [isWalking, setIsWalking] = useState(false);

  useEffect(() => {
    const scheduleNextWalk = () => {
      const delay = 18000 + Math.random() * 22000;
      return setTimeout(() => {
        setIsWalking(true);
        setTimeout(() => setIsWalking(false), 9000);
      }, delay);
    };

    let timer = scheduleNextWalk();
    const interval = setInterval(() => {
      clearTimeout(timer);
      timer = scheduleNextWalk();
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden pointer-events-none z-10">
      <AnimatePresence>
        {isWalking && (
          <motion.div
            initial={{ x: '-10vw' }}
            animate={{ x: '110vw' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 9, ease: 'linear' }}
            className="absolute bottom-0"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 0.4, ease: 'easeInOut' }}
            >
              <CatSilhouette />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatDecor;

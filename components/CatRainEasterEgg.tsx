import React, { useEffect, useMemo, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Cat } from 'lucide-react';

const motion = m as any;

const TRIGGER_WORD = 'meow';
const CAT_COUNT = 28;

interface FallingCat {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
}

const CatRainEasterEgg: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const cats = useMemo<FallingCat[]>(() => {
    return Array.from({ length: CAT_COUNT }, (_, id) => ({
      id,
      left: Math.random() * 100,
      size: 16 + Math.random() * 24,
      duration: 2.4 + Math.random() * 2,
      delay: Math.random() * 1.2,
      rotate: Math.random() * 360,
    }));
  }, [isActive]);

  useEffect(() => {
    console.log('%cPsst... coba ketik "meow" 🐱', 'font-weight:bold;font-size:13px;color:#8B6914;');

    let buffer = '';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-TRIGGER_WORD.length);
      if (buffer === TRIGGER_WORD) {
        setIsActive(true);
        buffer = '';
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (!isActive) return;
    const timer = setTimeout(() => setIsActive(false), 4500);
    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[550] pointer-events-none overflow-hidden"
        >
          {cats.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ y: '-10vh', opacity: 0, rotate: cat.rotate }}
              animate={{ y: '110vh', opacity: [0, 1, 1, 0], rotate: cat.rotate + 180 }}
              transition={{ duration: cat.duration, delay: cat.delay, ease: 'linear' }}
              className="absolute text-zinc-900 dark:text-zinc-100"
              style={{ left: `${cat.left}%` }}
            >
              <Cat size={cat.size} strokeWidth={2.5} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CatRainEasterEgg;

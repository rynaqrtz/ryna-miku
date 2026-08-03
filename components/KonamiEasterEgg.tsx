import React, { useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

const motion = m as any;

const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

const KonamiEasterEgg: React.FC = () => {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    let buffer: string[] = [];

    const handleKey = (e: KeyboardEvent) => {
      buffer.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
      buffer = buffer.slice(-KONAMI_SEQUENCE.length);

      if (buffer.length === KONAMI_SEQUENCE.length && buffer.every((key, idx) => key === KONAMI_SEQUENCE[idx])) {
        setIsTriggered(true);
        buffer = [];
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (!isTriggered) return;
    const timer = setTimeout(() => setIsTriggered(false), 5000);
    return () => clearTimeout(timer);
  }, [isTriggered]);

  return (
    <AnimatePresence>
      {isTriggered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsTriggered(false)}
          className="fixed inset-0 z-[600] flex items-center justify-center bg-zinc-950/80 backdrop-blur-md px-6 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.6, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="relative max-w-xs md:max-w-sm w-full"
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 text-yellow-400"
            >
              <Sparkles size={32} />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 text-yellow-400"
            >
              <Sparkles size={24} />
            </motion.div>

            <img
              src="https://cdn.zass.in/TvJ6gzhRIy.jpg"
              alt="Easter Egg — Quintessential Quintuplets"
              className="w-full rounded-[2.5rem] shadow-3xl border-4 border-white/20"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsTriggered(false);
              }}
              aria-label="Tutup"
              className="absolute -top-3 -right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center text-zinc-900 shadow-xl"
            >
              <X size={16} />
            </button>

            <p className="text-center text-white text-[10px] font-black uppercase tracking-[0.4em] mt-6">
              Kamu Menemukan Rahasia 🌸
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KonamiEasterEgg;

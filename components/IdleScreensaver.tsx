import React, { useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { useIdle } from '../hooks/useIdle';
import { WAIFU_GALLERY } from '../constants';

const motion = m as any;
const IDLE_TIMEOUT = 45000;
const SLIDE_INTERVAL = 4000;

const IdleScreensaver: React.FC = () => {
  const isIdle = useIdle(IDLE_TIMEOUT);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!isIdle) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % WAIFU_GALLERY.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isIdle]);

  return (
    <AnimatePresence>
      {isIdle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 z-[700] bg-zinc-950 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={slideIndex}
              src={WAIFU_GALLERY[slideIndex].url}
              alt={WAIFU_GALLERY[slideIndex].alt}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full object-contain md:object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.6em] text-white/50">
            Sentuh atau gerakkan untuk lanjut
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IdleScreensaver;

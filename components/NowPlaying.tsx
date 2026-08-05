import React from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Music2 } from 'lucide-react';
import { useSound } from '../context/SoundContext';
import { BGM_TITLE } from '../constants';

const motion = m as any;

const NowPlaying: React.FC = () => {
  const { isPlaying, isMuted } = useSound();
  const isVisible = isPlaying && !isMuted;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="flex md:hidden w-9 h-9 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 flex-shrink-0"
          >
            <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}>
              <Music2 size={13} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, width: 0 }}
            animate={{ opacity: 1, scale: 1, width: 'auto' }}
            exit={{ opacity: 0, scale: 0.9, width: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-2 px-3 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 overflow-hidden whitespace-nowrap"
          >
            <Music2 size={13} className="flex-shrink-0" />
            <span className="text-[9px] font-black uppercase tracking-widest">{BGM_TITLE}</span>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NowPlaying;

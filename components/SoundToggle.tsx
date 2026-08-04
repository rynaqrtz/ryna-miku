import React from 'react';
import { motion as m } from 'framer-motion';
import { VolumeX } from 'lucide-react';
import { useSound } from '../context/SoundContext';

const motion = m as any;

const BAR_DURATIONS = [0.6, 0.9, 0.75];

const SoundToggle: React.FC = () => {
  const { isMuted, isPlaying, toggleMute } = useSound();
  const showVisualizer = isPlaying && !isMuted;

  return (
    <button
      onClick={toggleMute}
      aria-label={isMuted ? 'Aktifkan suara' : 'Matikan suara'}
      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center"
    >
      {isMuted ? (
        <VolumeX size={16} className="text-zinc-400 dark:text-zinc-500" />
      ) : (
        <div className="flex items-end gap-[2.5px] h-4">
          {BAR_DURATIONS.map((duration, idx) => (
            <motion.span
              key={idx}
              className="w-[2.5px] rounded-full bg-zinc-900 dark:bg-zinc-100"
              animate={showVisualizer ? { height: ['30%', '100%', '45%', '80%', '30%'] } : { height: '30%' }}
              transition={showVisualizer ? { repeat: Infinity, duration, ease: 'easeInOut' } : { duration: 0.2 }}
            />
          ))}
        </div>
      )}
    </button>
  );
};

export default SoundToggle;

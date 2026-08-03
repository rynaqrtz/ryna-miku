import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../context/SoundContext';

const SoundToggle: React.FC = () => {
  const { isMuted, toggleMute } = useSound();

  return (
    <button
      onClick={toggleMute}
      aria-label={isMuted ? 'Aktifkan suara' : 'Matikan suara'}
      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center"
    >
      {isMuted ? (
        <VolumeX size={16} className="text-zinc-400 dark:text-zinc-500" />
      ) : (
        <Volume2 size={16} className="text-zinc-900 dark:text-zinc-100" />
      )}
    </button>
  );
};

export default SoundToggle;

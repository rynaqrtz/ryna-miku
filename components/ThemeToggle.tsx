import React, { useRef } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const motion = m as any;

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const docWithTransition = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
    const rect = buttonRef.current?.getBoundingClientRect();

    if (rect) {
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      document.documentElement.style.setProperty('--ripple-x', `${x}px`);
      document.documentElement.style.setProperty('--ripple-y', `${y}px`);
    }

    if (docWithTransition.startViewTransition) {
      document.documentElement.classList.add('theme-ripple-transition');
      const transition = docWithTransition.startViewTransition(() => toggleTheme());
      transition.ready.finally(() => {
        document.documentElement.classList.remove('theme-ripple-transition');
      });
    } else {
      toggleTheme();
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      aria-label="Ganti tema"
      className="relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <Moon size={16} className="text-zinc-100" />
          ) : (
            <Sun size={16} className="text-zinc-900" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;

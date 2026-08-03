import React, { useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const motion = m as any;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = () => setIsVisible(window.scrollY > 800);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] w-12 h-12 md:w-14 md:h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

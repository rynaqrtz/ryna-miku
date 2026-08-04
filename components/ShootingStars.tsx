import React, { useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const motion = m as any;

interface Star {
  id: number;
  top: number;
  left: number;
  length: number;
  duration: number;
}

const ShootingStars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    let nextId = 0;

    const spawnStar = () => {
      const star: Star = {
        id: nextId++,
        top: Math.random() * 40,
        left: Math.random() * 70,
        length: 90 + Math.random() * 60,
        duration: 1.1 + Math.random() * 0.8,
      };
      setStars((prev) => [...prev, star]);
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== star.id));
      }, star.duration * 1000 + 200);
    };

    const interval = setInterval(spawnStar, 4500 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {stars.map((star) => (
          <motion.span
            key={star.id}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: [0, 1, 1, 0], x: star.length * 2.2, y: star.length }}
            exit={{ opacity: 0 }}
            transition={{ duration: star.duration, ease: 'easeIn' }}
            className="absolute h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#d4a017] to-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.length}px`,
              transform: 'rotate(25deg)',
              transformOrigin: 'left center',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ShootingStars;

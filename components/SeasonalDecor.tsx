import React, { useMemo } from 'react';
import { motion as m } from 'framer-motion';

const motion = m as any;

type Season = 'sakura' | 'snow' | null;

const getSeason = (): Season => {
  const month = new Date().getMonth();
  if (month === 2 || month === 3) return 'sakura';
  if (month === 11) return 'snow';
  return null;
};

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

const PARTICLE_COUNT = 18;

const SeasonalDecor: React.FC = () => {
  const season = getSeason();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, id) => ({
      id,
      left: Math.random() * 100,
      size: season === 'sakura' ? 8 + Math.random() * 6 : 3 + Math.random() * 4,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 14,
      drift: (Math.random() - 0.5) * 120,
    }));
  }, [season]);

  if (!season) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{ y: '-10vh', x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: '110vh',
            x: particle.drift,
            opacity: [0, 0.7, 0.7, 0],
            rotate: 360,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={
            season === 'sakura'
              ? 'absolute rounded-tl-full rounded-tr-sm rounded-bl-sm rounded-br-full bg-pink-300/50 dark:bg-pink-200/30'
              : 'absolute rounded-full bg-white/70 dark:bg-white/40'
          }
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

export default SeasonalDecor;

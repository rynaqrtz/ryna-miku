import React, { useMemo } from 'react';

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
  opacity: number;
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
      opacity: season === 'sakura' ? 0.5 : 0.65,
    }));
  }, [season]);

  if (!season) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={
            season === 'sakura'
              ? 'absolute rounded-tl-full rounded-tr-sm rounded-bl-sm rounded-br-full bg-pink-300 dark:bg-pink-200 will-change-transform fall-particle'
              : 'absolute rounded-full bg-white will-change-transform fall-particle'
          }
          style={
            {
              left: `${particle.left}%`,
              width: particle.size,
              height: particle.size,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              '--particle-drift': `${particle.drift}px`,
              '--particle-opacity': particle.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default SeasonalDecor;

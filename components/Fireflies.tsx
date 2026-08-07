import React, { useMemo } from 'react';

interface Firefly {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

const FIREFLY_COUNT = 12;

const Fireflies: React.FC = () => {
  const fireflies = useMemo<Firefly[]>(() => {
    return Array.from({ length: FIREFLY_COUNT }, (_, id) => ({
      id,
      left: Math.random() * 100,
      top: 20 + Math.random() * 70,
      size: 2 + Math.random() * 2.5,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 6,
      driftX: (Math.random() - 0.5) * 80,
      driftY: (Math.random() - 0.5) * 60,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fireflies.map((firefly) => (
        <span
          key={firefly.id}
          className="absolute rounded-full bg-[#d4a017] dark:bg-[#f5d780] will-change-transform firefly-drift"
          style={
            {
              left: `${firefly.left}%`,
              top: `${firefly.top}%`,
              width: firefly.size,
              height: firefly.size,
              boxShadow: '0 0 6px 2px currentColor',
              animationDuration: `${firefly.duration}s`,
              animationDelay: `${firefly.delay}s`,
              '--firefly-x': `${firefly.driftX}px`,
              '--firefly-y': `${firefly.driftY}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default Fireflies;

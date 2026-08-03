import { useEffect, useState } from 'react';

export const useCountUp = (target: number | null, isActive: boolean, duration = 1400): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive || target === null) return;
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, target, duration]);

  return count;
};

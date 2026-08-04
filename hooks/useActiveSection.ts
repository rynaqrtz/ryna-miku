import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: string[], enabled: boolean, offset = 160): string => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return;

    let frameId: number | null = null;

    const computeActiveSection = () => {
      frameId = null;
      const anchorY = offset;
      let currentId = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= anchorY) {
          currentId = id;
        }
      }

      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (nearBottom) {
        currentId = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentId);
    };

    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = requestAnimationFrame(computeActiveSection);
    };

    computeActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [enabled, sectionIds, offset]);

  return activeSection;
};

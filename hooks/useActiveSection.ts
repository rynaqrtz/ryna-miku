import { useEffect, useRef, useState } from 'react';

export const useActiveSection = (sectionIds: string[], enabled: boolean, offset = 160): string => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');
  const offsetsRef = useRef<{ id: string; top: number }[]>([]);

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return;

    let frameId: number | null = null;

    const measureOffsets = () => {
      offsetsRef.current = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, top: el.offsetTop } : null;
        })
        .filter((entry): entry is { id: string; top: number } => entry !== null);
    };

    const computeActiveSection = () => {
      frameId = null;
      const anchorY = window.scrollY + offset;
      const offsets = offsetsRef.current;
      let currentId = sectionIds[0];

      for (const entry of offsets) {
        if (entry.top <= anchorY) {
          currentId = entry.id;
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

    const handleResize = () => {
      measureOffsets();
      handleScroll();
    };

    measureOffsets();
    computeActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [enabled, sectionIds, offset]);

  return activeSection;
};

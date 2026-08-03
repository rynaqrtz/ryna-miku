import React, { useEffect, useState } from 'react';
import { motion as m, useMotionValue, useSpring } from 'framer-motion';

const motion = m as any;

const CatCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 320, mass: 0.6 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouch(isTouchDevice);
    if (isTouchDevice || prefersReducedMotion) return;

    document.documentElement.classList.add('custom-cursor-active');

    const moveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const downHandler = () => setIsClicking(true);
    const upHandler = () => setIsClicking(false);

    const hoverInHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea')) {
        setIsHovering(true);
      }
    };
    const hoverOutHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mousedown', downHandler);
    window.addEventListener('mouseup', upHandler);
    window.addEventListener('mouseover', hoverInHandler);
    window.addEventListener('mouseout', hoverOutHandler);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mousedown', downHandler);
      window.removeEventListener('mouseup', upHandler);
      window.removeEventListener('mouseover', hoverInHandler);
      window.removeEventListener('mouseout', hoverOutHandler);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <motion.div
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.35 : 1,
          rotate: isClicking ? -8 : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <motion.path
            d="M9 10 L11 4 L15 9 Z"
            fill="#2d1f0e"
            animate={{ rotate: isHovering ? -6 : 0 }}
            style={{ transformOrigin: '11px 9px' }}
          />
          <motion.path
            d="M25 10 L23 4 L19 9 Z"
            fill="#2d1f0e"
            animate={{ rotate: isHovering ? 6 : 0 }}
            style={{ transformOrigin: '23px 9px' }}
          />
          <circle cx="17" cy="18" r="10" fill="#2d1f0e" />
          <motion.g animate={{ scaleY: isClicking ? 0.15 : 1 }} style={{ transformOrigin: '17px 17px' }}>
            <circle cx="13.5" cy="17" r="1.4" fill="#f5f0eb" />
            <circle cx="20.5" cy="17" r="1.4" fill="#f5f0eb" />
          </motion.g>
          <path d="M15.5 21 Q17 22.5 18.5 21" stroke="#f5f0eb" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M6 17 L1 15.5 M6 19 L1 19.5 M28 17 L33 15.5 M28 19 L33 19.5" stroke="#2d1f0e" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default CatCursor;

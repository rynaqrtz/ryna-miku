import React, { useEffect, useState } from 'react';
import { motion as m, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const motion = m as any;
const TOUCH_HIDE_DELAY = 500;

const CatCursor: React.FC = () => {
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const mainSpringConfig = { damping: 40, stiffness: 1000, mass: 0.4 };
  const x = useSpring(cursorX, mainSpringConfig);
  const y = useSpring(cursorY, mainSpringConfig);

  const trailSpringConfig = { damping: 30, stiffness: 260, mass: 0.6 };
  const trail1x = useSpring(x, trailSpringConfig);
  const trail1y = useSpring(y, trailSpringConfig);
  const trail2x = useSpring(trail1x, trailSpringConfig);
  const trail2y = useSpring(trail1y, trailSpringConfig);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouch(isTouchDevice);
    if (prefersReducedMotion) return;

    if (isTouchDevice) {
      let hideTimer: ReturnType<typeof setTimeout>;

      const touchMoveHandler = (e: TouchEvent) => {
        const touch = e.touches[0];
        if (!touch) return;
        cursorX.set(touch.clientX);
        cursorY.set(touch.clientY);
        setIsVisible(true);
        clearTimeout(hideTimer);
      };

      const touchStartHandler = (e: TouchEvent) => {
        setIsClicking(true);
        touchMoveHandler(e);
      };

      const touchEndHandler = () => {
        setIsClicking(false);
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => setIsVisible(false), TOUCH_HIDE_DELAY);
      };

      window.addEventListener('touchstart', touchStartHandler, { passive: true });
      window.addEventListener('touchmove', touchMoveHandler, { passive: true });
      window.addEventListener('touchend', touchEndHandler, { passive: true });
      window.addEventListener('touchcancel', touchEndHandler, { passive: true });

      return () => {
        clearTimeout(hideTimer);
        window.removeEventListener('touchstart', touchStartHandler);
        window.removeEventListener('touchmove', touchMoveHandler);
        window.removeEventListener('touchend', touchEndHandler);
        window.removeEventListener('touchcancel', touchEndHandler);
      };
    }

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

  const catColor = theme === 'dark' ? '#f5f0eb' : '#2d1f0e';
  const accentColor = theme === 'dark' ? '#0b0906' : '#f5f0eb';

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none w-1.5 h-1.5 rounded-full"
        style={{ x: trail2x, y: trail2y, translateX: '-50%', translateY: '-50%', backgroundColor: catColor }}
        animate={{ opacity: isVisible && !isTouch ? 0.15 : 0 }}
        transition={{ opacity: { duration: 0.3 } }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-2 h-2 rounded-full"
        style={{ x: trail1x, y: trail1y, translateX: '-50%', translateY: '-50%', backgroundColor: catColor }}
        animate={{ opacity: isVisible && !isTouch ? 0.3 : 0 }}
        transition={{ opacity: { duration: 0.3 } }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isVisible ? (isTouch ? 0.9 : 1) : 0, scale: isTouch ? 0.85 : 1 }}
        transition={{ opacity: { duration: 0.25 }, scale: { duration: 0.2 } }}
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
              fill={catColor}
              animate={{ rotate: isHovering ? -6 : 0 }}
              style={{ transformOrigin: '11px 9px' }}
            />
            <motion.path
              d="M25 10 L23 4 L19 9 Z"
              fill={catColor}
              animate={{ rotate: isHovering ? 6 : 0 }}
              style={{ transformOrigin: '23px 9px' }}
            />
            <circle cx="17" cy="18" r="10" fill={catColor} />
            <motion.g animate={{ scaleY: isClicking ? 0.15 : 1 }} style={{ transformOrigin: '17px 17px' }}>
              <circle cx="13.5" cy="17" r="1.4" fill={accentColor} />
              <circle cx="20.5" cy="17" r="1.4" fill={accentColor} />
            </motion.g>
            <path d="M15.5 21 Q17 22.5 18.5 21" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M6 17 L1 15.5 M6 19 L1 19.5 M28 17 L33 15.5 M28 19 L33 19.5" stroke={catColor} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CatCursor;

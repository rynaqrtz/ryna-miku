import React from 'react';
import { motion as m, useScroll, useSpring } from 'framer-motion';

const motion = m as any;

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[200] bg-gradient-to-r from-[#c4a882] via-[#8B6914] to-[#d4a017]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;

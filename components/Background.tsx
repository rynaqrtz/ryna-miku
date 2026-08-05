import React, { Suspense, lazy } from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const ShootingStars = lazy(() => import('./ShootingStars'));
const CatDecor = lazy(() => import('./CatDecor'));
const SeasonalDecor = lazy(() => import('./SeasonalDecor'));

const motion = m as any;

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-white dark:bg-[#0b0906] pointer-events-none transition-colors duration-500">
      <div className="absolute inset-0 bg-grid-main opacity-[0.25] dark:opacity-[0.08]" />

      <Suspense fallback={null}>
        <ShootingStars />
      </Suspense>
      <Suspense fallback={null}>
        <SeasonalDecor />
      </Suspense>

      <div className="absolute top-0 right-4 md:right-16 h-full flex flex-col justify-start pt-40 md:pt-64 font-jp opacity-[0.06] dark:opacity-[0.05] z-10">
        <motion.div style={{ y: y1 }} className="text-[12rem] md:text-[22rem] font-black leading-[0.85] flex flex-col text-zinc-900 dark:text-zinc-100">
          <span>魔</span>
          <span>女</span>
        </motion.div>
      </div>

      <div className="absolute top-1/3 left-4 md:left-16 h-full font-jp opacity-[0.04] dark:opacity-[0.04] z-10">
        <motion.div style={{ y: y2 }} className="text-[10rem] md:text-[18rem] font-black leading-[0.85] flex flex-col text-zinc-900 dark:text-zinc-100">
          <span>旅</span>
          <span>人</span>
        </motion.div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white dark:from-[#0b0906] via-white/40 dark:via-[#0b0906]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white dark:from-[#0b0906] via-white/40 dark:via-[#0b0906]/40 to-transparent" />
      </div>

      <Suspense fallback={null}>
        <CatDecor />
      </Suspense>
    </div>
  );
};

export default Background;

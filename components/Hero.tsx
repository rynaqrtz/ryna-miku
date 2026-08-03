import React, { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import { MapPin, GraduationCap, ChevronDown } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';

const motion = m as any;

const SCRAMBLE_CHARS = 'アイウエオカキクケコサシスセソ0123456789';
const TARGET_NAME = 'Ryna';

const useScrambleText = (target: string, trigger: boolean, duration = 900) => {
  const [text, setText] = useState(target.replace(/./g, ' '));

  useEffect(() => {
    if (!trigger) return;
    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const revealCount = Math.floor(progress * target.length);

      const nextText = target
        .split('')
        .map((char, idx) => {
          if (idx < revealCount) return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join('');

      setText(nextText);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setText(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [trigger, target, duration]);

  return text;
};

const Hero: React.FC = () => {
  const [startScramble, setStartScramble] = useState(false);
  const scrambledName = useScrambleText(TARGET_NAME, startScramble);

  useEffect(() => {
    const timer = setTimeout(() => setStartScramble(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 px-6">
      <div className="container max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center"
        >
          <div className="relative mb-10 md:mb-14">
            <div className="relative w-36 h-36 md:w-64 md:h-64 p-2 md:p-3 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-xl overflow-hidden will-change-transform">
              <ImageWithSkeleton
                src="https://cdn.zass.in/MoqV0lNVa3.jpg"
                alt="Ryna"
                loading="eager"
                containerClassName="w-full h-full rounded-full"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              className="absolute -inset-4 border border-dashed border-zinc-100 dark:border-zinc-800 rounded-full pointer-events-none"
            />
          </div>

          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.85] font-mono min-h-[1.1em]">
              {scrambledName}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg md:text-2xl text-zinc-400 font-medium max-w-2xl mx-auto"
            >
              Backend Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6"
            >
              <div className="flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest border border-zinc-100 dark:border-zinc-800 py-2.5 px-5 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm">
                <GraduationCap size={16} className="text-zinc-900 dark:text-zinc-100" />
                <span>SMKS TEXAR KARAWANG</span>
              </div>
              <div className="flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest border border-zinc-100 dark:border-zinc-800 py-2.5 px-5 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm">
                <MapPin size={16} className="text-zinc-900 dark:text-zinc-100" />
                <span>Karawang, ID</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="mt-16 md:mt-20 flex flex-col items-center gap-3 text-zinc-300 dark:text-zinc-700 cursor-pointer"
          onClick={() => {
            const el = document.getElementById('keahlian');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] font-black uppercase tracking-[0.5em]">Explore</span>
          <ChevronDown size={18} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

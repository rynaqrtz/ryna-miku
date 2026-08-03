import React, { useState } from 'react';
import { motion as m } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const motion = m as any;

interface OrbitRingProps {
  skills: Skill[];
  radius: number;
  duration: number;
  direction: 1 | -1;
  hoveredSlug: string | null;
  onHover: (slug: string | null) => void;
}

const OrbitRing: React.FC<OrbitRingProps> = ({ skills, radius, duration, direction, hoveredSlug, onHover }) => {
  return (
    <>
      <div
        className="absolute rounded-full border border-dashed border-zinc-200 dark:border-zinc-800"
        style={{
          width: `${radius * 2}%`,
          height: `${radius * 2}%`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: direction * 360 }}
        transition={{ repeat: Infinity, duration, ease: 'linear' }}
      >
        {skills.map((skill, idx) => {
          const angle = (idx / skills.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const left = 50 + radius * Math.cos(rad);
          const top = 50 + radius * Math.sin(rad);
          const isHovered = hoveredSlug === skill.slug;

          return (
            <div
              key={skill.slug}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                animate={{ rotate: -direction * 360 }}
                transition={{ repeat: Infinity, duration, ease: 'linear' }}
                className="relative"
                onMouseEnter={() => onHover(skill.slug)}
                onMouseLeave={() => onHover(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  animate={{ scale: isHovered ? 1.25 : 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-11 h-11 md:w-14 md:h-14 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center shadow-md cursor-pointer"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                    alt={skill.name}
                    className="w-5 h-5 md:w-7 md:h-7 object-contain"
                  />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-black uppercase tracking-widest bg-zinc-900 text-white px-3 py-1.5 rounded-full pointer-events-none"
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

const TechOrbit: React.FC = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const half = Math.ceil(SKILLS.length / 2);
  const innerSkills = SKILLS.slice(0, half);
  const outerSkills = SKILLS.slice(half);

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-[9px] font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.8em] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 px-6 py-2.5 rounded-full shadow-sm">
              Tech Stack
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter mb-6 leading-[0.85]"
          >
            Keahlian
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl mx-auto aspect-square"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-zinc-900 rounded-full flex items-center justify-center shadow-2xl z-10">
            <Code2 size={30} className="text-white" />
          </div>

          <OrbitRing
            skills={innerSkills}
            radius={26}
            duration={38}
            direction={1}
            hoveredSlug={hoveredSlug}
            onHover={setHoveredSlug}
          />
          <OrbitRing
            skills={outerSkills}
            radius={46}
            duration={55}
            direction={-1}
            hoveredSlug={hoveredSlug}
            onHover={setHoveredSlug}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechOrbit;

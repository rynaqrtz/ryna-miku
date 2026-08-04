import React from 'react';
import { motion as m } from 'framer-motion';
import { Star, Tv, BookOpen, Quote } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';

const motion = m as any;

const RATING = 8.09;
const RATING_PERCENT = (RATING / 10) * 100;

const AnimeSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-[0.02] font-jp text-[15rem] font-black select-none pointer-events-none">
        花嫁
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[30rem] flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-10 bg-white/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <ImageWithSkeleton
                src="https://cdn.zass.in/TvJ6gzhRIy.jpg"
                alt="Quintessential Quintuplets Movie Poster"
                containerClassName="w-full aspect-[2/3] rounded-[4rem] relative z-10"
                className="w-full h-full object-cover rounded-[4rem] shadow-3xl border-4 border-white/10"
              />
            </div>
          </motion.div>

          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-zinc-600 text-[11px] font-black tracking-[0.6em] uppercase mb-5 block">ANIME FAVORIT</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.85]">
                The Quintessential <br /><span className="text-zinc-500">Quintuplets Movie</span>
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-[10px] font-black uppercase tracking-widest">
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
                  <Tv size={16} /> MOVIE
                </span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
                  <BookOpen size={16} /> MANGA
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 1 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <span className="flex items-center gap-2">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> MyAnimeList Rating
                </span>
                <span className="text-white text-sm">{RATING.toFixed(2)} / 10</span>
              </div>
              <div className="h-2.5 w-full bg-white/5 border border-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${RATING_PERCENT}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative"
            >
              <Quote size={50} className="absolute -top-8 -left-10 text-white opacity-[0.03]" />
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-medium italic">
                Fuutarou Uesugi akhirnya menuai hasil kerja kerasnya sebagai tutor privat kelima kakak beradik Nakano. Nilai akademis kelima bersaudara itu terus meningkat, dan masing-masing semakin dekat dengan impian mereka. Namun, tampaknya Fuutarou telah menjadi lebih dari sekadar guru bagi para gadis itu, yang mendesaknya untuk segera menentukan perasaannya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl"
            >
              <video
                src="https://cdn.zass.in/NpPpjvhL3q.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video block"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:border-white/30 transition-all duration-500">
                <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">STUDIO</p>
                <p className="text-lg font-black tracking-tight">Bibury Animation</p>
              </div>
              <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:border-white/30 transition-all duration-500">
                <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">GENRE</p>
                <p className="text-lg font-black tracking-tight">COMEDY, ROMANCE</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnimeSection;

import React from 'react';
import { motion as m } from 'framer-motion';
import { Info, Calendar } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';

const motion = m as any;

const AboutWaifu: React.FC = () => {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div>
              <p className="text-zinc-400 text-[11px] font-bold tracking-[0.4em] uppercase mb-3">SEJAK 2019</p>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 leading-[0.9] tracking-tighter">
                Hanya Ada Satu Waifu: <br />
                <span className="text-zinc-400">Nakano Miku.</span>
              </h2>
            </div>

            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-base font-medium">
              Sempurna. Satu kata yang menggambarkan Miku sepenuhnya. Sejak pertama kali muncul di layar, Miku langsung mencuri perhatian dengan ketenangan dan keasliannya. Dia bukan yang paling vokal, tapi justru di situ letak kekuatannya — diam yang penuh makna, dan cinta yang diungkapkan lewat tindakan nyata.
            </p>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-10 space-y-8 shadow-xl shadow-zinc-100/50 dark:shadow-none">
              <h3 className="flex items-center gap-3 font-bold text-zinc-900 dark:text-zinc-100 uppercase text-[11px] tracking-widest">
                <Info size={16} /> DATA MIKU
              </h3>

              <div className="space-y-6">
                <div className="border-b border-zinc-50 dark:border-zinc-800 pb-5">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2 font-bold">BIOGRAPHICAL INFO</p>
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter">Nakano Miku</span>
                    <div className="text-right">
                      <span className="block text-[11px] font-bold text-zinc-400 font-jp">中野三玖</span>
                      <span className="block text-[9px] font-bold text-zinc-300 dark:text-zinc-600">Nakano Miku</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-bold">Alias</span>
                  <span className="text-[11px] text-zinc-900 dark:text-zinc-100 font-black uppercase">The Third Sister</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-bold">Ulang Tahun</span>
                  <span className="text-[11px] text-zinc-900 dark:text-zinc-100 font-black flex items-center gap-2 uppercase">
                    <Calendar size={14} /> 5 MEI
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-bold">Tinggi</span>
                  <span className="text-[11px] text-zinc-900 dark:text-zinc-100 font-black uppercase">159 → 165 CM</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-bold">Golongan Darah</span>
                  <span className="text-[11px] text-zinc-900 dark:text-zinc-100 font-black uppercase">A</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-3xl group">
              <ImageWithSkeleton
                src="https://cdn.zass.in/bkd4J2GPyI.jpg"
                alt="Nakano Miku"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-12 -left-12 text-[10rem] font-black font-jp text-zinc-900/[0.04] dark:text-zinc-100/[0.04] rotate-[-12deg] pointer-events-none select-none">
              三
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutWaifu;

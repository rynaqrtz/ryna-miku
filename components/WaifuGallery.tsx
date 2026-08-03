import React, { useCallback, useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { WAIFU_GALLERY } from '../constants';
import ImageWithSkeleton from './ImageWithSkeleton';

const motion = m as any;

const gridLayout = [
  'col-span-6 md:col-span-6 aspect-[9/16]',
  'col-span-6 md:col-span-6 aspect-[9/16]',
  'col-span-12 md:col-span-12 aspect-[16/9]',
  'col-span-12 md:col-span-4 aspect-[9/16]',
  'col-span-6 md:col-span-4 aspect-square',
  'col-span-6 md:col-span-4 aspect-square',
];

const WaifuGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + WAIFU_GALLERY.length) % WAIFU_GALLERY.length;
    });
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % WAIFU_GALLERY.length;
    });
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  return (
    <section className="py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-[9px] font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.8em] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 px-6 py-2.5 rounded-full shadow-sm">
              Collection
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter mb-6 leading-[0.85]"
          >
            三玖の記憶 <br />
            <span className="text-zinc-200">Nakano Miku</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {WAIFU_GALLERY.map((image, idx) => (
            <GalleryItem
              key={idx}
              image={image}
              index={idx + 1}
              className={gridLayout[idx]}
              onSelect={() => setSelectedIndex(idx)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-3xl"
            />

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full h-auto max-h-[90vh] bg-white dark:bg-zinc-900 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-zinc-100 dark:border-zinc-800 flex items-center justify-center"
            >
              <img
                src={WAIFU_GALLERY[selectedIndex].url}
                className="w-full h-full object-contain p-4 md:p-12"
                alt={WAIFU_GALLERY[selectedIndex].alt}
              />

              <button
                onClick={closeLightbox}
                aria-label="Tutup"
                className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-2xl z-50"
              >
                <X size={24} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Foto sebelumnya"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-900 dark:text-zinc-100 shadow-xl hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors z-50"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Foto berikutnya"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-900 dark:text-zinc-100 shadow-xl hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors z-50"
              >
                <ChevronRight size={22} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-zinc-400 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md px-4 py-2 rounded-full">
                {selectedIndex + 1} / {WAIFU_GALLERY.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const GalleryItem = ({ image, index, className, onSelect }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, duration: 1 }}
      style={{ perspective: 1200 }}
      className={`${className} relative group`}
    >
      <motion.div
        whileHover={{ y: -8 }}
        onClick={onSelect}
        className="w-full h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] md:rounded-[3.2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 smooth-corners relative cursor-pointer"
      >
        <ImageWithSkeleton
          src={image.url}
          alt={image.alt}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="flex flex-col gap-0.5">
            <span className="text-[7px] font-black text-white/40 uppercase tracking-[0.3em]">ARCHIVE</span>
            <span className="text-[10px] md:text-[12px] font-black text-white uppercase tracking-tight">Miku #{index}</span>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          aria-label="Lihat penuh"
          className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-zinc-900 dark:text-zinc-100 shadow-xl opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 z-30"
        >
          <Maximize2 size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WaifuGallery;

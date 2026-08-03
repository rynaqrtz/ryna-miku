import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Github, Globe, Phone, ArrowUpRight, Copy, Check } from 'lucide-react';
import { SOCIALS } from '../constants';

const motion = m as any;

const EMAIL = 'rynaqrtzdev@gmail.com';

const ContactCard: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <section className="py-40 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] dark:shadow-none group"
        >
          <div className="absolute bottom-[-5%] right-[-5%] p-16 opacity-[0.03] pointer-events-none select-none">
            <span className="font-jp text-[18rem] font-black text-zinc-900 dark:text-zinc-100">連絡</span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-24 items-center">
            <div className="flex-1 text-center md:text-left">
              <span className="text-zinc-400 text-[11px] font-black uppercase tracking-[0.8em] mb-8 block">KONEKSI</span>
              <h2 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-zinc-100 mb-12 leading-[0.85] tracking-tighter">
                Ayo Berteman <br /><span className="text-zinc-300 dark:text-zinc-700">Aku Baik 🗿.</span>
              </h2>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <motion.a
                  href={`mailto:${EMAIL}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-12 py-6 rounded-[2.5rem] font-black shadow-2xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all uppercase text-[10px] tracking-widest"
                >
                  Kirim Email
                </motion.a>

                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Salin email"
                  className="relative inline-flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 px-8 py-6 rounded-[2.5rem] font-black shadow-sm hover:border-zinc-900 dark:hover:border-zinc-500 transition-all uppercase text-[10px] tracking-widest"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isCopied ? 'copied' : 'copy'}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-2"
                    >
                      {isCopied ? <Check size={16} /> : <Copy size={16} />}
                      {isCopied ? 'Disalin' : 'Salin'}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </div>

              <AnimatePresence>
                {isCopied && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mt-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest"
                  >
                    Email disalin ke clipboard ✨
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="w-full md:w-80 space-y-5">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-7 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-[2rem] hover:border-zinc-900 dark:hover:border-zinc-500 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-500 group/item"
                >
                  <div className="flex items-center gap-5">
                    <div className="text-zinc-900 dark:text-zinc-100 group-hover/item:scale-110 transition-transform">
                      {social.icon === 'github' && <Github size={28} />}
                      {social.icon === 'globe' && <Globe size={28} />}
                      {social.icon === 'phone' && <Phone size={28} />}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-100">{social.name}</span>
                  </div>
                  <ArrowUpRight size={24} className="text-zinc-200 dark:text-zinc-700 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-100 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCard;

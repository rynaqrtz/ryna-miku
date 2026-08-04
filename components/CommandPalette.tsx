import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import {
  Search,
  Home,
  Wrench,
  Heart,
  Clapperboard,
  Github,
  Mail,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  CornerDownLeft,
  Sparkle,
  Copy,
  ArrowUp,
  ExternalLink,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useSound } from '../context/SoundContext';
import { GITHUB_USERNAME } from '../constants';

const motion = m as any;

const EMAIL = 'rynaqrtzdev@gmail.com';

interface CommandItem {
  id: string;
  label: string;
  group: string;
  icon: React.ReactNode;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { isMuted, toggleMute } = useSound();

  const commands: CommandItem[] = useMemo(
    () => [
      { id: 'beranda', label: 'Beranda', group: 'Navigasi', icon: <Home size={16} />, action: () => scrollToSection('beranda') },
      { id: 'keahlian', label: 'Keahlian', group: 'Navigasi', icon: <Wrench size={16} />, action: () => scrollToSection('keahlian') },
      { id: 'sekarang', label: 'Sekarang Lagi', group: 'Navigasi', icon: <Sparkle size={16} />, action: () => scrollToSection('sekarang') },
      { id: 'waifu', label: 'Waifu', group: 'Navigasi', icon: <Heart size={16} />, action: () => scrollToSection('waifu') },
      { id: 'anime', label: 'Anime', group: 'Navigasi', icon: <Clapperboard size={16} />, action: () => scrollToSection('anime') },
      { id: 'github-nav', label: 'GitHub Stats', group: 'Navigasi', icon: <Github size={16} />, action: () => scrollToSection('github') },
      { id: 'kontak', label: 'Kontak', group: 'Navigasi', icon: <Mail size={16} />, action: () => scrollToSection('kontak') },
      {
        id: 'theme',
        label: theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap',
        group: 'Aksi',
        icon: theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />,
        action: toggleTheme,
      },
      {
        id: 'sound',
        label: isMuted ? 'Putar Musik' : 'Hentikan Musik',
        group: 'Aksi',
        icon: isMuted ? <Volume2 size={16} /> : <VolumeX size={16} />,
        action: toggleMute,
      },
      {
        id: 'scroll-top',
        label: 'Kembali ke Atas',
        group: 'Aksi',
        icon: <ArrowUp size={16} />,
        action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      },
      {
        id: 'copy-email',
        label: 'Salin Email',
        group: 'Aksi',
        icon: <Copy size={16} />,
        action: () => {
          navigator.clipboard.writeText(EMAIL).catch(() => {});
        },
      },
      {
        id: 'open-github',
        label: 'Buka GitHub Profile',
        group: 'Aksi',
        icon: <ExternalLink size={16} />,
        action: () => window.open(`https://github.com/${GITHUB_USERNAME}`, '_blank', 'noopener,noreferrer'),
      },
    ],
    [theme, isMuted, toggleTheme, toggleMute]
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    return commands.filter((cmd) => cmd.label.toLowerCase().includes(query.toLowerCase()));
  }, [commands, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = filtered[activeIndex];
        if (selected) {
          selected.action();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, filtered, activeIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] flex items-start justify-center pt-24 md:pt-40 px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
              <Search size={18} className="text-zinc-400 flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari section atau aksi..."
                className="flex-1 bg-transparent outline-none text-sm font-medium text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
              />
              <kbd className="hidden md:block text-[9px] font-bold text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-md px-1.5 py-0.5">ESC</kbd>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="text-center text-xs text-zinc-400 py-8">Tidak ada hasil</p>
              )}
              {filtered.map((cmd, idx) => (
                <button
                  key={cmd.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-5 py-3 text-sm font-medium transition-colors ${
                    idx === activeIndex
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                      : 'text-zinc-600 dark:text-zinc-300'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {cmd.icon}
                    {cmd.label}
                  </span>
                  {idx === activeIndex && <CornerDownLeft size={14} />}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;

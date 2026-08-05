import React, { useState, useEffect, useCallback, useRef, Suspense, lazy } from 'react';
import Loader from './components/Loader';
import Background from './components/Background';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import ErrorBoundary from './components/ErrorBoundary';
import CatCursor from './components/CatCursor';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import SoundToggle from './components/SoundToggle';
import NowPlaying from './components/NowPlaying';
import NowSection from './components/NowSection';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { motion as m, AnimatePresence, MotionConfig } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { useActiveSection } from './hooks/useActiveSection';
import { CAT_RAIN_TRIGGER_EVENT } from './constants';

const TechOrbit = lazy(() => import('./components/TechOrbit'));
const AboutWaifu = lazy(() => import('./components/AboutWaifu'));
const WaifuGallery = lazy(() => import('./components/WaifuGallery'));
const AnimeSection = lazy(() => import('./components/AnimeSection'));
const GithubStats = lazy(() => import('./components/GithubStats'));
const ContactCard = lazy(() => import('./components/ContactCard'));
const Footer = lazy(() => import('./components/Footer'));
const CommandPalette = lazy(() => import('./components/CommandPalette'));
const KonamiEasterEgg = lazy(() => import('./components/KonamiEasterEgg'));
const CatRainEasterEgg = lazy(() => import('./components/CatRainEasterEgg'));
const IdleScreensaver = lazy(() => import('./components/IdleScreensaver'));

const motion = m as any;

const SectionFallback: React.FC = () => (
  <div className="w-full py-32 flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-zinc-200 dark:border-zinc-800 border-t-zinc-900 dark:border-t-zinc-100 animate-spin" />
  </div>
);

const SectionErrorFallback: React.FC = () => (
  <div className="w-full py-32 flex items-center justify-center px-6">
    <p className="text-zinc-400 dark:text-zinc-600 text-sm font-medium text-center">
      Bagian ini gagal dimuat. Coba muat ulang halaman.
    </p>
  </div>
);

const NAV_ITEMS = ['Beranda', 'Keahlian', 'Sekarang', 'Waifu', 'Anime', 'Github', 'Kontak'];
const SECTION_IDS = NAV_ITEMS.map((item) => item.toLowerCase());
const LOGO_TAP_COUNT = 5;
const LOGO_TAP_WINDOW = 3000;

const navigateWithTransition = (callback: () => void) => {
  const docWithTransition = document as Document & { startViewTransition?: (cb: () => void) => void };
  if (docWithTransition.startViewTransition) {
    docWithTransition.startViewTransition(callback);
  } else {
    callback();
  }
};

const AppShell: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS, !isLoading);
  const logoTapTimestamps = useRef<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  const handleNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigateWithTransition(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
    setIsMenuOpen(false);
  }, []);

  const handleLogoTap = useCallback(() => {
    const now = Date.now();
    logoTapTimestamps.current = [...logoTapTimestamps.current, now].filter((ts) => now - ts < LOGO_TAP_WINDOW);
    if (logoTapTimestamps.current.length >= LOGO_TAP_COUNT) {
      logoTapTimestamps.current = [];
      window.dispatchEvent(new CustomEvent(CAT_RAIN_TRIGGER_EVENT));
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 bg-white dark:bg-[#0b0906] overflow-x-hidden min-h-screen transition-colors duration-500">
      <ErrorBoundary>
        <CatCursor />
      </ErrorBoundary>
      <ScrollProgress />
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <KonamiEasterEgg />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <CatRainEasterEgg />
        </Suspense>
      </ErrorBoundary>
      {!isLoading && (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <IdleScreensaver />
          </Suspense>
        </ErrorBoundary>
      )}

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader-v2" isLoading={isLoading} />
        ) : (
          <motion.div
            key="main-v2"
            initial={{ clipPath: 'circle(0% at 50% 0%)', opacity: 0.4 }}
            animate={{ clipPath: 'circle(150% at 50% 0%)', opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Background />
            <motion.main
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-5xl">
                <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl border border-zinc-100 dark:border-zinc-800 rounded-full px-5 py-3 md:px-8 md:py-5 shadow-2xl flex items-center justify-between">
                  <button className="flex items-center gap-3" onClick={handleLogoTap} aria-label="Kembali ke atas">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-xl flex items-center justify-center p-1.5 shadow-sm">
                      <img src="https://cdn.zass.in/MoqV0lNVa3.jpg" alt="Logo" className="w-full h-full object-cover rounded-lg" width={48} height={48} decoding="async" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-black text-zinc-900 dark:text-zinc-100 tracking-tighter text-[11px] md:text-sm uppercase leading-none">Ryna</span>
                      <span className="hidden md:block text-[8px] font-black text-zinc-400 uppercase tracking-widest mt-1">Backend Developer</span>
                    </div>
                  </button>

                  <div className="hidden lg:flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">
                    {NAV_ITEMS.map((item) => {
                      const id = item.toLowerCase();
                      const isActive = activeSection === id;
                      return (
                        <a
                          key={item}
                          href={`#${id}`}
                          onClick={(e) => handleNavigation(e, id)}
                          className="relative py-1 transition-colors"
                        >
                          <span className={isActive ? 'text-zinc-900 dark:text-zinc-100' : 'hover:text-zinc-900 dark:hover:text-zinc-100'}>{item}</span>
                          {isActive && (
                            <motion.span
                              layoutId="nav-active-dot"
                              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-zinc-900 dark:bg-zinc-100"
                              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                          )}
                        </a>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                    <NowPlaying />
                    <button
                      onClick={() => setIsPaletteOpen(true)}
                      aria-label="Buka command palette"
                      className="flex items-center justify-center md:gap-2 w-9 h-9 md:w-auto md:px-3 md:h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-400"
                    >
                      <Command size={15} />
                      <span className="hidden md:inline text-[9px] font-black uppercase tracking-widest">K</span>
                    </button>
                    <SoundToggle />
                    <ThemeToggle />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2.5 bg-zinc-50 dark:bg-zinc-800 rounded-full border border-zinc-100 dark:border-zinc-700">
                      {isMenuOpen ? <X size={18} className="text-zinc-900 dark:text-zinc-100" /> : <Menu size={18} className="text-zinc-900 dark:text-zinc-100" />}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      className="absolute top-20 left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-10 shadow-2xl flex flex-col gap-6 text-center lg:hidden max-h-[70vh] overflow-y-auto"
                    >
                      {NAV_ITEMS.map((item) => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                          <a
                            key={item}
                            href={`#${id}`}
                            onClick={(e) => handleNavigation(e, id)}
                            className={`text-3xl md:text-4xl font-black tracking-tighter transition-colors ${isActive ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-300 dark:text-zinc-700'}`}
                          >
                            {item}
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>

              <div id="beranda">
                <ErrorBoundary fallback={<SectionErrorFallback />}>
                  <Hero />
                </ErrorBoundary>
                <ErrorBoundary fallback={<SectionErrorFallback />}>
                  <StatsCounter />
                </ErrorBoundary>
              </div>
              <div id="keahlian" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 900px' }}>
                <ErrorBoundary fallback={<SectionErrorFallback />}>
                  <Suspense fallback={<SectionFallback />}>
                    <TechOrbit />
                  </Suspense>
                </ErrorBoundary>
              </div>
              <div id="sekarang" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
                <ErrorBoundary fallback={<SectionErrorFallback />}>
                  <NowSection />
                </ErrorBoundary>
              </div>
              <div id="waifu" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 1200px' }}>
                <ErrorBoundary fallback={<SectionErrorFallback />}>
                  <Suspense fallback={<SectionFallback />}>
                    <AboutWaifu />
                  </Suspense>
                </ErrorBoundary>
                <ErrorBoundary fallback={<SectionErrorFallback />}>
                  <Suspense fallback={<SectionFallback />}>
                    <WaifuGallery />
                  </Suspense>
                </ErrorBoundary>
              </div>
              <div id="anime" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 900px' }}>
                <ErrorBoundary fallback={<SectionErrorFallback />}>
                  <Suspense fallback={<SectionFallback />}>
                    <AnimeSection />
                  </Suspense>
                </ErrorBoundary>
              </div>
              <div id="github" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 700px' }}>
                <ErrorBoundary fallback={<SectionErrorFallback />}>
                  <Suspense fallback={<SectionFallback />}>
                    <GithubStats />
                  </Suspense>
                </ErrorBoundary>
              </div>
              <div id="kontak" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 700px' }}>
                <ErrorBoundary fallback={<SectionErrorFallback />}>
                  <Suspense fallback={<SectionFallback />}>
                    <ContactCard />
                  </Suspense>
                </ErrorBoundary>
              </div>
              <ErrorBoundary fallback={null}>
                <Suspense fallback={null}>
                  <Footer />
                </Suspense>
              </ErrorBoundary>
            </motion.main>
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <SoundProvider>
          <AppShell />
        </SoundProvider>
      </ThemeProvider>
    </MotionConfig>
  );
};

export default App;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-zinc-100 dark:border-zinc-800 text-center">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-400">Terima Kasih</p>
          <div className="w-12 h-[1px] bg-zinc-100 dark:bg-zinc-800 mt-2" />
        </div>

        <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">
          &copy; 2026 - Ryna
        </p>

        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="flex items-center gap-3 text-[10px] font-jp text-zinc-400 font-medium">
            <span className="text-zinc-900 dark:text-zinc-100 font-bold">竜名の道</span>
            <span>( Jalan Milik Ryna )</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-jp text-zinc-300 dark:text-zinc-600 font-medium">
            <span className="text-zinc-400 font-bold">静かに、されど確かに</span>
            <span>( Diam, Namun Pasti )</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

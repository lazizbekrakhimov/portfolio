'use client';
import { useEffect, useState } from 'react';
import { greetings, languages, Lang } from '@/lib/i18n';

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const langs = Object.keys(languages) as Lang[];

  useEffect(() => {
    let i = 0;
    const cycle = () => {
      if (i >= langs.length) {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onDone, 600);
        }, 400);
        return;
      }
      setIndex(i);
      i++;
      setTimeout(cycle, i === 1 ? 500 : 320);
    };
    const t = setTimeout(cycle, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center"
      style={{
        background: 'var(--bg)',
        transition: 'opacity 0.6s ease',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative w-20 h-20">
          <img src="/logo.png" alt="LR" className="w-full h-full object-cover" style={{ filter: 'grayscale(0.2)' }} />
          <div className="absolute inset-0 border border-(--accent) opacity-40" style={{ transform: 'translate(4px, 4px)' }} />
        </div>

        <div className="text-center">
          <div
            className="font-display crt-glow"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', color: 'var(--fg)', lineHeight: 1 }}
          >
            {greetings[langs[index]]}
          </div>
          <div className="mt-2 text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>
            {langs[index].toUpperCase()}
            <span className="blink-cursor" />
          </div>
        </div>

        <div className="w-48 h-px" style={{ background: 'var(--border)' }}>
          <div
            className="h-full"
            style={{
              background: 'var(--accent)',
              width: `${((index + 1) / langs.length) * 100}%`,
              transition: 'width 0.3s ease',
              boxShadow: '0 0 8px var(--blue-glow)',
            }}
          />
        </div>

        <div className="text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>
          lazizbek.dev — loading
        </div>
      </div>

      <div className="absolute top-6 left-6 text-[0.55rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
        SYS_INIT
      </div>
      <div className="absolute top-6 right-6 text-[0.55rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
        v2026.1
      </div>
      <div className="absolute bottom-6 left-6 text-[0.55rem] tracking-widest" style={{ color: 'var(--muted)' }}>
        ©2026
      </div>
      <div className="absolute bottom-6 right-6 text-[0.55rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
        TKT / UZ
      </div>
    </div>
  );
}

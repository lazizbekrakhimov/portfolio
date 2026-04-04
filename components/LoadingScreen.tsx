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
          setTimeout(onDone, 800);
        }, 600);
        return;
      }
      setIndex(i);
      i++;
      setTimeout(cycle, i === 1 ? 700 : 500);
    };
    const t = setTimeout(cycle, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: 'var(--bg)', transition: 'opacity 0.8s ease', opacity: visible ? 1 : 0, pointerEvents: visible ? 'all' : 'none', overflow: 'hidden', }}  >

      <div className="relative z-10 flex flex-col items-center gap-10">
        <div className="text-center relative">
          <div className="font-display crt-glow relative" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', color: 'var(--fg)', lineHeight: 1, animation: 'flicker 1.5s infinite alternate', }}  >
            {greetings[langs[index]]}
          </div>
          <div style={{ position: 'absolute', top: 0, left: '-50%', width: '200%', height: '100%', background: 'linear-gradient(120deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.04) 100%)', transform: 'skewX(-20deg)', pointerEvents: 'none', animation: 'lightSweep 2s infinite' }} />
        </div>

        <div className="w-58 h-2 rounded overflow-hidden" style={{ background: 'var(--border)' }}>
          <div className="h-full rounded" style={{ width: `${((index + 1) / langs.length) * 100}%`, background: 'var(--accent)', boxShadow: '0 0 6px var(--accent33)', transition: 'width 0.5s ease, box-shadow 0.5s ease' }} />
        </div>
      </div>
    </div>
  );
}
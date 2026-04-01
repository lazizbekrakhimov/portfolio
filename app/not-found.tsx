'use client';
import { useEffect, useState } from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    document.documentElement.className = 'dark';
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ background: 'var(--bg)', color: 'var(--fg)' }} >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="vhs-line" />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px)'
      }} />

      <div className="relative z-10 text-center px-6">
        <div className={`font-display select-none ${glitch ? 'glitch' : ''}`} data-text="404" style={{ fontSize: 'clamp(8rem, 25vw, 20rem)', lineHeight: 0.85, color: 'var(--fg)', opacity: 0.08, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} >
          404
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center" style={{ border: '1px solid var(--accent)', background: 'var(--blue-dim)' }}>
            <AlertTriangle size={24} style={{ color: 'var(--accent)' }} />
          </div>
        </div>

        <h1 className="font-display crt-glow mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: 'var(--accent)' }} >
          SIGNAL LOST
        </h1>

        <p className="text-xl mb-10" style={{ color: 'var(--muted)', fontFamily: 'Space Mono' }}>
          This page does not exist in this dimension.
        </p>

        <a href="/" className="btn-accent inline-flex items-center gap-3">
          <ArrowLeft size={14} />
          Return to base
        </a>
      </div>
    </div>
  );
}

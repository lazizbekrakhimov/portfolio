'use client';
import { Terminal } from 'lucide-react';
import { Lang, t } from '@/lib/i18n';

export default function HeroSection({ lang }: { lang: Lang }) {
  const tr = t[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="absolute inset-0 pointer-events-none">
        {[20, 40, 60, 80].map(p => (
          <div
            key={p}
            className="absolute left-0 right-0 h-px"
            style={{ top: `${p}%`, background: 'var(--border)', opacity: 0.5 }}
          />
        ))}
      </div>

      <div className="vhs-line" style={{ top: 0 }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex items-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <Terminal size={12} style={{ color: 'var(--accent)' }} />
          <span className="text-[0.62rem] tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>
            {tr.role}
          </span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="stamp">2026</span>
        </div>

        <div className='flex flex-col justify-center items-center'>

          <div className="relative mb-4">
            <h1
              className="font-display glitch"
              data-text="lazizbek"
              style={{
                fontFamily: 'Brusher',
                fontSize: 'clamp(3rem, 13vw, 11rem)',
                lineHeight: 1.1,
                color: 'var(--fg)',
              }}
            >
              lazizbek
            </h1>
          </div>

          <div className="relative mb-4">
            <h1
              className="font-display glitch"
              data-text="rahimov"
              style={{
                fontFamily: 'Brusher',
                fontSize: 'clamp(3rem, 13vw, 11rem)',
                lineHeight: 1.1,
                color: 'var(--fg)',
              }}
            >
              rahimov
            </h1>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 animate-slide-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <div>
            <p className="text-sm tracking-wide max-w-sm" style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
              <span className="font-serif" style={{ fontSize: '1.1rem', color: 'var(--fg)' }}>
                "{tr.tagline}"
              </span>
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
              <span className="text-[0.62rem] tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                Available for work
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <a href="#projects" className="btn-accent">
              {tr.nav_projects} →
            </a>
            <a href="#contact" className="btn-retro">
              {tr.nav_contact}
            </a>
          </div>
        </div>

        <div
          className="mt-16 overflow-hidden border-t border-b py-2"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="ticker-inner">
            {['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Express', 'Node.js', 'PostgreSQL', 'React', 'MongoDB', 'Next.js', 'Nest.js', 'Git', 'Linux', 'Swagger', '●', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Express', 'Node.js', 'PostgreSQL', 'React', 'MongoDB', 'Next.js', 'Nest.js', 'Git', 'Linux', 'Swagger', '●'].map((item, i) => (
              <span
                key={i}
                className="mx-4 text-[0.6rem] tracking-widest uppercase"
                style={{ color: item === '●' ? 'var(--accent)' : 'var(--muted)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

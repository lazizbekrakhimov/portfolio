'use client';
import { Lang, t } from '@/lib/i18n';
import { MapPin, Code2, Calendar } from 'lucide-react';

export default function AboutSection({ lang }: { lang: Lang }) {
  const tr = t[lang];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
                01 / {tr.about_title}
              </span>
            </div>
            <h2
              className="font-display mb-8"
              style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, color: 'var(--fg)' }}
            >
              {tr.about_title}
            </h2>

            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--muted)', fontFamily: 'Space Mono' }}>
              {tr.about_text}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: 'Location', value: 'Tashkent, UZ' },
                { icon: Calendar, label: 'Experience', value: '3+ Years' },
                { icon: Code2, label: 'Focus', value: 'Full-Stack' },
                { icon: Code2, label: 'Availability', value: 'Open to work' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="retro-border p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={10} style={{ color: 'var(--accent)' }} />
                    <span className="text-[0.55rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>{label}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: 'var(--fg)' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="font-display crt-glow select-none"
              style={{
                fontSize: 'clamp(8rem, 20vw, 16rem)',
                color: 'var(--accent)',
                opacity: 0.06,
                lineHeight: 1,
                position: 'absolute',
                right: 0,
                top: -40,
              }}
            >
              LR
            </div>

            <div className="relative z-10 space-y-4 mt-8">
              <div
                className="retro-border p-5"
                style={{ background: 'var(--card)', fontFamily: 'Space Mono' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }} />
                  <span className="text-[0.55rem] ml-2 tracking-widest" style={{ color: 'var(--muted)' }}>developer.ts</span>
                </div>
                <div className="text-[0.7rem] leading-relaxed" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: '#1E90FF' }}>const</span>{' '}
                  <span style={{ color: 'var(--fg)' }}>lazizbek</span>{' '}
                  <span style={{ color: '#1E90FF' }}>=</span>{' '}{'{'}<br />
                  &nbsp;&nbsp;<span style={{ color: 'var(--fg)' }}>role</span>:{' '}
                  <span style={{ color: '#a8e6cf' }}>"Full-Stack Dev"</span>,<br />
                  &nbsp;&nbsp;<span style={{ color: 'var(--fg)' }}>city</span>:{' '}
                  <span style={{ color: '#a8e6cf' }}>"Tashkent"</span>,<br />
                  &nbsp;&nbsp;<span style={{ color: 'var(--fg)' }}>passion</span>:{' '}
                  <span style={{ color: '#a8e6cf' }}>"Clean Code"</span>,<br />
                  &nbsp;&nbsp;<span style={{ color: 'var(--fg)' }}>coffee</span>:{' '}
                  <span style={{ color: '#1E90FF' }}>true</span>,<br />
                  {'}'};
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3" style={{ border: '1px solid var(--border)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
                <span className="text-[0.62rem] tracking-widest uppercase" style={{ color: 'var(--fg)' }}>
                  Currently: Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

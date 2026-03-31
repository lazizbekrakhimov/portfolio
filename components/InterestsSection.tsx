'use client';
import { Lang, t } from '@/lib/i18n';
import { Music, Gauge, Radio } from 'lucide-react';

export default function InterestsSection({ lang }: { lang: Lang }) {
  const tr = t[lang];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
            03 / {tr.interests_title}
          </span>
        </div>
        <h2
          className="font-display mb-16"
          style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, color: 'var(--fg)' }}
        >
          {tr.interests_title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="interest-card retro-border p-8 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                background: 'radial-gradient(circle at 70% 30%, var(--accent) 0%, transparent 60%)',
              }}
            />
            <div
              className="absolute right-4 top-4 font-display select-none pointer-events-none"
              style={{ fontSize: '5rem', opacity: 0.04, color: 'var(--accent)', lineHeight: 1 }}
            >
              ♪
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ border: '1px solid var(--accent)', background: 'var(--blue-dim)' }}
                >
                  <Music size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div className="text-[0.55rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>Interest</div>
                  <div className="text-sm font-bold tracking-wide" style={{ color: 'var(--fg)' }}>Music</div>
                </div>
              </div>

              <div className="mb-6">
                <div
                  className="font-display crt-glow mb-1"
                  style={{ fontSize: '2.5rem', color: 'var(--accent)', letterSpacing: '0.05em' }}
                >
                  DAFT PUNK
                </div>
                <div className="text-[0.62rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
                  Favourite Artist — 1993–2021
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-3"
                style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
              >
                <Radio size={12} style={{ color: 'var(--accent)' }} />
                <div className="flex-1">
                  <div className="text-[0.62rem] tracking-wide" style={{ color: 'var(--fg)' }}>
                    Get Lucky / Harder Better Faster
                  </div>
                  <div className="mt-1 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: '62%',
                        background: 'var(--accent)',
                        boxShadow: '0 0 6px var(--accent)',
                        animation: 'pulse 2s ease-in-out infinite',
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-0.5 h-5">
                  {[3, 5, 8, 4, 7, 6, 3, 8, 5, 4].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: '2px',
                        height: `${h * 2}px`,
                        background: 'var(--accent)',
                        opacity: 0.7,
                        animation: `blink ${0.4 + i * 0.07}s ease-in-out infinite alternate`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Electronic', 'House', 'French Touch', 'Iconic'].map(tag => (
                  <span
                    key={tag}
                    className="text-[0.55rem] px-2 py-1 tracking-widest uppercase"
                    style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="interest-card retro-border p-8 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                background: 'radial-gradient(circle at 30% 70%, var(--accent) 0%, transparent 60%)',
              }}
            />
            <div
              className="absolute right-4 top-4 font-display select-none pointer-events-none"
              style={{ fontSize: '4rem', opacity: 0.04, color: 'var(--fg)', lineHeight: 1 }}
            >
              ◈
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ border: '1px solid var(--fg)', background: 'var(--card)' }}
                >
                  <Gauge size={16} style={{ color: 'var(--fg)' }} />
                </div>
                <div>
                  <div className="text-[0.55rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>Interest</div>
                  <div className="text-sm font-bold tracking-wide" style={{ color: 'var(--fg)' }}>Automobiles</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-[0.55rem] tracking-widest uppercase mb-1" style={{ color: 'var(--muted)' }}>
                  Currently obsessing over
                </div>
                <div
                  className="font-display"
                  style={{ fontSize: '2.8rem', color: 'var(--fg)', letterSpacing: '0.05em', lineHeight: 1 }}
                >
                  PORSCHE
                </div>
                <div className="text-[0.62rem] tracking-widest uppercase mt-1" style={{ color: 'var(--accent)' }}>
                  The purist choice ◈
                </div>
              </div>

              <div
                className="p-3 mb-4"
                style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
              >
                <div className="text-[0.55rem] tracking-widest uppercase mb-2" style={{ color: 'var(--muted)' }}>
                  Also loved
                </div>
                <div
                  className="font-display"
                  style={{ fontSize: '1.5rem', color: 'var(--muted)', letterSpacing: '0.05em' }}
                >
                  MERCEDES-BENZ
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Power', value: '500+ HP' },
                  { label: 'Drive', value: 'RWD' },
                  { label: 'Soul', value: '∞' },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-2" style={{ border: '1px solid var(--border)' }}>
                    <div className="text-[0.55rem] uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{label}</div>
                    <div className="text-sm font-bold" style={{ color: 'var(--fg)' }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

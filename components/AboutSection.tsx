'use client';
import { useRef, useEffect, useState } from 'react';
import { Lang, t } from '@/lib/i18n';
import { MapPin, Code2, Calendar, Briefcase, Coffee, Zap } from 'lucide-react';

const CodeLine = ({ delay, children }: { delay: number; children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-8px)', transition: 'all 0.35s ease', }}>
      {children}
    </div>
  );
};

const CountUp = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const total = 40;
    const step = () => {
      frame++;
      setCount(Math.round((frame / total) * end));
      if (frame < total) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function AboutSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [visible, setVisible] = useState(false);
  const [terminalActive, setTerminalActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setTerminalActive(true), 400);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const infoCards = [
    { icon: MapPin, label: 'Location', value: 'Tashkent, UZ' },
    { icon: Calendar, label: 'Experience', value: '1 Years' },
    { icon: Code2, label: 'Focus', value: 'Full-Stack' },
    { icon: Briefcase, label: 'Status', value: 'Open to work' },
  ];

  const stats = [
    { num: 5, suffix: '+', label: 'Projects' },
    { num: 1, suffix: '', label: 'Years exp' },
    { num: 10, suffix: '+', label: 'Technologies' },
    { num: 100, suffix: '%', label: 'Committed' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display mb-15" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, color: 'var(--fg)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.6s ease', }}  >
          {tr.about_title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-24px)', transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1) 0.15s', }} >
            <p className="text-mb leading-relaxed mb-10" style={{ color: 'var(--muted)', fontFamily: 'Space Mono', borderLeft: '2px solid var(--accent)', paddingLeft: '16px' }} >
              {tr.about_text}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {infoCards.map(({ icon: Icon, label, value }, i) => (
                <div key={label} className="retro-border p-4 group" style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: `all 0.5s ease ${0.2 + i * 0.07}s`, }} >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={10} style={{ color: 'var(--accent)' }} />
                    <span className="text-[0.62rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
                      {label}
                    </span>
                  </div>
                  <span className="text-lg font-bold tracking-wide" style={{ color: 'var(--fg)' }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-2" style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', }} >
              {stats.map(({ num, suffix, label }, i) => (
                <div key={label} className="text-center" style={{ opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${0.4 + i * 0.08}s`, }} >
                  <div className="font-display crt-glow" style={{ fontSize: '2rem', color: 'var(--accent)', lineHeight: 1 }} >
                    <CountUp end={num} suffix={suffix} />
                  </div>
                  <div className="text-[0.52rem] tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(24px)', transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1) 0.3s', }} >
          
            <div className="mb-4" style={{ background: '#0d0d0d', fontFamily: 'Space Mono', overflow: 'hidden' }} >
              <div style={{ background: '#1a1a1a', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid rgba(255,255,255,0.06)', }}>
                {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, flexShrink: 0 }} />
                ))}
                <span className='select-none' style={{ marginLeft: 8, fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
                  ~/lazizbek/developer.ts
                </span>
              </div>

              <div style={{ padding: '18px 30px', fontSize: '0.95rem', lineHeight: 2.2, color: 'rgba(245,240,232,0.45)' }}>
                {terminalActive && (
                  <>
                    <CodeLine delay={0}>
                      <span style={{ color: '#555' }}>// Lazizbek Rahimov</span>
                    </CodeLine>
                    <CodeLine delay={120}>
                      <span style={{ color: '#1E90FF' }}>const</span>{' '}
                      <span style={{ color: '#F5F0E8' }}>lazizbek</span>{' '}
                      <span style={{ color: '#1E90FF' }}>=</span>{' '}
                      <span style={{ color: 'rgba(245,240,232,0.4)' }}>{'{'}</span>
                    </CodeLine>
                    <CodeLine delay={240}>
                      &nbsp;&nbsp;<span style={{ color: '#C8A84B' }}>role</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>:</span>{' '}
                      <span style={{ color: '#a8e6cf' }}>"Full-Stack Developer"</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>,</span>
                    </CodeLine>
                    <CodeLine delay={360}>
                      &nbsp;&nbsp;<span style={{ color: '#C8A84B' }}>city</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>:</span>{' '}
                      <span style={{ color: '#a8e6cf' }}>"Tashkent, Uzbekistan"</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>,</span>
                    </CodeLine>
                    <CodeLine delay={480}>
                      &nbsp;&nbsp;<span style={{ color: '#C8A84B' }}>stack</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>:</span>{' '}
                      <span style={{ color: 'rgba(245,240,232,0.4)' }}>['</span>
                      <span style={{ color: '#1E90FF' }}>Next.js</span>
                      <span style={{ color: 'rgba(245,240,232,0.4)' }}>', '</span>
                      <span style={{ color: '#1E90FF' }}>NestJS</span>
                      <span style={{ color: 'rgba(245,240,232,0.4)' }}>', '</span>
                      <span style={{ color: '#1E90FF' }}>PostgreSQL</span>
                      <span style={{ color: 'rgba(245,240,232,0.4)' }}>']</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>,</span>
                    </CodeLine>
                    <CodeLine delay={600}>
                      &nbsp;&nbsp;<span style={{ color: '#C8A84B' }}>passion</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>:</span>{' '}
                      <span style={{ color: '#a8e6cf' }}>"Clean, scalable code"</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>,</span>
                    </CodeLine>
                    <CodeLine delay={720}>
                      &nbsp;&nbsp;<span style={{ color: '#C8A84B' }}>available</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>:</span>{' '}
                      <span style={{ color: '#27c93f' }}>true</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>,</span>
                    </CodeLine>
                    <CodeLine delay={840}>
                      <span style={{ color: 'rgba(245,240,232,0.4)' }}>{'}'}</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>;</span>
                    </CodeLine>
                    <CodeLine delay={960}>
                      <span style={{ color: 'rgba(245,240,232,0.25)' }}>&nbsp;</span>
                    </CodeLine>
                    <CodeLine delay={1080}>
                      <span style={{ color: '#555' }}>// export default for the world</span>
                    </CodeLine>
                    <CodeLine delay={1200}>
                      <span style={{ color: '#1E90FF' }}>export default</span>{' '}
                      <span style={{ color: '#F5F0E8' }}>lazizbek</span>
                      <span style={{ color: 'rgba(245,240,232,0.3)' }}>;</span>
                      <span
                        style={{
                          display: 'inline-block', width: '2px', height: '0.85em',
                          background: 'var(--accent)', verticalAlign: 'text-bottom',
                          marginLeft: '2px', animation: 'blink 1s step-end infinite',
                        }}
                      />
                    </CodeLine>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
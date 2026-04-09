'use client';
import { useRef, useEffect, useState } from 'react';
import { Lang, t } from '@/lib/i18n';
import { Music, Gauge, Play } from 'lucide-react';

const AlbumCover = ({ color, pattern, active, onClick }: {
  title: string; year: string; color: string; pattern: 'homework' | 'discovery' | 'human' | 'alive' | 'ram';
  active: boolean; onClick: () => void;
}) => {
  const designs: Record<string, React.ReactNode> = {
    homework: <img src="/images/homework.jpg" alt="Daft Punk Homework" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />,
    discovery: <img src="/images/discovery.jpg" alt="Daft Punk Discovery" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />,
    human: <img src="/images/humanafterall.jpg" alt="Human After All" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />,
    alive: <img src="/images/alive2007.jpg" alt="Alive 2007" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />,
    ram: <img src="/images/ram.jpg" alt="Random Access Memories" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />,
  };

  return (
    <button onClick={onClick} style={{ position: 'relative', width: active ? 98 : 78, height: active ? 98 : 78, flexShrink: 0, cursor: 'pointer', transition: 'all 0.35s cubic-bezier(0.34, 1.3, 0.64, 1)', transform: active ? 'rotate(0deg) scale(1.05)' : 'rotate(-3deg)', boxShadow: active ? `0 0 20px ${color}44, 4px 4px 0 ${color}33` : 'none', background: 'transparent', overflow: 'hidden', }} >
      {designs[pattern]}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${color}22 0%, transparent 60%)`, opacity: active ? 1 : 0, transition: 'opacity 0.3s', pointerEvents: 'none', }} />
    </button>
  );
};

const CarSVG = ({ model }: { model: 'porsche' | 'mercedes' }) => {
  const src =
    model === "porsche" ? "/images/porsche.png" : "/images/mercedes.png";

  return (
    <img src={src} alt={model} style={{ width: "100%", height: "100%", objectFit: "contain", }} />
  );
};

const albums = [
  { title: 'Homework', year: '1997', color: '#FF6600', pattern: 'homework' as const, tracks: ['Around the World', 'Da Funk', 'Revolution 909'] },
  { title: 'Discovery', year: '2001', color: '#C8A84B', pattern: 'discovery' as const, tracks: ['One More Time', 'Harder Better Faster', 'Digital Love'] },
  { title: 'Human After All', year: '2005', color: '#888', pattern: 'human' as const, tracks: ['Robot Rock', 'Steam Machine', 'The Brainwasher'] },
  { title: 'Alive 2007', year: '2007', color: '#1E90FF', pattern: 'alive' as const, tracks: ['Robot Rock × Oh Yeah', 'Too Long × Steam Machine', 'Around the World × Harder'] },
  { title: 'Random Access Memories', year: '2013', color: '#C8A84B', pattern: 'ram' as const, tracks: ['Get Lucky', 'Instant Crush', 'Lose Yourself to Dance'] },
];

export default function InterestsSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [activeAlbum, setActiveAlbum] = useState(1);
  const [activeCar, setActiveCar] = useState<'porsche' | 'mercedes'>('porsche');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const album = albums[activeAlbum];

  return (
    <section id="interests" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display mb-16" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, color: 'var(--fg)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease', }} >
          {tr.interests_title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden" style={{ padding: '28px', background: 'var(--card)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-30px)', transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s', }} >
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(circle at 80% 20%, ${album.color}12 0%, transparent 60%)`, transition: 'background 0.5s ease', }} />

            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 38, height: 38, border: `1px solid var(--fg)`, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Music size={15} style={{ color: 'var(--fg)' }} />
              </div>
              <div>
                <div className="text-[0.52rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>Interest — Music</div>
                <div className="text-sm font-bold" style={{ color: 'var(--fg)' }}>Daft Punk</div>
              </div>
              <div className="ml-auto stamp" style={{ fontSize: '0.5rem', borderColor: 'var(--fg)', color: 'var(--fg)' }}>1993–2021</div>
            </div>

            <div className="font-display crt-glow mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: 'var(--accent)', letterSpacing: '0.04em', lineHeight: 1 }} >
              DAFT PUNK
            </div>

            <div className="text-[0.65rem] tracking-widest uppercase mb-8" style={{ color: 'var(--muted)' }}>
              Discography — select an album
            </div>
            <div className="flex gap-3 mb-6 flex-wrap w-full h-26.25 select-none">
              {albums.map((a, i) => (
                <AlbumCover key={a.title} title={a.title} year={a.year} color={a.color} pattern={a.pattern} active={activeAlbum === i} onClick={() => setActiveAlbum(i)} />
              ))}
            </div>

            <div style={{ transition: 'all 0.3s ease', }} >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-xl" style={{ color: album.color, transition: 'color 0.3s' }}>
                    {album.title}
                  </div>
                  <div className="text-[0.78rem] mt-0.5" style={{ color: 'var(--muted)' }}>{album.year}</div>
                </div>
                <div className="flex items-center gap-0.5 h-7 mt-1">
                  {[4, 7, 5, 9, 6, 8, 4, 7, 5, 6, 8, 4].map((h, i) => (
                    <div key={i} style={{ width: '2px', height: `${h * 2.5}px`, background: album.color, opacity: 0.75, animation: `blink ${0.35 + i * 0.06}s ease-in-out infinite alternate`, transition: 'background 0.3s', }} />
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                {album.tracks.map((track, i) => (
                  <div key={track} className="flex items-center gap-2">
                    <span style={{ color: album.color, fontSize: '0.7rem', opacity: 0.7, minWidth: '12px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                    <span style={{ fontSize: '0.8rem', color: i === 0 ? 'var(--fg)' : 'var(--muted)', fontFamily: 'Space Mono', letterSpacing: '0.05em' }}>
                      {track}
                    </span>
                    {i === 0 && <Play size={8} style={{ color: album.color, flexShrink: 0 }} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              {['Electronic', 'House', 'French Touch', 'Iconic', 'Robots'].map(tag => (
                <span key={tag} style={{ fontSize: '0.65rem', padding: '3px 8px', letterSpacing: '0.12em', border: '1px solid var(--border)', color: 'var(--muted)', textTransform: 'uppercase', }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden" style={{ padding: '28px', background: 'var(--card)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)', transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1) 0.25s', }} >
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: activeCar === 'porsche' ? 'radial-gradient(circle at 60% 80%, rgba(30,144,255,0.08) 0%, transparent 60%)' : 'radial-gradient(circle at 40% 80%, rgba(245,240,232,0.04) 0%, transparent 60%)', transition: 'background 0.5s ease', }} />

            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 38, height: 38, border: `1px solid var(--fg)`, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Gauge size={15} style={{ color: 'var(--fg)' }} />
              </div>
              <div>
                <div className="text-[0.52rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>Interest — Automobiles</div>
                <div className="text-sm font-bold" style={{ color: 'var(--fg)' }}>Performance Cars</div>
              </div>
            </div>

            <div className="flex gap-2 mb-6 select-none">
              {(['porsche', 'mercedes'] as const).map(car => (
                <button key={car} onClick={() => setActiveCar(car)} style={{ flex: 1, padding: '8px', textTransform: 'uppercase', fontSize: '0.62rem', letterSpacing: '0.15em', fontFamily: 'Space Mono', border: `1px solid ${activeCar === car ? (car === 'porsche' ? 'var(--accent)' : 'var(--fg)') : 'var(--border)'}`, color: activeCar === car ? (car === 'porsche' ? 'var(--accent)' : 'var(--fg)') : 'var(--muted)', background: activeCar === car ? 'var(--blue-dim)' : 'transparent', transition: 'all 0.25s', cursor: 'pointer' }} >
                  {car === 'porsche' ? '◈ Porsche' : '◇ Mercedes'}
                </button>
              ))}
            </div>

            <div className='select-none' style={{ width: '100%', height: '160px', position: 'relative', marginBottom: '16px', transition: 'opacity 0.3s', }}>
              <div style={{ position: 'absolute', inset: 0, opacity: activeCar === 'porsche' ? 1 : 0, transform: activeCar === 'porsche' ? 'translateY(0)' : 'translateY(8px)', transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
                <CarSVG model="porsche" />
              </div>
              <div style={{ position: 'absolute', inset: 0, opacity: activeCar === 'mercedes' ? 1 : 0, transform: activeCar === 'mercedes' ? 'translateY(0)' : 'translateY(8px)', transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)', }}>
                <CarSVG model="mercedes" />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div className="font-display mb-3" style={{ fontSize: '2.8rem', lineHeight: 1, letterSpacing: '0.04em', color: activeCar === 'porsche' ? 'var(--accent)' : 'var(--fg)', transition: 'color 0.3s', }} >
                {activeCar === 'porsche' ? 'PORSCHE' : 'MERCEDES-BENZ'}
              </div>
              <div className="text-[0.58rem] tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>
                {activeCar === 'porsche' ? '911 / Cayman GT4 / Taycan' : 'AMG GT / C63 / SL'}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {(activeCar === 'porsche'
                ? [
                  { label: 'Engine', value: 'Flat-6' },
                  { label: 'Drive', value: 'RWD' },
                  { label: 'Soul', value: '∞' },
                ]
                : [
                  { label: 'Engine', value: 'V8 Biturbo' },
                  { label: 'Drive', value: 'AWD' },
                  { label: 'Legacy', value: '1886' },
                ]
              ).map(({ label, value }) => (
                <div key={label} className="text-center p-3" style={{ border: '1px solid var(--border)' }}>
                  <div className="text-[0.52rem] uppercase tracking-widest mb-1" style={{ color: 'var(--muted)' }}>{label}</div>
                  <div className="text-sm font-bold" style={{ color: 'var(--fg)' }}>{value}</div>
                </div>
              ))}
            </div>

            <div style={{ borderLeft: activeCar === 'porsche' ? '3px solid var(--accent)' : '3px solid var(--fg)', paddingLeft: '12px' }}>
              <p className='w-85' style={{ fontSize: '0.80rem', color: 'var(--muted)', fontFamily: 'Space Mono', lineHeight: 1.7 }}>
                {activeCar === 'porsche'
                  ? '"The 911 is the only car that has managed to keep its original shape while constantly evolving. Pure engineering artistry."'
                  : '"Mercedes-Benz — the brand that invented the automobile. Combining luxury with brutal AMG performance."'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
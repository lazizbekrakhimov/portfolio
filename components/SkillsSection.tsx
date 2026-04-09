'use client';
import { useRef, useEffect, useState } from 'react';
import { Lang, t } from '@/lib/i18n';

const skills = {
  advanced: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Node.js', 'Express'],
  medium: ['NestJs', 'PostgreSQL', 'MongoDB', 'React', 'Next.js'],
  basic: ['Redux-Toolkit', 'Swagger', 'Git', 'Linux',],
};

const allSkills = [
  ...skills.advanced.map(s => ({ name: s, level: 'advanced' })),
  ...skills.medium.map(s => ({ name: s, level: 'medium' })),
  ...skills.basic.map(s => ({ name: s, level: 'basic' })),
];

const basePositions = [
  { x: 5, y: 12, rot: -12 },
  { x: 20, y: 3, rot: 5 },
  { x: 36, y: 18, rot: -7 },
  { x: 52, y: 6, rot: 10 },
  { x: 67, y: 16, rot: -5 },
  { x: 80, y: 4, rot: 8 },
  { x: 88, y: 22, rot: -15 },
  { x: 8, y: 44, rot: 6 },
  { x: 24, y: 54, rot: -8 },
  { x: 42, y: 40, rot: 12 },
  { x: 60, y: 50, rot: -4 },
  { x: 74, y: 38, rot: 9 },
  { x: 86, y: 55, rot: -11 },
  { x: 3, y: 70, rot: 14 },
  { x: 22, y: 76, rot: -6 },
];

const scatterTargets = [
  { x: -15, y: -20 }, { x: 110, y: -10 }, { x: 50, y: -25 },
  { x: -20, y: 50 }, { x: 115, y: 40 }, { x: 30, y: 110 },
  { x: 90, y: 105 }, { x: -10, y: 80 }, { x: 105, y: 70 },
  { x: 60, y: -20 }, { x: -5, y: 40 }, { x: 110, y: 20 },
  { x: 20, y: 115 }, { x: 75, y: -15 }, { x: 100, y: 90 },
];

interface SkillPos {
  x: number;
  y: number;
  rot: number;
  scale: number;
  opacity: number;
  transition: string;
}

export default function SkillsSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [positions, setPositions] = useState<SkillPos[]>([]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hoveredIndexRef = useRef<number | null>(null);

  const levelColors = {
    advanced: 'var(--accent)',
    medium: 'var(--fg)',
    basic: 'var(--muted)',
  };

  const levelLabels = {
    advanced: tr.advanced,
    medium: tr.medium,
    basic: tr.basic,
  };

  useEffect(() => {
    setPositions(
      allSkills.map((_, i) => ({
        x: basePositions[i % basePositions.length].x,
        y: -30,
        rot: basePositions[i % basePositions.length].rot,
        scale: 0.5,
        opacity: 0,
        transition: 'none',
      }))
    );
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          allSkills.forEach((_, i) => {
            setTimeout(() => {
              setPositions(prev => {
                const next = [...prev];
                next[i] = {
                  x: basePositions[i % basePositions.length].x,
                  y: basePositions[i % basePositions.length].y,
                  rot: basePositions[i % basePositions.length].rot,
                  scale: 1,
                  opacity: 1,
                  transition: 'all 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)',
                };
                return next;
              });
            }, i * 60);
          });
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible]);

  const handleSkillMouseEnter = (index: number) => {
    hoveredIndexRef.current = index;
    allSkills.forEach((_, i) => {
      const dist = Math.abs(i - index);
      if (dist > 0 && dist <= 5) {
        const scatter = scatterTargets[(i * 3) % scatterTargets.length];
        const factor = Math.max(0, 1 - dist * 0.18);
        const base = basePositions[i % basePositions.length];
        setPositions(prev => {
          const next = [...prev];
          next[i] = {
            x: base.x + (scatter.x - base.x) * factor * 0.35,
            y: base.y + (scatter.y - base.y) * factor * 0.35,
            rot: base.rot + (dist < 2 ? (i % 2 === 0 ? 25 : -25) : 10),
            scale: 1 - factor * 0.15,
            opacity: 1 - factor * 0.3,
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          };
          return next;
        });
      }
    });
  };

  const handleSkillMouseLeave = () => {
    hoveredIndexRef.current = null;
    allSkills.forEach((_, i) => {
      setPositions(prev => {
        const next = [...prev];
        next[i] = {
          x: basePositions[i % basePositions.length].x,
          y: basePositions[i % basePositions.length].y,
          rot: basePositions[i % basePositions.length].rot,
          scale: 1,
          opacity: 1,
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        };
        return next;
      });
    });
  };

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start gap-6 mb-20">
          <div>
            <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--fg)', lineHeight: 1 }}>
              {tr.skills_title}
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
              {tr.skills_sub}
            </p>
          </div>
        </div>

        <div className="relative" style={{ height: '400px' }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" preserveAspectRatio="none" >
            <line x1="0%" y1="30%" x2="100%" y2="60%" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="0%" y1="70%" x2="100%" y2="20%" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="50%" cy="50%" r="120" stroke="var(--accent)" strokeWidth="0.5" fill="none" strokeDasharray="3 6" />
          </svg>

          {positions.length > 0 &&
            allSkills.map((skill, i) => {
              const pos = positions[i] ?? {
                x: basePositions[i % basePositions.length].x,
                y: -30, rot: 0, scale: 0, opacity: 0, transition: 'none',
              };
              const isActive = !activeLevel || skill.level === activeLevel;
              const col = levelColors[skill.level as keyof typeof levelColors];

              return (
                <div key={skill.name} className="absolute" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: `rotate(${pos.rot}deg) scale(${pos.scale})`, opacity: isActive ? pos.opacity : 0.08, transition: pos.transition, zIndex: isActive ? 2 : 1, }} onMouseEnter={() => handleSkillMouseEnter(i)} onMouseLeave={handleSkillMouseLeave} >
                  <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 14px', border: `1px solid ${isActive ? col : 'var(--border)'}`, color: isActive ? col : 'var(--muted)', background: isActive ? `${col}18` : 'var(--card)', fontSize: '0.65rem', letterSpacing: '0.1em', fontFamily: 'Space Mono, monospace', boxShadow: isActive && skill.level === 'advanced' ? `0 0 14px ${col}44, 0 0 4px ${col}22` : 'none', whiteSpace: 'nowrap', transition: 'box-shadow 0.3s, border-color 0.3s', }} >
                    {skill.name}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {(['advanced', 'medium', 'basic'] as const).map(level => (
            <div key={level} className="retro-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: levelColors[level] }} />
                <span className="text-[0.6rem] tracking-widest uppercase" style={{ color: levelColors[level] }}>
                  {levelLabels[level]}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[level].map((skill, si) => (
                  <span key={skill} className="text-[0.65rem] tracking-wide px-2 py-1" style={{ border: `1px solid ${levelColors[level]}44`, color: levelColors[level], background: `${levelColors[level]}0A`, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)', transition: `opacity 0.4s ease ${si * 0.05 + 0.3}s, transform 0.4s ease ${si * 0.05 + 0.3}s`, }} >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
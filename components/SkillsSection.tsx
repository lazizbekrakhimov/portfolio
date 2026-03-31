'use client';
import { useRef, useEffect, useState } from 'react';
import { Lang, t } from '@/lib/i18n';

const skills = {
  advanced: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Express'],
  medium: ['Node.js', 'PostgreSQL', 'React', 'MongoDB', 'Next.js', 'English', 'Nest.js'],
  basic: ['Git', 'Linux', 'Swagger'],
};

const allSkills = [
  ...skills.advanced.map(s => ({ name: s, level: 'advanced' })),
  ...skills.medium.map(s => ({ name: s, level: 'medium' })),
  ...skills.basic.map(s => ({ name: s, level: 'basic' })),
];

// Pre-defined chaotic positions (deterministic, not random)
const positions = [
  { x: 5, y: 15, rot: -12, scale: 1.1 },
  { x: 18, y: 5, rot: 5, scale: 1.0 },
  { x: 32, y: 20, rot: -7, scale: 1.15 },
  { x: 50, y: 8, rot: 10, scale: 0.95 },
  { x: 65, y: 18, rot: -5, scale: 1.05 },
  { x: 78, y: 5, rot: 8, scale: 1.1 },
  { x: 88, y: 22, rot: -15, scale: 1.0 },
  { x: 10, y: 45, rot: 6, scale: 1.2 },
  { x: 25, y: 55, rot: -8, scale: 0.9 },
  { x: 42, y: 42, rot: 12, scale: 1.1 },
  { x: 58, y: 50, rot: -4, scale: 1.05 },
  { x: 72, y: 40, rot: 9, scale: 0.95 },
  { x: 85, y: 55, rot: -11, scale: 1.1 },
  { x: 3, y: 72, rot: 14, scale: 1.0 },
  { x: 20, y: 78, rot: -6, scale: 1.15 },
];

export default function SkillsSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

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

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
                02 / {tr.skills_title}
              </span>
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--fg)', lineHeight: 1 }}
            >
              {tr.skills_title}
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--muted)', fontFamily: 'Space Mono' }}>
              {tr.skills_sub}
            </p>
          </div>

          <div className="section-number">{tr.skills_title.toUpperCase()}</div>
        </div>

        <div className="flex gap-4 mb-12 flex-wrap">
          {(['advanced', 'medium', 'basic'] as const).map(level => (
            <button
              key={level}
              onClick={() => setActiveLevel(activeLevel === level ? null : level)}
              className="flex items-center gap-2 px-4 py-2 transition-all text-[0.65rem] tracking-widest uppercase"
              style={{
                border: `1px solid ${activeLevel === level ? levelColors[level] : 'var(--border)'}`,
                color: activeLevel === level ? levelColors[level] : 'var(--muted)',
                background: activeLevel === level ? 'var(--blue-dim)' : 'transparent',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: levelColors[level], boxShadow: level === 'advanced' ? '0 0 6px var(--accent)' : 'none' }}
              />
              {levelLabels[level]}
            </button>
          ))}
        </div>

        <div className="relative" style={{ height: '420px' }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" preserveAspectRatio="none">
            <line x1="0%" y1="30%" x2="100%" y2="60%" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="0%" y1="70%" x2="100%" y2="20%" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="50%" cy="50%" r="120" stroke="var(--accent)" strokeWidth="0.5" fill="none" strokeDasharray="3 6" />
          </svg>

          {allSkills.map((skill, i) => {
            const pos = positions[i % positions.length];
            const isActive = !activeLevel || skill.level === activeLevel;
            const col = levelColors[skill.level as keyof typeof levelColors];

            return (
              <div
                key={skill.name}
                className="absolute"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: `rotate(${pos.rot}deg) scale(${pos.scale})`,
                  transition: 'all 0.3s ease',
                  opacity: isActive ? 1 : 0.1,
                  zIndex: isActive ? 2 : 1,
                }}
              >
                <div
                  className="skill-tag"
                  style={{
                    borderColor: isActive ? col : 'var(--border)',
                    color: isActive ? col : 'var(--muted)',
                    background: isActive ? `${col}18` : 'var(--card)',
                    fontSize: '0.65rem',
                    padding: '6px 14px',
                    boxShadow: isActive && skill.level === 'advanced' ? `0 0 12px ${col}33` : 'none',
                  }}
                >
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
                {skills[level].map(skill => (
                  <span
                    key={skill}
                    className="text-[0.65rem] tracking-wide px-2 py-1"
                    style={{
                      border: `1px solid ${levelColors[level]}44`,
                      color: levelColors[level],
                      background: `${levelColors[level]}0A`,
                    }}
                  >
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

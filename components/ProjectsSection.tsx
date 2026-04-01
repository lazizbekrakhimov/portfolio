'use client';
import { useState, useRef } from 'react';
import { ExternalLink, GitBranch, ArrowRight, X } from 'lucide-react';
import { Lang, t } from '@/lib/i18n';

const ProjectPreview = ({ id, hovered }: { id: string; hovered: boolean }) => {
  const previews: Record<string, { bg: string; label: string; elements: string[] }> = {
    '01': {
      bg: '#0a1628',
      label: 'Web App',
      elements: ['Dashboard', 'Analytics', 'Real-time'],
    },
    '02': {
      bg: '#0d1a0d',
      label: 'API + Frontend',
      elements: ['REST API', 'MongoDB', 'React UI'],
    },
    '03': {
      bg: '#1a0d1a',
      label: 'In Dev',
      elements: ['NestJS', 'TypeScript', 'Coming soon'],
    },
  };
  const p = previews[id] ?? previews['01'];

  return (
    <div style={{ width: '220px', height: '150px', background: p.bg, border: '1px solid var(--accent)', position: 'relative', overflow: 'hidden', flexShrink: 0, opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0) scale(1)' : 'translateX(20px) scale(0.96)', transition: 'all 0.35s cubic-bezier(0.34, 1.2, 0.64, 1)', boxShadow: hovered ? '0 0 30px rgba(30,144,255,0.2), 6px 6px 0 rgba(30,144,255,0.15)' : 'none' }}>
      <div style={{ background: '#111', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: '4px', borderBottom: '1px solid #222' }}>
        {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => (
          <div key={c} style={{ width: 5, height: 5, borderRadius: '50%', background: c }} />
        ))}
        <div style={{ marginLeft: 6, height: 5, flex: 1, background: '#222', borderRadius: 2 }} />
      </div>

      <div style={{ padding: '10px 10px 6px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {[40, 30, 50].map((w, i) => (
            <div key={i} style={{ width: w, height: 4, background: 'rgba(30,144,255,0.3)', borderRadius: 2 }} />
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginTop: 4 }}>
          {[100, 80, 90, 70].map((w, i) => (
            <div key={i} style={{ height: 20, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(30,144,255,0.15)', borderRadius: 2 }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 2 }}>
          {p.elements.map(el => (
            <span key={el} style={{ fontSize: 7, padding: '2px 5px', border: '1px solid rgba(30,144,255,0.4)', color: 'rgba(30,144,255,0.8)', borderRadius: 1, fontFamily: 'Space Mono', letterSpacing: '0.05em' }}>
              {el}
            </span>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 6, right: 6, fontSize: 7, color: 'var(--accent)', fontFamily: 'Space Mono', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7, }}>
        {p.label}
      </div>

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(30,144,255,0.02) 3px, rgba(30,144,255,0.02) 4px)', }} />
    </div>
  );
};

const projects = [
  {
    id: '01',
    title: 'Project Name',
    description: 'Brief description of what this project does and the problem it solves. Replace with your real project.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: '#',
    live: '#',
    status: 'Live',
    year: '2025',
  },
  {
    id: '02',
    title: 'Another Project',
    description: 'What makes this project unique and the technologies powering it. Fill with your real work.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    status: 'In Progress',
    year: '2025',
  },
  {
    id: '03',
    title: 'Coming Soon',
    description: 'New project in development. Stay tuned for updates.',
    tech: ['Nest.js', 'TypeScript'],
    github: '#',
    live: null,
    status: 'Development',
    year: '2026',
  },
];

export default function ProjectsSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
                04 / {tr.projects_title}
              </span>
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, color: 'var(--fg)' }}>
              {tr.projects_title}
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>{tr.projects_sub}</p>
          </div>
        </div>

        <div className="space-y-3">
          {projects.map((project, i) => (
            <div key={project.id} className="project-card group" onMouseEnter={() => setHovered(project.id)} onMouseLeave={() => setHovered(null)} >
              <div className="flex items-center justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-display text-3xl shrink-0" style={{ color: hovered === project.id ? 'var(--accent)' : 'rgba(245,240,232,0.08)', transition: 'color 0.3s', lineHeight: 1, }} >
                      {project.id}
                    </span>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-base font-bold tracking-wide" style={{ color: 'var(--fg)' }}>
                        {project.title}
                      </h3>
                      <span className="text-[0.52rem] tracking-widest uppercase px-2 py-1 shrink-0" style={{ border: '1px solid', borderColor: project.status === 'Live' ? 'var(--accent)' : 'var(--border)', color: project.status === 'Live' ? 'var(--accent)' : 'var(--muted)', }} >
                        {project.status}
                      </span>
                      <span className="text-[0.52rem] tracking-widest" style={{ color: 'var(--muted)' }}>
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs mb-3" style={{ color: 'var(--muted)', maxWidth: '55ch', lineHeight: 1.7 }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-[0.58rem] px-2 py-1 tracking-wide" style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <ProjectPreview id={project.id} hovered={hovered === project.id} />
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="social-link">
                    <GitBranch size={11} /><span>Code</span>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="social-link">
                      <ExternalLink size={11} /><span>Live</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute right-6 top-1/2 -translate-y-1/2 " style={{ opacity: hovered === project.id ? 0 : 0, transition: 'all 0.3s', }} >
                <ArrowRight size={14} style={{ color: 'var(--accent)' }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4" style={{ border: '1px dashed var(--border)', color: 'var(--muted)' }} >
            <span className="text-[0.62rem] tracking-widest uppercase">More projects coming soon</span>
            <div className="blink-cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';
import { useState } from 'react';
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react';
import { Lang, t } from '@/lib/i18n';

const projects = [
  {
    id: '01',
    title: 'Project Name',
    description: 'Brief description of what this project does and the problem it solves.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: '#',
    live: '#',
    status: 'Live',
  },
  {
    id: '02',
    title: 'Another Project',
    description: 'What makes this project unique and the technologies powering it.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    status: 'In Progress',
  },
  {
    id: '03',
    title: 'Coming Soon',
    description: 'New project in development. Stay tuned for updates.',
    tech: ['Nest.js', 'TypeScript'],
    github: '#',
    live: null,
    status: 'Development',
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
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, color: 'var(--fg)' }}
            >
              {tr.projects_title}
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
              {tr.projects_sub}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card group"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className="font-display text-2xl"
                      style={{
                        color: hovered === project.id ? 'var(--accent)' : 'var(--border)',
                        transition: 'color 0.3s',
                      }}
                    >
                      {project.id}
                    </span>
                    <h3 className="text-lg font-bold tracking-wide" style={{ color: 'var(--fg)' }}>
                      {project.title}
                    </h3>
                    <span
                      className="text-[0.55rem] tracking-widest uppercase px-2 py-1"
                      style={{
                        border: '1px solid var(--border)',
                        color: project.status === 'Live' ? 'var(--accent)' : 'var(--muted)',
                        borderColor: project.status === 'Live' ? 'var(--accent)' : 'var(--border)',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--muted)', maxWidth: '60ch' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="text-[0.6rem] px-2 py-1 tracking-wide"
                        style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <GitBranch size={12} />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <ExternalLink size={12} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>

              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-300"
                style={{
                  opacity: hovered === project.id ? 1 : 0,
                  transform: `translateY(-50%) translateX(${hovered === project.id ? 0 : 8}px)`,
                }}
              >
                <ArrowRight size={16} style={{ color: 'var(--accent)' }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-4"
            style={{ border: '1px dashed var(--border)', color: 'var(--muted)' }}
          >
            <span className="text-[0.62rem] tracking-widest uppercase">
              More projects coming soon
            </span>
            <div className="blink-cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}

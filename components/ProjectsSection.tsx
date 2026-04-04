'use client';
import { useState, } from 'react';
import { ExternalLink, GitBranch, ArrowRight, X } from 'lucide-react';
import { Lang, t } from '@/lib/i18n';

const ProjectPreview = ({ id, hovered }: { id: string; hovered: boolean }) => {
  const previews: Record<string, { bg: string }> = {
    '01': {
      bg: "/images/restaurant.png"
    },
    '02': {
      bg: "/images/sector-25.png"
    },
    '03': {
      bg: "/images/todolist.png"
    },
    '04': {
      bg: "/images/github.png"
    }
  };

  const p = previews[id] ?? previews['01'];

  return (
    <div style={{ width: '270px', height: '160px', backgroundImage: `url(${p.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', border: '1px solid var(--accent)', position: 'relative', overflow: 'hidden', flexShrink: 0, opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0) scale(1)' : 'translateX(20px) scale(0.96)', transition: 'all 0.35s cubic-bezier(0.34, 1.2, 0.64, 1)', boxShadow: hovered ? '0 0 30px rgba(30,144,255,0.2), 6px 6px 0 rgba(30,144,255,0.15)' : 'none' }} />
  );
};

const projects = [
  {
    id: '01',
    title: 'Restaurant Platform',
    description: 'A fullstack restaurant management platform built with Next.js and Nest.js that helps manage orders, menus, and users in a structured workflow. Designed with PostgreSQL-backed APIs for real-world usability.',
    tech: ['Next.js', 'TypeScript', 'Redux', 'Nest.js', 'PostgreSQL'],
    github: 'https://github.com/lazizbekrakhimov/restaurant-project',
    live: 'https://restaurant-project-final.vercel.app/',
    status: 'Live',
    year: '2026',

  },
  {
    id: '02',
    title: 'Vintage Industrial Admin Dashboard',
    description: 'An admin dashboard built with a vintage industrial design approach, combining structured data management with a distinctive retro-inspired interface.',
    tech: ['React', 'TailwindCSS', 'FakeApi'],
    github: 'https://github.com/lazizbekrakhimov/sector-25.git',
    live: 'https://sector-25.vercel.app/',
    status: 'Live',
    year: '2026',
  },
  {
    id: '03',
    title: 'Todolist',
    description: 'A productivity-focused task management application currently in development. Built with Nest.js and TypeScript, it aims to provide a clean workflow for organizing daily tasks with a modern interface.',
    tech: ['React', 'TailwindCSS'],
    github: 'https://github.com/lazizbekrakhimov/todolist',
    live: 'https://todolist-desktop.vercel.app/',
    status: 'Development',
    year: '2026',
  },
  {
    id: '04',
    title: 'Backend Projects Collection',
    description: 'Backend projects on GitHub featuring APIs, database integration, and scalable architectures with Nest.js, Express, and TypeScript.',
    tech: ['Nest.js', 'Express', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    github: 'https://github.com/lazizbekrakhimov',
    live: '',
    status: 'In Progress',
    year: '2026',
    pinned: true
  }
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
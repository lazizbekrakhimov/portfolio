'use client';
import { useState } from 'react';
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';
import { Lang, t } from '@/lib/i18n';

const projects = [
  {
    id: '01',
    title: 'Restaurant Platform',
    description: 'A fullstack restaurant management platform built with Next.js and Nest.js that helps manage orders, menus, and users in a structured workflow.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'Nest.js', 'PostgreSQL', 'TypeORM', 'JWT', 'Swagger'],
    github: 'https://github.com/lazizbekrakhimov/restaurant-project',
    live: 'https://restaurant-project-final.vercel.app/',
    status: 'Live',
    year: '2026',
    image: '/images/restaurant.png',
  },
  {
    id: '02',
    title: 'Vintage Industrial Admin Dashboard',
    description: 'An admin dashboard built with a vintage industrial design approach, combining structured data management with a distinctive retro-inspired interface.',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'FakeApi'],
    github: 'https://github.com/lazizbekrakhimov/sector-25.git',
    live: 'https://sector-25.vercel.app/',
    status: 'Live',
    year: '2026',
    image: '/images/sector-25.png',
  },
  {
    id: '03',
    title: 'Najot Ta\'lim Admin Panel',
    description: 'A professional CRM admin panel clone of the Najot Ta\'lim platform, designed to manage student data and educational workflows with a modern UI.',
    tech: ['React', 'TypeScript', 'Ant Design', 'Redux Toolkit', 'React Query', 'TailwindCSS'],
    github: 'https://github.com/lazizbekrakhimov/crm-project',
    live: 'https://crm-project-najottalim.vercel.app/',
    status: 'In Production',
    year: '2026',
    image: '/images/najottalim.png',
  },
  {
    id: '04',
    title: 'Backend Projects Collection',
    description: 'Backend projects on GitHub featuring APIs, database integration, and scalable architectures with Nest.js, Express, and TypeScript.',
    tech: ['Nest.js', 'Express', 'TypeScript', 'PostgreSQL', 'MongoDB', 'RestAPI', 'TypeORM'],
    github: 'https://github.com/lazizbekrakhimov',
    live: '',
    status: 'In Progress',
    year: '2026',
    image: '/images/github.png',
  },
];

export default function ProjectsSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null);
  const [visible, setVisible] = useState(true);

  const project = projects[current];
  const total = projects.length;

  const go = (dir: 'prev' | 'next') => {
    const d = dir === 'next' ? 'left' : 'right';
    setAnimDir(d);
    setVisible(false);
    setTimeout(() => {
      setCurrent(prev =>
        dir === 'next'
          ? (prev + 1) % total
          : (prev - 1 + total) % total
      );
      setAnimDir(null);
      setVisible(true);
    }, 320);
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, color: 'var(--fg)' }}>
              {tr.projects_title}
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>{tr.projects_sub}</p>
          </div>
          <div className='flex gap-3' style={{ flexShrink: 0 }}>
            <button onClick={() => go('prev')} style={{ width: 38, height: 38, border: '1px solid var(--border)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; }} >
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => go('next')} style={{ width: 38, height: 38, border: '1px solid var(--border)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; }} >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div style={{ background: 'var(--card)', opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : animDir === 'left' ? 'translateX(-24px)' : 'translateX(24px)', transition: 'opacity 0.22s ease, transform 0.22s ease', }} >
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', minHeight: '520px' }}>

            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img className='select-none' src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.5s ease' }} onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')} onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, var(--card) 100%)', pointerEvents: 'none' }} />
            </div>

            <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span className="font-display" style={{ fontSize: '4rem', lineHeight: 1, color: 'var(--fg)', opacity: 0.25 }} >
                    {project.id}
                  </span>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px', border: '1px solid', borderColor: project.status === 'Live' ? 'var(--accent)' : 'var(--border)', color: project.status === 'Live' ? 'var(--accent)' : 'var(--muted)', }} >
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1.1, color: 'var(--fg)', marginBottom: 16 }} >
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: 24, fontFamily: 'Space Mono' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.tech.map(tech => (
                    <span key={tech} style={{ fontSize: '0.7rem', padding: '4px 10px', letterSpacing: '0.08em', border: '1px solid var(--border)', color: 'var(--muted)', fontFamily: 'Space Mono', }} >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="social-link select-none" style={{ gap: 8 }} >
                  <GitBranch size={12} />
                  <span>Code</span>
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="social-link select-none" style={{ gap: 8 }} >
                    <ExternalLink size={12} />
                    <span>Live demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-3 mt-8'>
          {projects.map((_, i) => (
            <button key={i} onClick={() => { const dir = i > current ? 'left' : 'right'; setAnimDir(dir); setVisible(false); setTimeout(() => { setCurrent(i); setAnimDir(null); setVisible(true); }, 220); }} style={{ width: i === current ? 20 : 10, height: 10, background: i === current ? 'var(--accent)' : 'var(--border)', border: 'none', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', padding: 0, cursor: 'pointer' }} />
          ))}
        </div>
      </div>
    </section>
  );
}
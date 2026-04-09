'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon, GitBranch, Link2 } from 'lucide-react';
import { languages, Lang, t } from '@/lib/i18n';

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}

export default function Navbar({ lang, setLang, theme, setTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const tr = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: tr.nav_about },
    { href: '#skills', label: tr.nav_skills },
    { href: '#projects', label: tr.nav_projects },
    { href: '#contact', label: tr.nav_contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ borderBottom: '1px solid transparent', background: scrolled ? 'var(--bg)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', }} >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className='flex flex-col justify-center items-center select-none'>
          <div className="relative">
            <h1 className="font-display" data-text="lazizbek" style={{ fontFamily: 'Brusher', fontSize: 'clamp(0.5rem, 1vw, 1rem)', lineHeight: 1.1, color: 'var(--fg)', }} >
              lazizbek
            </h1>
          </div>

          <div className="relative">
            <h1 className="font-display" data-text="rahimov" style={{ fontFamily: 'Brusher', fontSize: 'clamp(0.5rem, 1vw, 1rem)', lineHeight: 1.1, color: 'var(--fg)', }} >
              rahimov
            </h1>
          </div>
        </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link select-none">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1.5 select-none">
            {(Object.keys(languages) as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} className={`cursor-pointer lang-btn ${lang === l ? 'active' : ''}`} >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="w-px h-5 mx-1" style={{ background: 'var(--border)' }} />

          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-btn cursor-pointer" aria-label="Toggle theme" >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

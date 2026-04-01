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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent', background: scrolled ? 'var(--bg)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', }} >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <img src="/logo.png" alt="LR" className="w-full h-full object-cover" />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {(Object.keys(languages) as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} className={`lang-btn ${lang === l ? 'active' : ''}`} >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="w-px h-5 mx-1" style={{ background: 'var(--border)' }} />

          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-btn" aria-label="Toggle theme" >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

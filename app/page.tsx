'use client';
import { useState, useEffect } from 'react';
import { Lang } from '@/lib/i18n';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import InterestsSection from '@/components/InterestsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'dark' | 'light');
    }
    const visited = sessionStorage.getItem('visited');
    if (visited) setLoading(false);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const handleLoadingDone = () => {
    sessionStorage.setItem('visited', '1');
    setLoading(false);
  };

  if (!mounted) return null;

  return (
    <>
      <div className="vhs-line" />

      {loading && <LoadingScreen onDone={handleLoadingDone} />}

      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }} >
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
        <main>
          <HeroSection lang={lang} />
          <AboutSection lang={lang} />
          <SkillsSection lang={lang} />
          <InterestsSection lang={lang} />
          <ProjectsSection lang={lang} />
          <ContactSection lang={lang} />
        </main>
      </div>
    </>
  );
}

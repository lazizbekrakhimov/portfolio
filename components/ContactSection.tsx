'use client';
import { useState } from 'react';
import { Send, GitBranch, Link2, Mail } from 'lucide-react';
import { Lang, t } from '@/lib/i18n';

export default function ContactSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, var(--accent) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
            05 / {tr.contact_title}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, color: 'var(--fg)' }}
            >
              {tr.contact_title}
            </h2>
            <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
              {tr.contact_sub}
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, label: 'Email', value: 'lazizbekrakhimov25@gmail.com', href: 'gmail:lazizbekrakhimov25@gmail.com' },
                { icon: GitBranch, label: "GitHub", value: 'github.com/lazizbekrakhimov', href: 'https://github.com/lazizbekrakhimov' },
                { icon: Link2, label: "LinkedIn", value: 'linkedin.com/in/lazizbekrakhimov', href: 'https://linkedin.com/in/lazizbekrakhimov' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-full"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={12} style={{ color: 'var(--accent)' }} />
                    <span style={{ color: 'var(--muted)' }}>{label}</span>
                  </span>
                  <span style={{ color: 'var(--fg)' }}>{value}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="retro-border p-8 text-center">
                <div className="font-display crt-glow text-4xl mb-4" style={{ color: 'var(--accent)' }}>
                  SENT
                </div>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Message received. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-[0.6rem] tracking-widest uppercase mb-2" style={{ color: 'var(--muted)' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-mono bg-transparent outline-none transition-all"
                      style={{
                        border: '1px solid var(--border)',
                        color: 'var(--fg)',
                        fontFamily: 'Space Mono',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[0.6rem] tracking-widest uppercase mb-2" style={{ color: 'var(--muted)' }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all resize-none"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'var(--fg)',
                      fontFamily: 'Space Mono',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    required
                  />
                </div>
                <button type="submit" className="btn-accent w-full flex items-center justify-center gap-3">
                  <Send size={13} />
                  {tr.contact_btn}
                </button>
              </form>
            )}
          </div>
        </div>

        <div
          className="mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[0.6rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
              Lazizbek Rahimov © 2026
            </span>
          </div>
          <div className="text-[0.6rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
            Built with Next.js + TypeScript
          </div>
          <div className="stamp" style={{ transform: 'rotate(2deg)' }}>
            TASHKENT · UZ
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState, useRef } from 'react';
import { Send, GitBranch, Link2, Mail, Loader2, CheckCircle } from 'lucide-react';
import { Lang, t } from '@/lib/i18n';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_xnggkta';
const EMAILJS_TEMPLATE_ID = 'template_fq8y9ek';
const EMAILJS_PUBLIC_KEY = 'HEA_5rJolN50aysfC';

export default function ContactSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setErrorMsg('Something went wrong. Please try again or email me directly.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-26 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(ellipse at 50% 50%, var(--accent) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="absolute inset-0 grid-bg opacity-10" style={{ pointerEvents: 'none' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, color: 'var(--fg)' }} >
              {tr.contact_title}
            </h2>
            <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
              {tr.contact_sub}
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, label: 'Email', value: 'lazizbekrakhimov25@gmail.com', href: 'mailto:lazizbekrakhimov25@gmail.com' },
                { icon: GitBranch, label: 'GitHub', value: 'github.com/lazizbekrakhimov', href: 'https://github.com/lazizbekrakhimov' },
                { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/lazizbekrakhimov', href: 'https://linkedin.com/in/lazizbekrakhimov' },
                { icon: Send, label: 'Telegram', value: 't.me/otabekovich25', href: 'https://t.me/otabekovich25' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link w-full select-none" style={{ display: 'flex', justifyContent: 'space-between' }} >
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
            {status === 'sent' ? (
              <div className="retro-border p-8 text-center flex flex-col items-center gap-4" style={{ minHeight: 320, justifyContent: 'center' }}  >
                <CheckCircle size={40} style={{ color: 'var(--accent)' }} />
                <div className="font-display crt-glow text-4xl" style={{ color: 'var(--accent)' }} >
                  SENT ✓
                </div>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Message received. I'll get back to you soon.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-retro mt-2" style={{ fontSize: '0.7rem' }} >
                  Send another →
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" >
                <div>
                  <label className="block text-[0.6rem] tracking-widest uppercase mt-7 mb-2" style={{ color: 'var(--muted)' }} >
                    Name
                  </label>
                  <input type="text" name="from_name" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all" style={{ border: '1px solid var(--border)', color: 'var(--fg)', fontFamily: 'Space Mono' }} onFocus={e => (e.target.style.borderColor = 'var(--accent)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} required disabled={status === 'sending'} />
                </div>

                <div>
                  <label className="block text-[0.6rem] tracking-widest uppercase mb-2" style={{ color: 'var(--muted)' }} >
                    Email
                  </label>
                  <input type="email" name="reply_to" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all" style={{ border: '1px solid var(--border)', color: 'var(--fg)', fontFamily: 'Space Mono' }} onFocus={e => (e.target.style.borderColor = 'var(--accent)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} required disabled={status === 'sending'} />
                </div>

                <div>
                  <label className="block text-[0.6rem] tracking-widest uppercase mb-2" style={{ color: 'var(--muted)' }}  >
                    Message
                  </label>
                  <textarea rows={5} name="message" placeholder="Tell me about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all resize-none" style={{ border: '1px solid var(--border)', color: 'var(--fg)', fontFamily: 'Space Mono' }} onFocus={e => (e.target.style.borderColor = 'var(--accent)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} required disabled={status === 'sending'} />
                </div>

                {status === 'error' && (
                  <p style={{ fontSize: '0.75rem', color: '#ff4444', fontFamily: 'Space Mono' }}>
                    ⚠ {errorMsg}
                  </p>
                )}

                <button type="submit" className="cursor-pointer btn-accent w-full flex items-center justify-center gap-3 select-none" disabled={status === 'sending'} style={{ opacity: status === 'sending' ? 0.7 : 1, transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      {tr.contact_btn}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-24 pt-8 flex flex-col md:flex-row items-center justify-center gap-4" style={{ borderTop: '1px solid var(--border)' }} >
          <span className="text-[0.6rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
            © 2026 Lazizbek Rahimov. All rights reserved.
          </span>
        </div>
      </div>

    </section>
  );
}
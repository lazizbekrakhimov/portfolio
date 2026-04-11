# Lazizbek Rahimov — Portfolio

A retro-vintage-futurist portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **Fonts**: Bebas Neue, DM Serif Display, Space Mono

## 🎨 Design System

| Token | Value |
|-------|-------|
| White (beige) | `#F5F0E8` |
| Black | `#161616` |
| Accent (Dodger Blue) | `#1E90FF` |

## 🌍 Languages Supported

EN · RU · UZ

## 📁 Project Structure

```
app/
  page.tsx          — Main portfolio page
  layout.tsx        — Root layout
  not-found.tsx     — 404 page
  loading.tsx       — Loading state
  globals.css       — Design system

components/
  Cursor.tsx        — Custom cursor
  LoadingScreen.tsx — Intro animation (multilingual greetings)
  Navbar.tsx        — Navigation + theme + lang switch
  HeroSection.tsx   — Hero with glitch name effect
  SkillsSection.tsx — Chaotic/abstract skills layout
  AboutSection.tsx  — About + code snippet card
  InterestsSection.tsx — Daft Punk + Porsche cards
  ProjectsSection.tsx  — Projects list (fill in your own!)
  ContactSection.tsx   — Contact form + links

lib/
  i18n.ts           — All translations
```

## ✏️ Adding Your Projects

Edit `components/ProjectsSection.tsx` — find the `projects` array and replace the placeholder entries with your real projects.

## 🌗 Features

- ✅ Light / Dark mode toggle
- ✅ 6-language switcher (EN, RU, UZ)
- ✅ Multilingual loading screen
- ✅ Custom animated cursor
- ✅ Glitch text effect on hero name
- ✅ Chaotic/abstract skills layout
- ✅ Retro hover effects on all buttons
- ✅ VHS scan-line effect
- ✅ 404 page with glitch animation
- ✅ Noise grain overlay
- ✅ Ticker tape tech stack scroll
- ✅ Contact form
- ✅ Interests: Daft Punk + Porsche/Mercedes cards

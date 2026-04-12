# Lazizbek Rahimov — Portfolio

A retro-futurist portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **Fonts**: Bebas Neue, DM Serif Display, Space Mono, Brusher

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

## 🌗 Features

- ✅ Dark / Light mode toggle
- ✅ 3-language switcher (EN, RU, UZ)
- ✅ Pagination on Project Section
- ✅ Multilingual loading screen
- ✅ Glitch text effect on hero name
- ✅ Chaotic/abstract skills layout
- ✅ Retro hover effects on all buttons
- ✅ VHS scan-line effect
- ✅ Noise grain overlay
- ✅ Ticker tape tech stack scroll
- ✅ Contact form
- ✅ Interests: Daft Punk + Porsche/Mercedes cards

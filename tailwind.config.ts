import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'retro-white': '#F5F0E8',
        'retro-black': '#161616',
        'dodger-blue': '#1E90FF',
      },
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        serif: ['DM Serif Display', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;

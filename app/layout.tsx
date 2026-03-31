import type { Metadata } from 'next';
import './globals.css';
import Cursor from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'Lazizbek Rahimov — Full-Stack Developer',
  description:
    'Full-Stack Developer based in Tashkent. Building digital experiences with precision.',
  keywords: ['Full-Stack', 'Developer', 'Next.js', 'TypeScript', 'Tashkent'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lazizbek Rahimov — Full-Stack Developer',
  description:
    'I build web apps that are fast, reliable, and easy to love.',
  keywords: ['Full-Stack', 'Developer', 'Next.js', 'NestJS', 'TypeScript', 'Tashkent'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
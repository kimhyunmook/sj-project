import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const notoSans = Noto_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: 'sj-project',
  description: 'sj-project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(notoSans.className, 'bg-black')}>{children}</body>
    </html>
  );
}

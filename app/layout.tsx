import cn from 'classnames';

import type { Metadata } from 'next';
import { notosans } from '@/fonts';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Next.js starter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body
        className={cn('overflow-x-hidden bg-primary-800', notosans.className)}
      >
        {children}
      </body>
    </html>
  );
}

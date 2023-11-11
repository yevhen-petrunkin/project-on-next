import '@/styles/globals.css';

import cn from 'classnames';

import type { Metadata } from 'next';
import { notosans } from '@/fonts';

import headerData from '@/data/header.json';

import { Header } from '@/sections';

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
        className={cn(
          'overflow-x-hidden bg-primary-800 text-white',
          notosans.className,
        )}
      >
        <Header staticData={headerData.header.navbar} />
        {children}
      </body>
    </html>
  );
}

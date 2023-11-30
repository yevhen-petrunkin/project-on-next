import '@/styles/globals.css';

import cn from 'classnames';

import type { Metadata } from 'next';
import { notosans } from '@/fonts';

import { Header, Footer } from '@/sections';

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
        <Header />
        <div className="wrapper ">
          <div className=" body-bg content mx-auto 2xl:max-w-[1600px]">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

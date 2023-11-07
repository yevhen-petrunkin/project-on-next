import { Noto_Sans, Russo_One } from 'next/font/google';

// Main font for content

export const notosans = Noto_Sans({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
});

// Ukrainian Main Title on Hero

export const russoOne = Russo_One({
  weight: ['400'],
  subsets: ['latin', 'cyrillic'],
});

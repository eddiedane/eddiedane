import localFont from 'next/font/local';
import { Major_Mono_Display } from 'next/font/google';

export const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  weight: '400',
});

export const metropolis = localFont({
  src: [
    { path: './metropolis/metropolis-thin.woff', weight: '100' },
    { path: './metropolis/metropolis-extralight.woff', weight: '200' },
    { path: './metropolis/metropolis-light.woff', weight: '300' },
    { path: './metropolis/metropolis-regular.woff', weight: '400' },
    { path: './metropolis/metropolis-medium.woff', weight: '500' },
    { path: './metropolis/metropolis-semibold.woff', weight: '600' },
    { path: './metropolis/metropolis-bold.woff', weight: '700' },
    { path: './metropolis/metropolis-extrabold.woff', weight: '800' },
    { path: './metropolis/metropolis-black.woff', weight: '900' },
  ],
  weight: '100 200 300 400 500 600 700 800 900',
});

'use client';

import { navigation } from '@/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FooterArt from '@/components/3d/footer-art';
import { cn } from '@/lib/utils';
import Contacts from '../contacts';
import Message from '../message';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={cn('py-8', 'bg-stone-200 dark:bg-stone-900', 'relative', {
        'snap-start': pathname == '/',
      })}
    >
      <div className='container'>
        <ul className='relative z-30 flex flex-col items-start gap-4 pl-5 mb-10'>
          {navigation
            .sort((a, b) => (a.text === 'Intro' ? -1 : b.text.localeCompare(a.text)))
            .map((item) => (
              <li
                key={item.href}
                className='text-xl text-stone-800 dark:text-stone-200 font-semibold'
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
        </ul>
      </div>

      <div className={cn('container relative z-50 flex sm:flex-col sm:items-start gap-6 px-5')}>
        <Contacts className='sm:shrink sm:gap-3' />
        <Message className='sm:shrink' />
      </div>

      <div
        className={cn(
          'absolute inset-0 z-0 -mt-28',
          'flex flex-col justify-center items-end',
          'tracking-tight font-bold uppercase',
          'text-stone-400 dark:text-stone-700',
          'pr-5',
        )}
      >
        <span
          className={cn(
            'text-3xl md:text-6xl',
            'text-transparent',
            'bg-clip-text',
            'bg-gradient-to-br',
            'from-stone-500 dark:from-stone-400',
            'from-10%',
            'to-stone-400 dark:to-stone-900',
          )}
        >
          Efficient
        </span>
        <span className={cn('text-4xl md:text-7xl')}>Simple</span>
        <span
          className={cn(
            'text-3xl md:text-6xl',
            'text-transparent',
            'bg-clip-text',
            'bg-gradient-to-br',
            'from-stone-400 dark:from-stone-900',
            'to-stone-500 dark:to-stone-400',
          )}
        >
          Versatile
        </span>
      </div>
      <div className='absolute inset-0 xl:inset-auto xl:right-0 xl:top-0 xl:w-1/2 xl:h-96 h-64 md:h-[25em] z-10'>
        <FooterArt />
      </div>

      <div className='text-center text-sm text-stone-500 dark:text-stone-600 font-semibold mt-10'>
        {new Date().getFullYear()} Eddie Dane
      </div>
    </footer>
  );
}

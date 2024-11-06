import { navigation } from '@/data';
import FragLink from '../frag-link';
import FooterArt from '@/components/3d/footer-art';
import { cn } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className='py-8 bg-stone-200 dark:bg-stone-900 snap-start'>
      <div className='relative'>
        <ul className='flex flex-col items-start gap-4 pl-5'>
          {navigation
            .sort((a, b) => (a.text === 'Intro' ? -1 : b.text.localeCompare(a.text)))
            .map((item) => (
              <li
                key={item.href}
                className='text-xl text-stone-800 dark:text-stone-200 font-semibold'
              >
                <FragLink href={item.href}>{item.text}</FragLink>
              </li>
            ))}
          <li>{new Date().getFullYear()} Eddie Dane</li>
        </ul>
        <div className='absolute inset-0 z-10 flex flex-col justify-center items-end tracking-tight font-bold uppercase text-stone-400 dark:text-stone-700 pr-5'>
          <span
            className={cn(
              'text-3xl',
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
          <span className={cn('text-4xl')}>Simple</span>
          <span
            className={cn(
              'text-3xl',
              'text-transparent',
              'bg-clip-text',
              'bg-gradient-to-br',
              'from-stone-400 dark:from-stone-900',
              'to-stone-500 dark:to-stone-400',
            )}
          >
            Versatile
          </span>
          <div className='absolute inset-0 z-20'>
            <FooterArt />
          </div>
        </div>
      </div>
    </footer>
  );
}

import { notable } from '@/app/assets/fonts';
import { cn } from '@/lib/utils';
import Contacts from '@/components/contacts';

export default function Intro() {
  const firstName = 'Eddie';
  const lastName = 'Dane';

  return (
    <section id='intro' className='min-h-screen flex flex-col justify-center'>
      <div className='flex flex-col gap-4'>
        <h1
          id='names'
          className={cn(
            notable.className,
            '-mt-5',
            'text-7xl',
            'leading-none',
            'tracking-tighter',
            'flex flex-col',
          )}
          style={{ perspective: '2000px' }}
          aria-label={`${firstName} ${lastName}`}
        >
          <span className='text-stone-700 dark: dark:text-stone-200'>
            {firstName.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </span>
          <span className='text-stone-400 dark:text-stone-500 self-end'>
            {lastName.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </span>
        </h1>
        <h2
          className={cn(
            'from-orange-300 via-orange-400 to-orange-200 text-transparent bg-gradient-to-br bg-clip-text',
            'text-2xl tracking-widest font-bold uppercase',
          )}
        >
          Web Developer
        </h2>
      </div>
    </section>
  );
}

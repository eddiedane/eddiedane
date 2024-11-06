import { notable } from '@/app/assets/fonts';
import { cn } from '@/lib/utils';
import Orbit from '@/components/3d/orbit';

export default function Intro() {
  const firstName = 'Eddie';
  const lastName = 'Dane';

  return (
    <section id='intro' className='min-h-screen flex flex-col justify-center snap-start'>
      <div className='flex flex-col gap-8 -mb-24'>
        <h1
          id='names'
          className={cn(
            notable.className,
            '-mt-5',
            'text-7xl',
            'leading-none',
            'tracking-tighter',
            'flex flex-col',
            'container',
          )}
          style={{ perspective: '2000px' }}
          aria-label={`${firstName} ${lastName}`}
        >
          <span className='text-stone-700 dark:text-stone-100'>
            {firstName.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </span>
          <span className='text-stone-400 dark:text-stone-500'>
            {lastName.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </span>
        </h1>
        <h2
          className={cn(
            'bg-orange-500',
            'text-stone-950 text-2xl tracking-widest font-bold uppercase',
            'py-2',
          )}
        >
          <span className='container block'>Web Developer</span>
        </h2>
      </div>
      <div className='h-96 relative top-20'>
        <Orbit />
      </div>
    </section>
  );
}

import Logo from '@/components/logo';
import { cn } from '../lib/utils';

export default function Loading() {
  return (
    <div
      className={cn(
        'eddn-loader',
        'absolute z-[999] inset-0',
        'flex flex-col justify-center items-center',
        'bg-gradient-to-br from-stone-50 to-stone-400',
        'dark:bg-gradient-to-br dark:from-stone-800 dark:via-stone-900 dark:to-stone-900',
      )}
    >
      <Logo
        className='text-[clamp(4em,13vmin,6em)] leading-[0.8em] tracking-tighter font-thin'
        shuffle
      />
      <p className='text-stone-500 leading-normal tracking-normal mt-3'>{getGreeting()}</p>
    </div>
  );
}

const getGreeting = () => {
  const rand = process.env.NODE_ENV === 'development' ? 0 : Math.floor(Math.random() * 4);
  const hh = new Date().getHours();
  const greeting = hh < 12 ? 'Good morning' : hh < 18 ? 'Good afternoon' : 'Good evening';
  const hello = ['Hello', 'Hi', 'Hey', 'Hi there'][rand];

  return `${hello}, ${greeting}`;
};

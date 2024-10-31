import Image from 'next/image';
import { cn } from '@/lib/utils';
import { chakraPetch } from '@/app/assets/fonts';
import illoLogo from '@/app/assets/images/illo/logo.svg';
import illoAnalyticsCropped from '@/app/assets/images/illo/analytics-orders-mini.jpg';
import rakeConfig from '@/app/assets/images/rake/rake-config.png';

type ProjectCardProps = {
  size?: 72 | 64;
};

export default function Projects() {
  return (
    <section id='projects' className='min-h-screen flex flex-col justify-center gap-6'>
      <div className='container flex flex-col gap-2 text-center'>
        <h2 className='text-3xl font-extrabold tracking-tighter'>
          <span className='hidden'>From&nbsp;</span>Concepts to Reality
        </h2>
        <p className='prose prose-sm prose-stone leading-tight tracking-tight'>
          Every project starts with an idea. Here&apos;s a collection of my work and projects, where
          concepts are transformed into functional solutions and digital experiences.
        </p>
      </div>

      <ul className='flex items-start flex-nowrap overflow-y-hidden overflow-x-auto scrollbar-hidden gap-14 w-full px-5'>
        <li>
          <IlloProjectCard />
        </li>
        <li>
          <RakeProjectCard />
        </li>
      </ul>
    </section>
  );
}

function IlloProjectCard({ size = 72 }: ProjectCardProps) {
  return (
    <a
      href='#'
      className={cn('block', 'rounded-lg overflow-hidden', 'border-4 border-stone-700', {
        'min-w-72 max-w-72': size === 72,
        'min-w-64 max-w-64': size === 64,
      })}
    >
      <div
        role='img'
        aria-label='illo logo overlaying the order analytics page'
        className='flex items-center relative'
      >
        <Image src={illoAnalyticsCropped} alt='illo orders analytics page' />
        <div className='absolute inset-0 flex items-center justify-center bg-stone-50/50 backdrop-blur-[1.5px]'>
          <Image src={illoLogo} alt='illo logo' draggable={false} className='w-16 h-auto' />
          <span className='text-7xl font-semibold'>illo</span>
        </div>
      </div>
      <div className='p-3 text-sm leading-none'>
        <h3 className='inline font-semibold text-2xl'>illo&nbsp;</h3>
        <p className='inline'>
          Extensive <span className='inline-block'>e-commerce</span> and stores management platform.
        </p>
        <p className='text-xs font-extrabold text-stone-500 mt-3 lowercase smallcaps text-right'>
          <span className='text-sm'>
            Work at <span className='text-stone-950'>Dreama</span>
            <span className='text-blue-500'>x</span>
          </span>{' '}
          <br /> 2021 - 2023
        </p>
      </div>
    </a>
  );
}

function RakeProjectCard({ size = 72 }: ProjectCardProps) {
  return (
    <a
      href='#'
      className={cn('block', 'rounded-lg overflow-hidden', 'border-4 border-green-600', {
        'min-w-72 max-w-72': size === 72,
        'min-w-64 max-w-64': size === 64,
      })}
    >
      <div
        role='img'
        aria-label='illo logo overlaying the order analytics page'
        className='flex items-center relative'
      >
        <Image src={rakeConfig} alt='rake cli sample configuration file' />
        <div className='absolute inset-0 flex items-center justify-center bg-stone-950/50 backdrop-blur-[1.5px]'>
          <span className={cn(chakraPetch.className, 'text-7xl font-semibold text-green-600')}>
            rake
          </span>
        </div>
      </div>
      <div className='p-3 text-sm leading-none'>
        <h3 className='inline font-semibold text-2xl'>Rake&nbsp;</h3>
        <p className='inline'>Configuration base CLI tool for automation and web scraping.</p>
        <p className='text-xs font-extrabold text-stone-500 mt-3 lowercase smallcaps text-right'>
          <span className='text-sm'>Personal project</span> <br />{' '}
          <span className='text-green-700'>actively maintained</span>
        </p>
      </div>
    </a>
  );
}

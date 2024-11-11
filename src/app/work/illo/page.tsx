import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import analytics from '@/app/assets/images/illo/analytics-orders.jpg';
import orders from '@/app/assets/images/illo/orders.jpg';
import productListing from '@/app/assets/images/illo/product-listing.jpg';
import stores from '@/app/assets/images/illo/stores.jpg';
import illoLogo from '@/app/assets/images/illo/logo.svg';
import ProjectInfo from '@/components/project-info';
import Footer from '@/components/layout/footer';

type Info = {
  type: string;
  value: string | string[] | React.ReactElement;
};

type IlloImageryProps = {
  size?: 'base' | 'lg';
  className?: string;
};

const info: Info[] = [
  { type: 'category', value: 'Web Development' },
  { type: 'my role', value: 'Lead Fullstack Developer' },
  {
    type: 'responsibilities',
    value: [
      'Building backend APIs',
      'Collaborating on the frontend',
      'Developing custom migrations for onboarding clients',
    ],
  },
  {
    type: 'company',
    value: (
      <Link
        href='https://dreamax.co.il'
        target='_blank'
        className='hover:underline underline-offset-2'
      >
        <small className='tracking-widest'>
          Dreama
          <span
            className={cn(
              'dreamax-blue',
              'text-stone-400 dark:text-stone-600',
              'transition-colors duration-500 delay-75',
            )}
          >
            x
          </span>
        </small>
      </Link>
    ),
  },
  { type: 'year', value: '2021 - 2023' },
];

export default function IlloPage() {
  return (
    <>
      <main
        id='projects'
        className={cn(
          'pt-28 bg-stone-100 dark:bg-stone-900 min-h-52',
          'flex flex-col items-center gap-12',
          'min-h-screen max-w-screen',
        )}
      >
        <div className={cn('lg:container', 'flex justify-center gap-4')}>
          <IlloImagery className='rounded-2xl' size='lg' />
        </div>
        <div
          className={cn('lg:container', 'flex flex-col items-center gap-12 px-0 sm:px-0 w-full')}
        >
          <h1
            className={cn(
              'sm:text-5xl text-3xl font-bold text-center tracking-wider sm:leading-tight leading-tight',
            )}
          >
            <Link
              href='https://dreamax.co.il'
              target='_blank'
              className='underline underline-offset-4'
            >
              Dreama<span className='text-blue-500'>x</span>
            </Link>{' '}
            illo <span className='inline-block'>E-Commerce</span>
          </h1>
          <div
            className={cn(
              'flex flex-col lg:flex-row lg:justify-center w-full gap-16 lg:items-center',
              'w-full',
            )}
          >
            <p
              className={cn(
                'text-stone-900 dark:text-stone-100',
                'prose prose-stone sm:prose-xl prose-base',
                'lg:max-w-[26em]',
                'px-5 sm:px-10 lg:px-0',
              )}
            >
              illo is an <em className='text-orange-600'>exclusive</em> e-commerce platform aimed at
              providing clients with simplicity and flexibility in managing their businesses.
              Founded by Tal Hadi, a veteran in the e-commerce space, who was moved by his
              experience, to eliminate the frustrations with using other platforms and consolidate
              his innovations and working solutions in one{' '}
              <em className='text-orange-600'>premium</em> platform, hence illo was born.
            </p>

            <ProjectInfo info={info} />
          </div>

          <div
            className={cn(
              'flex flex-col justify-items-center items-center gap-16',
              'px-5 sm:px-10 mb-16',
              'w-full',
            )}
          >
            <div className='text-center'>
              <h2 className={cn('text-stone-900 dark:text-stone-100')}>Features</h2>
              <p className='prose prose-sm text-xs mt-2 text-yellow-700'>
                Below are some basic features that I can showcase.
              </p>
            </div>

            <div className={cn('grid grid-cols-12 grid-rows-6 md:gap-12')}>
              <figure className='col-span-12 row-span-3 xl:col-span-4 md:col-span-6 pl-8 pt-6 bg-stone-200 dark:bg-stone-800 rounded-2xl overflow-hidden md:mb-0 mb-10'>
                <figcaption className='mb-4'>
                  <h3 className='text-lg'>Analytics</h3>
                  <p className='text-xs w-full text-stone-600 dark:text-stone-400'>
                    Highly customizable and easy to comprehend business analysis.
                  </p>
                </figcaption>
                <Image
                  src={analytics}
                  width={240}
                  alt='Analytics'
                  className='w-full rounded-s-xl'
                />
              </figure>
              <figure className='col-span-12 row-span-3 xl:col-span-4 md:col-span-6 px-8 pb-6 bg-stone-200 dark:bg-stone-800 rounded-2xl overflow-hidden md:mb-0 mb-10'>
                <Image src={orders} width={640} alt='Orders' className='w-full rounded-b-xl' />
                <figcaption className='mt-4'>
                  <h3 className='text-lg'>Orders</h3>
                  <p className='text-xs w-full text-stone-600 dark:text-stone-400'>
                    Sophisticated order tracking and management.
                  </p>
                </figcaption>
              </figure>
              <figure className='col-span-12 row-span-3 xl:col-span-4 md:col-span-6 pr-8 pt-6 bg-stone-200 dark:bg-stone-800 rounded-2xl overflow-hidden md:mb-0 mb-10'>
                <figcaption className='mb-4 ml-8'>
                  <h3 className='text-lg'>Products Management</h3>
                  <p className='text-xs w-full text-stone-600 dark:text-stone-400'>
                    Advanced yet intuitive products management.
                  </p>
                </figcaption>
                <Image
                  src={productListing}
                  width={640}
                  alt='Product Listing'
                  className='w-full rounded-e-xl'
                />
              </figure>
              <figure className='col-span-12 row-span-3 xl:col-span-7 md:col-span-6 flex flex-col items-center lg:col-span-6 bg-stone-200 dark:bg-stone-800 rounded-2xl overflow-hidden md:mb-0 mb-10'>
                <figcaption className='mt-8 text-center mb-8 px-8'>
                  <h3 className='text-lg'>Manage multiple stores and employees</h3>
                  <p className='text-xs w-full text-stone-600 dark:text-stone-400'>
                    illo provides a comprehensive solution for managing multiple stores, as well as
                    individual store assets like employees access, products, orders, etc. all in a
                    unified interface.
                  </p>
                </figcaption>
                <Image
                  src={stores}
                  alt='Stores'
                  width={640}
                  className='rounded-t-xl xl:-mb-60 lg:-mb-20 -mb-32 w-[95%]'
                />
              </figure>
              <div className='col-span-12 row-span-3 xl:col-span-5 lg:col-span-8 flex flex-col gap-2 justify-center'>
                <h3 className='text-xl'>Experience working on illo</h3>
                <p className='prose prose-sm w-full text-stone-600 dark:text-stone-400'>
                  When I initially joined the team as a junior developer, I knew very little about
                  the inner workings of e-commerce. However, I was fortunate to have had the
                  opportunity to work with the founder who was an expert and with his patience and
                  guidance, I was able to learn and grow my skills, working on and implementing
                  features that I never would have imagined I could build.
                </p>
                <p className='prose prose-sm w-full text-stone-600 dark:text-stone-400'>
                  I learned to adapt and be flexible in different environment and situations,
                  <br /> I am forever grateful for the experience and the knowledge I gained while
                  working on illo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function IlloImagery({ size = 'base', className }: IlloImageryProps) {
  const sizes = {
    base: {
      wrapper: 'lg:w-[28em] sm:w-96 w-64',
      text: 'lg:text-[10em] sm:text-8xl text-7xl lg:-ml-24 -ml-16',
      image: 'lg:w-60 sm:w-56 w-40 my-4',
    },
    lg: {
      wrapper: 'lg:w-[48em] sm:w-[30em] w-72',
      text: 'lg:text-[14em] sm:text-9xl text-8xl lg:-ml-24 -ml-16',
      image: 'lg:w-[22em] sm:w-72 w-40 my-6',
    },
  };
  return (
    <span
      className={cn(
        'flex justify-center items-center squares-anim select-none',
        sizes[size].wrapper,
        className,
      )}
    >
      <Image
        src={illoLogo}
        alt="illo's logo"
        draggable={false}
        className={cn('opacity-20', sizes[size].image)}
      />
      <span className={cn('text-slate-950 font-semibold dark:text-stone-950', sizes[size].text)}>
        illo
      </span>
    </span>
  );
}

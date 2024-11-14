import Image from 'next/image';
import Link from 'next/link';
import { chakraPetch } from '@/app/assets/fonts';
import { cn } from '@/lib/utils';
import rakeExampleConfig from '@/app/assets/images/rake/rake-config.png';
import ProjectInfo, { Info } from '@/components/project-info';
import Footer from '@/components/layout/footer';

const info: Info[] = [
  { type: 'category', value: 'Open Source' },
  { type: 'my role', value: 'Creator & Maintainer' },
  {
    type: 'tech',
    value: 'Python, Playwright',
  },
  {
    type: 'PyPI',
    value: (
      <Link
        href='https://pypi.org/project/rake-python/'
        target='_blank'
        className='hover:underline underline-offset-2'
      >
        <small className='tracking-widest'>rake-python</small>
      </Link>
    ),
  },
  // { type: 'year', value: '2021 - 2023' },
];

export default function RakePage() {
  return (
    <>
      <main id='projects' className='min-h-screen bg-stone-200 dark:bg-stone-900'>
        <div className='container px-5 py-24 flex flex-col gap-12 items-center'>
          <div
            className={cn(
              chakraPetch.className,
              'text-green-600',
              'border-green-600 border-8',
              'text-7xl sm:text-9xl text-center font-black',
              'rounded-xl',
              'w-72 sm:w-[28rem] xl:w-[36rem] py-10 sm:py-12 xl:py-16',
            )}
          >
            rake
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='sm:text-4xl text-2xl font-bold text-center tracking-wider sm:leading-tight leading-tight'>
              Rake Configurable CLI Web Scraper
            </h1>
            <div className='grid grid-cols-12 grid-rows-1 gap-8'>
              <div className='prose prose-stone dark:prose-invert max-w-none col-span-12 lg:col-span-7 text-justify'>
                <p>
                  Rake is a powerful command-line interface (CLI) tool designed to simplify web
                  scraping and automation tasks through configuration-based workflows. Built with
                  Python, it provides an intuitive way to define complex scraping logic using YAML
                  configuration files rather than writing code directly.
                </p>

                <p className='hidden lg:block'>
                  At its core, Rake operates on the principle of declarative automation - users
                  describe what they want to accomplish rather than how to accomplish it. The tool
                  handles common web scraping challenges like request management, data extraction,
                  and error handling behind the scenes, allowing users to focus on defining their
                  desired outcomes.
                </p>

                <p>
                  Key features include support for multiple scraping strategies, built-in pagination
                  logic, flexible data transformation pipelines, and extensive configuration
                  options. Whether you're scraping product data or automating repetitive web tasks,
                  Rake provides a robust foundation while remaining approachable for users of all
                  technical levels.
                </p>

                <p>
                  The project is open-source and available as a PyPI package, making it easy to
                  integrate into existing Python environments. Its modular architecture allows for
                  easy extension through custom plugins called portals, while maintaining a clean
                  and consistent interface for basic use cases.
                </p>

                <p className='hidden lg:block'>
                  By abstracting away the complexities of web scraping into configuration files,
                  Rake enables rapid development of reliable scraping solutions without sacrificing
                  flexibility or control. This makes it a potential valuable tool for developers,
                  data analysts, and anyone else who needs to systematically extract data from the
                  web.
                </p>
              </div>
              <div className='col-span-12 flex flex-col items-center gap-8 lg:col-span-5'>
                <Image
                  src={rakeExampleConfig}
                  alt='Rake example config'
                  width={480}
                  className='max-w-full rounded-xl shadow-xl shadow-green-700'
                />
                <ProjectInfo info={info} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

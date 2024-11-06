import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IoAccessibility } from 'react-icons/io5';
import { FaAccessibleIcon } from 'react-icons/fa6';
import mysqlLogo from '@/app/assets/images/skills/mysql.png';
import mongodbLogo from '@/app/assets/images/skills/mongodb.png';
import postgresLogo from '@/app/assets/images/skills/postgresql.png';
import nextLogo from '@/app/assets/images/skills/next.png';
import nuxtLogo from '@/app/assets/images/skills/nuxt.svg';
import goLogo from '@/app/assets/images/skills/go.svg';
import nodeLogo from '@/app/assets/images/skills/node.svg';
import pythonLogo from '@/app/assets/images/skills/python.svg';
import grpcLogo from '@/app/assets/images/skills/grpc.svg';
import gitLogo from '@/app/assets/images/skills/git.svg';
import kubernetesLogo from '@/app/assets/images/skills/kubernetes.svg';
import dockerLogo from '@/app/assets/images/skills/docker.svg';
import awsLogo from '@/app/assets/images/skills/aws.svg';
import figmaLogo from '@/app/assets/images/skills/figma.svg';

type Skill = {
  name: string;
  className?: string;
  categories: string[];
  link: string;
  strong?: 1 | 2 | 3 | 4 | 5;
};

const FRONTEND = 'frontend';
const BACKEND = 'backend';
const FULLSTACK = 'fullstack';
const DATABASE = 'database';
const DEVOPS_INFRA = 'devops & infra';
const AUTOMATION_DATA_EXTRACTION = 'data extraction & automation';
const OTHER = 'others';

export default function Skills() {
  return (
    <section id='skills' className='min-h-screen flex flex-col justify-center gap-6 snap-start'>
      <div className='container flex flex-col gap-2 text-center'>
        <h2 className='text-3xl font-extrabold tracking-tighter'>
          Building Blocks<span className='hidden'> of My Work</span>
        </h2>
        <p className='prose prose-sm prose-stone dark:prose-invert leading-tight tracking-tight'>
          My continuous evolving skill set is a reflection of both my curiosity and ability to adapt
          to different technologies and environments.
        </p>
      </div>
      <div>
        <div className='container grid grid-cols-12 grid-rows-5 gap-2'>
          <div className='skills-block col-span-6 row-span-2 flex-col gap-1'>
            <div className='flex justify-center items-center gap-4'>
              <Image src={mysqlLogo} alt='MySQL' className='w-10 h-auto' />
              <Image src={postgresLogo} alt='PostgreSQL' className='w-10 h-auto' />
            </div>
            <Image src={mongodbLogo} alt='MongoDB' className='w-32 h-auto' />
          </div>
          <div className='skills-block col-span-2 row-span-1'>
            <Image src={nextLogo} alt='Next.js' className='w-14 h-auto' />
          </div>
          <div className='skills-block col-span-4 row-span-1 flex justify-center items-center'>
            <span
              className={cn(
                'text-2xl font-semibold text-stone-950 tracking-widest',
                'bg-gradient-to-r from-black to-green-600 bg-clip-text text-transparent',
              )}
            >
              MERN
            </span>
          </div>

          <div className='skills-block col-span-2 row-span-1'>
            <Image
              src={nuxtLogo}
              alt='Nuxt, the vue.js fullstack framework'
              className='sm:w-14 w-16 h-auto'
            />
          </div>

          <div className='skills-block row-span-1 col-span-4 relative'>
            <IoAccessibility className='absolute w-8 h-auto left-5 text-purple-800/80' />
            <FaAccessibleIcon className='absolute w-8 h-auto right-5 text-blue-800/80' />
          </div>

          <div className='skills-block col-span-7 row-span-2 flex-wrap gap-4'>
            <Image src={goLogo} alt='Go' className='w-14 h-auto' />
            <Image src={nodeLogo} alt='Node' className='w-12 h-auto' />
            <Image src={pythonLogo} alt='Python' className='w-8 h-auto' />
            <div className='flex gap-3 relative -top-4'>
              <Image src={grpcLogo} alt='gRPC' className='w-10 h-auto' />
              <span className={cn('text-sky-500 font-semibold')}>REST</span>
            </div>
          </div>

          <div className='skills-block col-span-5 row-span-1 gap-1'>
            <Image src={gitLogo} alt='Git' className='w-6 h-auto' />
            <Image src={kubernetesLogo} alt='Kubernetes' className='w-6 h-auto' />
            <Image src={dockerLogo} alt='Docker' className='w-16 h-auto' />
          </div>

          <div className='skills-block row-span-2 col-span-5'>
            <Image src={awsLogo} alt='AWS' className='sm:w-32 w-20 h-auto' />
          </div>

          <div className='skills-block col-span-2 row-span-1'>
            <Image src={figmaLogo} alt='Figma' className='w-6 h-auto' />
          </div>

          <div className='skills-block row-span-1 col-span-5'>
            <span className='text-2xl tracking-widest font-extrabold text-stone-950'>AGILE</span>
          </div>
        </div>
        <div>
          <Tabs defaultValue={BACKEND} className='mt-2'>
            <TabsList className='bg-transparent gap-4 p-0 m-0 overflow-x-auto scrollbar-hidden scroll-edge-sm px-4 w-full justify-start'>
              {getAllCategories().map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={cn(
                    'p-0',
                    'font-semibold',
                    'data-[state=active]:shadow-none',
                    'text-stone-400 data-[state=active]:text-stone-900 dark:data-[state=active]:text-stone-300',
                  )}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {getAllCategories().map((category) => (
              <TabsContent key={category} value={category} className='m-0'>
                <ul className='inline-flex gap-5 text-lg overflow-x-auto scroll-edge-sm px-4 scrollbar-hidden w-full'>
                  {getSkills()
                    .filter((skill) => skill.categories.includes(category))
                    .map((skill) => (
                      <li key={skill.name}>
                        <Link
                          href={skill.link}
                          target='_blank'
                          className={cn('hover:underline underline-offset-2', {
                            'font-black': skill.strong === 5,
                            'font-extrabold': skill.strong === 4,
                            'font-semibold': skill.strong === 3,
                            'font-medium': skill.strong === 2,
                            'font-normal': skill.strong === 1,
                          })}
                        >
                          {skill.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function getSkills() {
  const FRONTEND = 'frontend';
  const BACKEND = 'backend';
  const FULLSTACK = 'fullstack';
  const DATABASE = 'database';
  const DEVOPS_INFRA = 'devops & infra';
  const AUTOMATION_DATA_EXTRACTION = 'data extraction & automation';
  const OTHER = 'others';

  const skillsData: Skill[] = [
    { name: 'AWS', strong: 2, categories: [DEVOPS_INFRA], link: 'https://aws.amazon.com/' },
    { name: 'Django', categories: [FULLSTACK], link: 'https://www.djangoproject.com/' },
    { name: 'Docker', strong: 5, categories: [DEVOPS_INFRA], link: 'https://www.docker.com/' },
    { name: 'Express', strong: 3, categories: [BACKEND], link: 'https://expressjs.com/' },
    { name: 'Fiber', strong: 4, categories: [BACKEND], link: 'https://gofiber.io/' },
    { name: 'Figma', strong: 3, categories: [OTHER], link: 'https://www.figma.com/' },
    { name: 'Flask', categories: [BACKEND], link: 'https://flask.palletsprojects.com/' },
    { name: 'Git', strong: 5, categories: [DEVOPS_INFRA], link: 'https://git-scm.com/' },
    { name: 'Golang', strong: 5, categories: [BACKEND], link: 'https://golang.org/' },
    { name: 'Kubernetes', categories: [DEVOPS_INFRA], link: 'https://kubernetes.io/' },
    { name: 'Laravel', categories: [BACKEND, FULLSTACK], link: 'https://laravel.com/' },
    { name: 'MongoDB', categories: [DATABASE], link: 'https://www.mongodb.com/' },
    { name: 'MySQL', strong: 5, categories: [DATABASE], link: 'https://www.mysql.com/' },
    { name: 'Next.js', strong: 4, categories: [FRONTEND, FULLSTACK], link: 'https://nextjs.org/' },
    { name: 'Node.js', strong: 4, categories: [BACKEND], link: 'https://nodejs.org/' },
    { name: 'Nuxt', categories: [FRONTEND, FULLSTACK], link: 'https://nuxtjs.org/' },
    { name: 'PHP', categories: [BACKEND, FULLSTACK], link: 'https://www.php.net/' },
    {
      name: 'Playwright',
      strong: 4,
      categories: [AUTOMATION_DATA_EXTRACTION],
      link: 'https://playwright.dev/',
    },
    { name: 'PostgreSQL', categories: [DATABASE], link: 'https://www.postgresql.org/' },
    {
      name: 'Puppeteer',
      strong: 3,
      categories: [AUTOMATION_DATA_EXTRACTION],
      link: 'https://pptr.dev/',
    },
    {
      name: 'Python',
      strong: 4,
      categories: [BACKEND, AUTOMATION_DATA_EXTRACTION],
      link: 'https://www.python.org/',
    },
    { name: 'React', strong: 4, categories: [FRONTEND], link: 'https://reactjs.org/' },
    { name: 'Redis', strong: 3, categories: [DATABASE], link: 'https://redis.io/' },
    { name: 'Scrapy', categories: [AUTOMATION_DATA_EXTRACTION], link: 'https://scrapy.org/' },
    /* {
      name: 'Selenium',
      categories: [AUTOMATION_DATA_EXTRACTION],
      link: 'https://www.selenium.dev/',
    }, */
    { name: 'Ts.ED', strong: 3, categories: [BACKEND], link: 'https://tsed.io/' },
    { name: 'Vue', strong: 2, categories: [FRONTEND], link: 'https://vuejs.org/' },
  ];

  return skillsData.sort((a, b) => a.name.localeCompare(b.name));
}

function getAllCategories() {
  return [BACKEND, FRONTEND, FULLSTACK, DATABASE, DEVOPS_INFRA, AUTOMATION_DATA_EXTRACTION, OTHER];
}

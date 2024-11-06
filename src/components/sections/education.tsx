import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import cs50xGoldFramed from '@/app/assets/images/trophies/cs50x-gold-framed.png';
import cs50pGoldFramed from '@/app/assets/images/trophies/cs50p-gold-framed.png';
import cs50wGoldFramed from '@/app/assets/images/trophies/cs50w-gold-framed.png';
import atomicHabits from '@/app/assets/images/books/atomic-habits.jpg';
import dockerDeepDive from '@/app/assets/images/books/docker-deep-dive.jpg';
import identityMan from '@/app/assets/images/books/solving-identity-management.jpg';
import Book from '@/components/book';

type Trophy = {
  name: string;
  src: string;
  image: StaticImageData;
};

type Book = {
  name: string;
  image: StaticImageData;
};

const booksData: Book[] = [
  {
    name: 'Atomic Habit',
    image: atomicHabits,
  },
  {
    name: 'Docker: Deep Dive',
    image: dockerDeepDive,
  },
  {
    name: 'Solving Identity Management',
    image: identityMan,
  },
];

const trophiesData: Trophy[] = [
  {
    name: 'Harvard CS50x',
    src: 'https://cs50.harvard.edu/certificates/d62d2dd0-f205-4e8f-8547-1fa8919a9454',
    image: cs50xGoldFramed,
  },
  {
    name: 'Harvard CS50 Web',
    src: 'https://cs50.harvard.edu/certificates/85a59c86-43fe-4620-9ed4-284f5a30a224',
    image: cs50wGoldFramed,
  },
  {
    name: 'Harvard CS50 Python',
    src: 'https://cs50.harvard.edu/certificates/af646804-2374-4263-97d2-8943ca88b586',
    image: cs50pGoldFramed,
  },
];

export default function Education() {
  return (
    <section className='min-h-screen flex flex-col justify-center snap-start'>
      <div className='flex flex-col items-center gap-6'>
        <h2 className='text-3xl font-extrabold tracking-tighter text-center px-5'>
          <span className='hidden'>My Journey of </span>Growth & Knowledge
        </h2>
        <div className='relative self-start w-full'>
          <h3 className='sr-only'>Certificates and Trophies</h3>
          <div
            className={cn(
              'flex flex-nowrap',
              'overflow-x-auto overflow-y-hidden',
              'w-full',
              'gap-6',
              'px-5',
              'items-end',
              'scrollbar-hidden',
            )}
          >
            {trophiesData.map(({ name, image, src }, i) => (
              <Link
                href={src}
                target='_blank'
                className='trophy-sm flex flex-col items-center gap-3'
                key={i}
              >
                <Image
                  src={image}
                  key={name}
                  alt={name + ' certificate'}
                  className='max-w-40 border'
                />
                <span className='text-sm font-semibold text-stone-400 dark:text-stone-300 hover:underline underline-offset-2'>
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <p className='container prose prose-sm prose-stone dark:prose-invert leading-tight tracking-tight text-justify'>
          Everything I know about programming today is largely the fruit of self-directed learning
          and the invaluable knowledge I have gained from industry experts. Every course, read,
          coding session and project have shaped who I am as a developer and individual, with each
          challenge pushing me to be more resilient, adaptable and creative.
        </p>
        <div className='relative'>
          <h3 className='sr-only'>Books</h3>
          <div className='flex gap-8 flex-nowrap items-end overflow-x-auto hide-scrollbar w-full lg:px-0 sm:px-10 px-5'>
            {booksData.map(({ name, image }, i) => (
              <Book className='edu-book-sm' image={image} key={i} title={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

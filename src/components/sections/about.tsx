import { cn } from '@/lib/utils';
import Image from 'next/image';
import Contacts from '@/components/contacts';
import Message from '@/components/message';
import profilePicture from '@/app/assets/images/profile.jpeg';
import Link from 'next/link';

export default function About() {
  return (
    <section id='about' className='relative overflow-hidden snap-start'>
      <div className={cn('flex flex-col gap-6', 'pt-14 pb-8', 'min-h-screen')}>
        <div className='relative z-10'>
          <Image
            src={profilePicture}
            alt="Eddie Dane's Portrait"
            className='max-w-full grayscale transition-all duration-1000 hover:grayscale-0'
          />
        </div>
        <div>
          <div
            className={cn(
              '-mt-64 pt-12 px-5',
              'relative z-20',
              'bg-gradient-to-b from-transparent via-stone-50 to-stone-100 to-50% dark:via-stone-700 via-15% dark:to-stone-800',
            )}
          >
            <h2 className='text-3xl font-extrabold text-center my-4 tracking-tighter'>
              The Guy Behind the Code
            </h2>
            <div>
              <p className='prose-base abt-item flex flex-col gap-2 text-justify'>
                <em className='font-black text-lg'>
                  A web developer, dedicated to building user-friendly, efficient and scalable web
                  applications, with over 5 years of experience.&nbsp;
                  <Link
                    href='#'
                    className={cn(
                      'inline-block',
                      'uppercase text-base text-orange-700 font-black tracking-wider',
                      'no-underline hover:underline',
                      'p-0',
                    )}
                  >
                    view my résumé
                  </Link>
                </em>
                <span>
                  Thinking back to my early days with programming , from writing HTML on my phone
                  when I didn’t yet have a computer to now building and deploying fully functional
                  web apps and tools, one of the things that have remained unchanged about me is my
                  endless fascination with programming, the fact that I can programmatically
                  describe an idea with code and bring it to reality, has given me a creative
                  freedom that drives my love and obsession for developing for the web
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

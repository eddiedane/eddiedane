'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { CgMenuRight } from 'react-icons/cg';
import FragLink from '@/components/frag-link';
import Contacts from '@/components/contacts';

type DrawerProps = {
  activeSection?: string;
};

export default function Drawer({ activeSection }: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { text: 'Skills', href: '/#skills' },
    { text: 'Projects', href: '/#projects' },
    { text: 'Intro', href: '/#intro' },
    { text: 'Education', href: '/#education' },
    { text: 'About', href: '/#about' },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          size='icon'
          className={cn(
            'bg-transparent hover:bg-transparent',
            'active:scale-95',
            'shadow-none',
            'text-stone-900 dark:text-stone-100',
            '[&_svg]:size-10',
          )}
        >
          <CgMenuRight className='text-9xl' />
        </Button>
      </SheetTrigger>
      <SheetHeader className='sr-only'>
        <SheetTitle>Navigation</SheetTitle>
        <SheetDescription>Page links and contacts</SheetDescription>
      </SheetHeader>
      <SheetContent
        className='border-none flex justify-end items-center shadow-none'
        overlayClassName='backdrop-blur-lg bg-stone-100/60 dark:bg-stone-900/60'
        closeClassName='h-10 w-10'
      >
        <ul className='flex flex-col justify-center items-end gap-8 text-4xl h-full text-stone-900 dark:text-stone-100'>
          {navigation
            .filter(({ text }) => text.toLowerCase() !== 'intro')
            .map(({ text }, i) => (
              <li key={i} className='lowercase smallcaps font-extrabold'>
                <Link
                  href={`/#${text.toLowerCase()}`}
                  className={cn('block active:scale-95 border-b-4', {
                    'border-orange-300': activeSection?.toLowerCase() === text.toLowerCase(),
                  })}
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </Link>
              </li>
            ))}

          <li className='w-full mt-10'>
            {<Contacts showLabel={false} />}
            <Link
              href='/contact'
              className={cn(
                'cta-btn',
                'flex items-center justify-center h-12 rounded-md px-6 text-xl',
                'gap-2 mt-4',
              )}
            >
              <BiSolidMessageDetail className={cn('w-7 h-7', 'bg-stone-900', 'rounded-sm')} />
              <strong>Get in touch</strong>
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

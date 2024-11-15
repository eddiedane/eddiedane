import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

type BookProps = {
  image: string | StaticImageData;
  title: string;
  className?: string;
  loading?: 'eager' | 'lazy';
};

export default function Book({ image, title, className, loading = 'lazy' }: BookProps) {
  return (
    <div className={cn('book z-10', className)} aria-label={title}>
      <div className='book-cover'>
        <Image
          loading={loading}
          src={image}
          alt='book cover'
          className={cn('h-auto', 'sm:max-w-24 max-w-20')}
        />
        <div className='book-effect'></div>
        <div className='book-light'></div>
        <div className='book-shadow'></div>
      </div>
      <div className='book-inside'></div>
    </div>
  );
}

'use client';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export default function Pizazz() {
  const hash = typeof window !== 'undefined' ? window.location.hash : '';

  useGSAP(() => {
    // Intro Section
    const animSpanFrom = {
      'will-change': 'opacity, transform',
      'opacity': 0,
    };

    const animSpanTo = {
      duration: 0.62,
      opacity: 1,
      rotationX: 0,
      yPercent: 0,
      ease: 'power1.inOut',
      stagger: {
        each: 0.1,
      },
    };

    gsap
      .timeline()
      .delay(1)
      .fromTo(
        '#intro-content',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.05,
        },
      )
      .fromTo(
        '#names > span:nth-child(1)',
        Object.assign(Object.assign({}, animSpanFrom), {
          rotationX: 90,
          yPercent: -50,
        }),
        animSpanTo,
      )
      .fromTo(
        '#names > span:nth-child(2)',
        Object.assign(Object.assign({}, animSpanFrom), { rotationX: -90, yPercent: 50 }),
        animSpanTo,
        '<',
      )
      .fromTo(
        '#names span > .after',
        {
          width: '100%',
        },
        {
          duration: 0.72,
          ease: 'expo.inOut',
          width: '0%',
        },
        'end',
      )
      .from(
        '.intro-item',
        {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.1,
        },
        0,
      )
      .from('header li', {
        y: -50,
        opacity: 0,
        scale: 1.1,
        stagger: {
          amount: 0.1,
          grid: [1, 5],
          // axis: axis,
          // ease: ease,
          from: 'center',
        },
      });
  });

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      const scrollElement = document.querySelector('.snap-mandatory');

      if (element && scrollElement) {
        const yOffset = element.getBoundingClientRect().top + scrollElement.scrollTop;
        scrollElement.scrollTo({
          top: yOffset,
          behavior: 'instant',
        });
      }
    }
  }, [hash]);

  return null;
}

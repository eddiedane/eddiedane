'use client';

import FragLink from '@/components/frag-link';
import Logo from '@/components/logo';
import Drawer from '@/components/drawer';
// import { useState } from 'react';

export default function Header() {
  // const [activeSection, setActiveSection] = useState('Intro');

  return (
    <header className='fixed top-0 left-0 right-0 z-50 h-14 backdrop-blur-2xl bg-[#fafaf900] border-b'>
      <nav className='container h-full w-full flex items-center'>
        <div className='w-full flex items-center justify-between'>
          <FragLink href='/#intro'>
            <Logo shuffle={false} />
          </FragLink>
          <div className='flex justify-between items-center gap-3'>
            {/* <span className='font-semibold'>{activeSection}</span> */}
            <Drawer /* activeSection={activeSection} */ />
          </div>
        </div>
      </nav>
    </header>
  );
}

import Intro from '@/components/sections/intro';
import Header from '@/components/header';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects />
        <Skills />
      </main>
    </>
  );
}

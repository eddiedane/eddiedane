import Intro from '@/components/sections/intro';
import Header from '@/components/header';
import Projects from '@/components/sections/projects';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects />
      </main>
    </>
  );
}

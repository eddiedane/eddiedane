import Header from '@/components/layout/header';
import Intro from '@/components/sections/intro';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Education from '@/components/sections/education';
import About from '@/components/sections/about';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects />
        <Skills />
        <About />
        <Education />
      </main>
      {/* <Footer /> */}
    </>
  );
}

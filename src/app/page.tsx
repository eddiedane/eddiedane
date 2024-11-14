// import Intro from '@/components/sections/intro';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Education from '@/components/sections/education';
import About from '@/components/sections/about';
// import Footer from '@/components/layout/footer';
// import Pizazz from '@/components/pizazz';

export default function Home() {
  return (
    <>
      <main>
        {/* <Pizazz /> */}
        {/* <Intro /> */}
        <Projects />
        <Skills />
        <About />
        <Education />
      </main>
      {/* <Footer /> */}
    </>
  );
}

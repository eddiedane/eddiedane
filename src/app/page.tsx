import Intro from '@/components/sections/intro';
import Header from '@/components/header';

export default function Home() {
  const firstName = 'Eddie';
  const lastName = 'Dane';

  return (
    <>
      <Header />
      <main className='container'>
        <Intro />
      </main>
    </>
  );
}

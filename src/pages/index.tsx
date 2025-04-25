import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PlanosCards from '../components/PlanosCards';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CZnet - Internet de Fibra Óptica</title>
        <meta name="description" content="Os melhores planos de internet fibra óptica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <PlanosCards />
      </main>
    </div>
  );
};

export default Home;
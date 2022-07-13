import Head from 'next/head';
import Image from 'next/image';

// components
import { Hero, Skills, Divider } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Allan LaDev | Web Developer</title>
        <meta name='description' content='Create Next App' />
      </Head>
      <>
        <Hero />
        <Divider />
        <Skills />
        <Divider />
      </>
    </>
  );
}

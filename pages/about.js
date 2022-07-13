import Head from 'next/head';
import About from '../components/About/About';

const About_page = () => {
  return (
    <>
      <Head>
        <title>Allan LaDev | About Me</title>
        <meta name='description' content='Create Next App' />
      </Head>
      <>
        <About />
      </>
    </>
  );
};
export default About_page;

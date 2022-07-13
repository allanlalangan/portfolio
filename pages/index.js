import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.scss';
import { projects, about } from '../static/data';

// components
import { Hero, Skills, Divider, ProjectCard } from '../components';

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
        <h1 className={styles.heading}>Recent Projects</h1>

        <Divider />
        <section>
          {projects.map((project) => (
            <ProjectCard key={project} project={project} />
          ))}
        </section>
        <button className={styles['action-button']}>
          {about.actionCall_2}
        </button>
      </>
    </>
  );
}

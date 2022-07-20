import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.scss';
import { projects, about } from '../static/data';

// components
import { Hero, Skills, Divider, ProjectCard, About } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Allan LaDev | Web Developer</title>
        <meta name='description' content='Create Next App' />
      </Head>
      <>
        <Hero />
        {/* <Divider /> */}
        <h2 className={styles.heading}>Recent Projects</h2>
        <section className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </section>
        {/* <Divider /> */}
        <h2 className={styles.heading}>More About Me</h2>
        <About />
        {/* <Divider /> */}
        <h2 className={styles.heading}>Skills</h2>
        <Skills />
        <button className={styles['action-button']}>
          {about.actionCall_2}
        </button>
      </>
    </>
  );
}

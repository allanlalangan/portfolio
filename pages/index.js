import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.scss';
import { projects, otherProjects, about } from '../public/data';

// components
import {
  Hero,
  SkillsBanner,
  Divider,
  ProjectCard,
  About,
  Contact,
} from '../components';
import {
  CssIcon,
  HtmlIcon,
  JsIcon,
  MuiIcon,
  NpmIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
} from '../components/ui/icons';
import { FaGithub } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContextProvider';
import Skills from '../components/Skills/Skills';
import OtherProject from '../components/OtherProject/OtherProject';

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Allan LaDev | Web Developer</title>
        <meta name='description' content='Create Next App' />
      </Head>
      <>
        <Hero />
        {/* <Divider /> */}
        <h1
          className={`${styles[theme]} ${styles.heading} ${styles['contrast-heading']}`}
        >
          Recent Projects
        </h1>
        <section className={styles.projects}>
          <ul>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </ul>
          <ul>
            {otherProjects.map((project) => (
              <OtherProject key={project.title} project={project} />
            ))}
          </ul>
        </section>
        <section className={styles['other-projects']}></section>
        {/* <Divider /> */}
        {/* <h1 className={styles.heading}>Primary Skills</h1> */}
        <SkillsBanner />

        <h1 className={`${styles[theme]} ${styles.heading}`}>Skills</h1>
        <Skills />

        <h1 className={`${styles[theme]} ${styles.heading}`}>More About Me</h1>
        <section className={styles.about}>
          <About />
        </section>
        {/* <Divider /> */}
        <h1
          className={`${styles[theme]} ${styles.heading} ${styles['contrast-heading']}`}
        >
          Contact
        </h1>
        <section className={styles.contact}>
          <Contact />
        </section>
        {/* <button className={styles['action-button']}>
          {about.actionCall_2}
        </button> */}
      </>
    </>
  );
}

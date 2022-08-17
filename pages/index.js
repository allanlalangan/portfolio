import Head from 'next/head';
import styles from './index.module.scss';
import { projects, otherProjects } from '../public/data';

// components
import { Hero, SkillsBanner, ProjectCard, About, Contact } from '../components';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../store/ThemeContextProvider';
import Skills from '../components/Skills/Skills';
import OtherProject from '../components/OtherProject/OtherProject';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const projectsRef = useRef();
  return (
    <>
      <Head>
        <title>Allan LaDev | Web Developer</title>
        <meta name='description' content='Create Next App' />
      </Head>
      <>
        <Hero />

        <h1
          className={`${styles[theme]} ${styles.heading} ${styles['contrast-heading']}`}
        >
          Recent Projects
        </h1>
        <section className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          {otherProjects.map((project) => (
            <OtherProject key={project.title} project={project} />
          ))}
        </section>
        <SkillsBanner />

        <h1 className={`${styles[theme]} ${styles.heading}`}>Skills</h1>
        <Skills />

        <h1 className={`${styles[theme]} ${styles.heading}`}>More About Me</h1>
        <section className={styles.about}>
          <About />
        </section>

        <h1
          className={`${styles[theme]} ${styles.heading} ${styles['contrast-heading']}`}
        >
          Contact
        </h1>
        <section className={styles.contact}>
          <Contact />
        </section>
      </>
    </>
  );
};

export default Home;

import styles from './About.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContextProvider';
import Image from 'next/image';

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={styles.container}>
        <article className={styles.bio}>
          <h2 className={`${styles.greeting} ${styles.greeting}`}>Hello! 👋</h2>
          <p className={styles.__text}>
            I&apos;m Allan. Web developer, life long learner, and dreamer. I
            build responsive web apps that look good and are easy to use. All
            designed, themed and styled by me.
          </p>
          <p className={styles.__text}>
            I&apos;ve been coding for 5 years and currently transitioning
            careers from the service industry. My focus is to gain experience
            and continue to improve my skills while learning industry standards
            and conventions.
          </p>
          <p className={styles.__text}>
            I build single and multi page applications with client and server
            side rendering. I can build static or dynamic websites that
            implement a backend and interact with users. I am here to help you
            grow your vision and improve your product through better user
            experience.
          </p>
        </article>
        {/* <figure className={styles.portrait}>
          <Image src={about.portrait} alt='Allan Lalangan' />
        </figure> */}
      </section>
    </>
  );
};
export default About;

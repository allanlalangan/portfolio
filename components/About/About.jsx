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
            I&apos;m Allan. A life long learner, artist, and dreamer. I&apos;m a
            Web Developer specializing in front end technologies. I build
            responsive and visually appealing apps that are easy to use. All
            designed, themed and styled by me.
          </p>
          <p className={styles.__text}>
            I&apos;ve been coding for 3 years and currently transitioning
            careers from the service industry. My focus is to gain experience
            and continue to improve my skills while learning industry standards
            and conventions.
          </p>
          <p className={styles.__text}>
            I build full-stack, single and multi page applications with client
            and server side rendering. Together, we can improve your product
            through better user experience.
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

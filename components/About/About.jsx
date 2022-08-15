import { SiNextdotjs, SiSass, SiTailwindcss } from 'react-icons/si';
import styles from './About.module.scss';
import { FaGithub } from 'react-icons/fa';

import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  MuiIcon,
  NpmIcon,
} from '../ui/icons';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContextProvider';

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={styles.container}>
        <h2 className={`${styles.greeting} ${styles.greeting}`}>Hello! 👋</h2>
        <article className={styles.bio}>
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

        {/* <h2 className={`${styles.heading}`}>What I am currently learning:</h2>

        <article className={`${styles['currently-learning']}`}>
          <h3 className={styles.__subheading}>ARIA and accessibility</h3>
          <p className={styles.__blurb}>
            Inclusivity is important! Tech is growing fast and I believe its our
            responsibility as developers to ensure no one gets left behind
            during its evolution. Design, semantic HTML, and ARIA are a few ways
            to make apps more accessible. The web should be for everyone!
          </p>
          <h3 className={styles.__subheading}>Styling Options</h3>
          <figure className={styles.icons}>
            <SiSass className={styles.icon} />
            <SiTailwindcss className={styles.icon} />
          </figure>
          <p className={styles.__blurb}>
            I love CSS and I strongly believe in using pure CSS in my projects.
            SASS has made styling an easier and more streamlined process with
            mixins, variables etc.
          </p>
        </article> */}
      </section>
    </>
  );
};
export default About;

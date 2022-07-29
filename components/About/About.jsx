import { SiNextdotjs, SiSass } from 'react-icons/si';
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

const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={`${styles.greeting} ${styles.greeting}`}>Hello 👋</h2>
      <article className={styles['about-me']}>
        <p>
          I&apos;m Allan; a Portland, OR based front end developer, life long
          learner, and dreamer. I build responsive web apps that are easy to
          use, and look good. All styled, themed and designed by me.
        </p>
      </article>

      {/* <h2>Skills</h2>
      <article className={styles.skills}>
        <h3>Fundamentals</h3>
        <figure>
          <HtmlIcon className={styles['svg-icon']} />
          <CssIcon className={styles['svg-icon']} />
          <JsIcon className={styles['svg-icon']} />
          <figcaption>Semantic html, CSS modules, and Javascript</figcaption>
        </figure>
        <h3>Front end libraries and state management</h3>
        <figure>
          <ReactIcon className={styles['svg-icon']} />
          <ReduxIcon className={styles['svg-icon']} />
          <SiNextdotjs size={'3rem'} />
        </figure>
        <h3>Tools</h3>
        <figure>
          <FaGithub className={styles['font-icon']} />
          <NpmIcon className={styles['svg-icon']} />
        </figure>
        <h3>UI</h3>
        <figure>
          <SassIcon className={styles['svg-icon']} />
          <MuiIcon className={styles['svg-icon']} />
          <figcaption>
            Custom design, templates, themes and styled components with Sass and
            Material UI
          </figcaption>
        </figure>
      </article> */}

      {/* <h2 className={`${styles.heading}`}>What I am currently learning:</h2>

      <article className={`${styles['currently-learning']}`}>
        <h3 className={styles.subheading}>ARIA and accessibility</h3>
        <p>
          Inclusivity is important! Tech is growing fast and I believe its our
          responsibility as developers to ensure no one gets left behind during
          its evolution. Design, semantic HTML, and ARIA are a few ways to make
          apps more accessible. The web should be for everyone!
        </p>
        <h3 className={styles.subheading}>Sass</h3>
        <figure>
          <SiSass size={'3rem'} />
          <p>
            I love CSS and I strongly believe in using pure CSS in my projects.
            SASS has made styling an easier and more streamlined process with
            mixins, variables etc.
          </p>
        </figure>
        <h3>Next.js</h3>
        <figure>
          <SiNextdotjs size={'3rem'} />
          <p>
            React is my go to library for building interfaces, which may change,
            considering how powerful NextJS is!
          </p>
        </figure>
        <p></p>
      </article> */}
    </section>
  );
};
export default About;

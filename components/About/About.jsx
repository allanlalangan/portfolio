import { SiNextdotjs, SiSass } from 'react-icons/si';
import styles from './About.module.scss';

const About = () => {
  return (
    <section>
      <h2>Hello</h2>
      <p>
        I&apos;m Allan; a Portland, OR based front end developer and a life long
        learner. I build responsive web apps that are easy to use, intuitive and
        fun, all while ensuring an accessible user experience. All styled,
        themed and designed by me.
      </p>

      <h2>What I am currently learning:</h2>
      <p>ARIA and accessibility</p>
      <article>
        <figure>
          <SiSass size={'3rem'} />
          <figcaption>Sass</figcaption>
        </figure>

        <p>I&apos;m always brushing up o</p>
      </article>
      <article>
        <figure>
          <SiNextdotjs size={'3rem'} />
          <figcaption>Next.js</figcaption>
          <p></p>
        </figure>
        <p></p>
      </article>
      <p></p>
    </section>
  );
};
export default About;

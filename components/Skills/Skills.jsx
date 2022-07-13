import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <article className={`${styles.skills} grid-row`}>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <Image
          alt='html5 icon'
          className={styles['svg-icon']}
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <Image
          alt='css3 icon'
          className={styles['svg-icon']}
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <Image
          alt='javascript icon'
          className={styles['svg-icon']}
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <Image
          alt='reactjs icon'
          className={styles['svg-icon']}
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <Image
          alt='redux icon'
          className={styles['svg-icon']}
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
        />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <Image
          alt='sass icon'
          className={styles['svg-icon']}
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
        />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <Image
          alt='materialui icon'
          className={styles['svg-icon']}
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
        />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <FaGithub aria-label='github icon' className={styles['skills__icon']} />
      </figure>
      {/* <Image
        alt='icon'
        className={styles['svg-icon']}
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      /> */}
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <Image
          alt='npm icon'
          className={styles['svg-icon']}
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
        />
      </figure>
    </article>
  );
};
export default Skills;

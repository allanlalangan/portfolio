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

import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <article className={`${styles.skills} grid-row`}>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <HtmlIcon className={styles['svg-icon']} />
        <figcaption>html</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <CssIcon className={styles['svg-icon']} />
        <figcaption>css</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <JsIcon className={styles['svg-icon']} />
        <figcaption>javascript</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <ReactIcon className={styles['svg-icon']} />
        <figcaption>react</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <ReduxIcon className={styles['svg-icon']} />
        <figcaption>redux</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <SassIcon className={styles['svg-icon']} />
        <figcaption>sass</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <MuiIcon className={styles['svg-icon']} />
        <figcaption>material ui</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <FaGithub aria-label='github icon' className={styles['skills__icon']} />
        <figcaption>github</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <NpmIcon className={styles['svg-icon']} />
        <figcaption>npm</figcaption>
      </figure>
    </article>
  );
};
export default Skills;

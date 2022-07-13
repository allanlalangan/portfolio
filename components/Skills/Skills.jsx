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
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <CssIcon className={styles['svg-icon']} />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <JsIcon className={styles['svg-icon']} />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <ReactIcon className={styles['svg-icon']} />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-md`}
      >
        <ReduxIcon className={styles['svg-icon']} />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <SassIcon className={styles['svg-icon']} />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <MuiIcon className={styles['svg-icon']} />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <FaGithub aria-label='github icon' className={styles['skills__icon']} />
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-md`}
      >
        <NpmIcon className={styles['svg-icon']} />
      </figure>
    </article>
  );
};
export default Skills;

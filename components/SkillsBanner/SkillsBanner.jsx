import { FaGithub } from 'react-icons/fa';
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  MuiIcon,
  TwIcon,
  NpmIcon,
} from '../ui/icons';

import styles from './SkillsBanner.module.scss';

const SkillsBanner = () => {
  return (
    <article className={`${styles.skills} grid-row`}>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-lg`}
      >
        <HtmlIcon className={styles['svg-icon']} />
        <figcaption>html</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-lg`}
      >
        <CssIcon className={styles['svg-icon']} />
        <figcaption>css</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-lg`}
      >
        <JsIcon className={styles['svg-icon']} />
        <figcaption>javascript</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-lg`}
      >
        <ReactIcon className={styles['svg-icon']} />
        <figcaption>react</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-2-sm col-1-lg`}
      >
        <ReduxIcon className={styles['svg-icon']} />
        <figcaption>redux</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-lg`}
      >
        <SassIcon className={styles['svg-icon']} />
        <figcaption>sass</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-lg`}
      >
        <TwIcon className={styles['svg-icon']} />
        <figcaption>tailwind css</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-lg`}
      >
        <FaGithub aria-label='github icon' className={styles['skills__icon']} />
        <figcaption>github</figcaption>
      </figure>
      <figure
        className={`${styles['icon-container']} col-4-xs col-3-sm col-1-lg`}
      >
        <NpmIcon className={styles['svg-icon']} />
        <figcaption>npm</figcaption>
      </figure>
    </article>
  );
};
export default SkillsBanner;

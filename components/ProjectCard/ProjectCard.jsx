import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContextProvider';
import { FaGithub, FaLink, FaSearch } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';

import styles from './ProjectCard.module.scss';
import TechIcon from '../ui/TechIcon/TechIcon';

const ProjectCard = ({
  project: { title, description, tech, image, repo, url, complete, demo },
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <article className={`${styles['container']} ${styles[theme]}`}>
      <section className={styles['project-header']}>
        <h2 className={styles.__title}>{title}</h2>
        {!complete && (
          <span className={styles['progress-message']}>
            currently building...
          </span>
        )}
      </section>
      <section className={styles['tech-stack']}>
        <h3 className={styles['tech-heading']}>Tech Stack</h3>
        <ul className={`${styles['tech-list']} grid-row`}>
          {tech?.map((t) => (
            <li className={styles.tech} key={t}>
              <TechIcon tech={t} styles={styles['tech-icon']} />
              <span className={styles['tech-caption']}>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles['previews']} `}>
        <figure className={`${styles['__preview']}`}>
          <Image className={styles.__image} src={image.src} alt={image.alt} />
        </figure>
        {/* <figure
          className={`${styles['__preview']} ${styles['__preview--mobile']}`}
        ></figure> */}
      </section>
      <article className={`${styles['project-info']} `}>
        <p>{description}</p>
      </article>
      {demo?.email && demo?.password && (
        <section className={styles['demo']}>
          <h4 className={`${styles['demo-heading']}`}>Try it out!</h4>
          <article className={styles['demo-login-info']}>
            <p className={styles['demo-field']}>
              <span>
                <strong>email: </strong>
              </span>
              <span className={styles['demo-email']}> {demo.email}</span>
            </p>
            <p className={styles['demo-field']}>
              <span>
                <strong>password: </strong>
              </span>
              <span className={styles['demo-password']}> {demo.password}</span>
            </p>
          </article>
        </section>
      )}
      <section className={`${styles.links}`}>
        <div className={styles['button-group']}>
          <a
            className={styles.link}
            href={url}
            target='_blank'
            rel='noreferrer noopener'
          >
            <button
              disabled={!url}
              className={`${styles['project-link-button']} ${styles['project-link-button--live']} ${styles[theme]}`}
            >
              <FaLink className={styles['project-link-button__icon']} />
              <span className={styles['project-link-button__text']}>Demo</span>
            </button>
          </a>
          <div className={styles['button-divider']} />
          <a
            className={styles.link}
            href={repo}
            target='_blank'
            rel='noreferrer noopener'
          >
            <button
              className={`${styles['project-link-button']} ${styles['project-link-button--github']} ${styles[theme]}`}
            >
              <FaGithub className={styles['project-link-button__icon']} />
              <span className={styles['project-link-button__text']}>Code</span>
            </button>
          </a>
        </div>
      </section>
    </article>
  );
};
export default ProjectCard;

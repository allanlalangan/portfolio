import { FaGithub, FaLink } from 'react-icons/fa';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project: { title, description, tech } }) => {
  return (
    <article className={`${styles['container']} grid-row`}>
      {/* <section className={`${styles['project-header']} col-6-md`}> */}
      <h3 className={`${styles['project-header__title']} col-6-md`}>{title}</h3>
      {/* </section> */}
      <section className={`${styles.links} col-6-md`}>
        <div className={styles['button-group']}>
          <button
            className={`${styles['project-link-button']} ${styles['project-link-button--github']}`}
          >
            <FaGithub className={styles['project-link-button__icon']} />
            <span className={styles['project-link-button__text']}>
              Source Code
            </span>
          </button>
          <div className={styles['button-divider']} />
          <button
            className={`${styles['project-link-button']} ${styles['project-link-button--live']}`}
          >
            <FaLink className={styles['project-link-button__icon']} />
            <span className={styles['project-link-button__text']}>
              Live Demo
            </span>
          </button>
        </div>
      </section>

      <section className={`${styles['previews']} col-6-md`}>
        <figure
          className={`${styles['__preview']} ${styles['__preview--desktop']}`}
        ></figure>
        <figure
          className={`${styles['__preview']} ${styles['__preview--mobile']}`}
        ></figure>
      </section>
      <article className={`${styles['project-info']} col-6-md`}>
        <p>{description}</p>
        <ul>
          {tech?.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </article>
    </article>
  );
};
export default ProjectCard;

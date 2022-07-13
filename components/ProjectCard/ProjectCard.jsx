import { FaGithub, FaLink } from 'react-icons/fa';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project: { title, description, tech } }) => {
  return (
    <article className={`${styles['container']} grid-row`}>
      <section className={`${styles['project-header']} col-12-md`}>
        <h2 className={`${styles['project-header__title']} col-3-md`}>
          {title}
        </h2>
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
      </section>

      <section className={`${styles['project-body']} col-6-md`}>
        <div className={styles['bezels-container']}>
          <figure className={styles.bezels}></figure>
        </div>
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

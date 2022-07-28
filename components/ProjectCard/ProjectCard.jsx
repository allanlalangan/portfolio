import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import styles from './ProjectCard.module.scss';
import nomad from '../../assets/nomad-travel.png';

const ProjectCard = ({ project: { title, description, tech, image } }) => {
  return (
    <article className={`${styles['container']}`}>
      <section className={styles['project-header']}>
        <h3 className={styles.__title}>{title}</h3>
      </section>
      <ul className={`${styles['tech-list']} grid-row`}>
        {tech?.map((t) => (
          <li className={`${styles.tech} col-4-xs col-2-lg`} key={t}>
            {t}
          </li>
        ))}
      </ul>

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
      <section className={`${styles.links}`}>
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
    </article>
  );
};
export default ProjectCard;

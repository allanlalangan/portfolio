import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSass,
  SiMaterialui,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiGooglemaps,
  SiReactrouter,
  SiJsonwebtokens,
} from 'react-icons/si';
import styles from './ProjectCard.module.scss';
import nomad from '../../assets/nomad-travel.png';

const TechIcon = ({ tech, styles }) => {
  if (tech === 'css') return <SiCss3 className={styles} />;
  if (tech.includes('javascript')) return <SiJavascript className={styles} />;
  if (tech === 'react') return <SiReact className={styles} />;
  if (tech.includes('redux')) return <SiRedux className={styles} />;
  if (tech.includes('sass')) return <SiSass className={styles} />;
  if (tech.includes('material')) return <SiMaterialui className={styles} />;
  if (tech.includes('mongo')) return <SiMongodb className={styles} />;
  if (tech.includes('express')) return <SiExpress className={styles} />;
  if (tech.includes('next')) return <SiNextdotjs className={styles} />;
  if (tech.includes('tailwind')) return <SiTailwindcss className={styles} />;
  if (tech.includes('google')) return <SiGooglemaps className={styles} />;
  if (tech.includes('rest')) return <AiFillApi className={styles} />;
  if (tech.includes('router')) return <SiReactrouter className={styles} />;
  if (tech.includes('token')) return <SiJsonwebtokens className={styles} />;
};

const ProjectCard = ({ project: { title, description, tech, image } }) => {
  return (
    <article className={`${styles['container']}`}>
      <section className={styles['project-header']}>
        <h3 className={styles.__title}>{title}</h3>
        <span className={styles['progress-message']}>
          currently building...
        </span>
      </section>
      <h3 className={styles['tech-heading']}>Tech Stack</h3>
      <ul className={`${styles['tech-list']} grid-row`}>
        {tech?.map((t) => (
          <li className={`${styles.tech} col-4-xs col-3-lg`} key={t}>
            <TechIcon tech={t} styles={styles['tech-icon']} />
            <span>{t}</span>
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

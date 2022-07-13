import { about } from '../../static/data';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <article className={styles['hero-text']}>
        <p className={styles.brief}>{about.brief}</p>
        <p className={styles.greeting}>{about.greeting}</p>
        <h1 className={styles.name}>{about.name}</h1>
        <p className={styles.title}>{about.title}</p>
      </article>
      <button className={styles['action-button']}>{about.actionCall}</button>
    </section>
  );
};
export default Hero;

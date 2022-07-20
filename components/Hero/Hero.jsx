import { about } from '../../static/data';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <article className={styles['hero-text']}>
        <h3 className={styles.brief}>{about.brief}</h3>
        <p className={styles.greeting}>{about.greeting}</p>
        <h1 className={styles.name}>{about.name}</h1>
        <h2 className={styles.title}>{about.title}</h2>
      </article>
      <button className={styles['action-button']}>{about.actionCall}</button>
    </section>
  );
};
export default Hero;

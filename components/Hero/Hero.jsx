import { about } from '../../public/data';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <>
      <div className={styles.pattern}></div>
      <section className={styles['hero']}>
        <article className={styles['hero-text']}>
          <p className={styles.greeting}>{about.greeting}</p>
          <h1 className={styles.name}>
            <span className={styles.first}>{about.name.first}</span>
            <span className={styles.last}> {about.name.last}</span>
          </h1>
          <span className={styles.title}>{about.title}</span>
          <p className={styles.brief}>{about.brief}</p>
        </article>
        <button className={styles['action-button']}>{about.actionCall}</button>
      </section>
    </>
  );
};
export default Hero;

import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContextProvider';
import styles from './Skills.module.scss';
import { CgShapeRhombus } from 'react-icons/cg';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={styles.skills}>
        <h3 className={styles.heading}>My primary tools consist of:</h3>
        <ul className={styles.list}>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              <strong className={`${styles.strong} ${styles[theme]}`}>
                ReactJS
              </strong>
              , hooks and React Router
            </p>
          </li>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>Javascript / ES6</p>
          </li>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Semantic
              </strong>{' '}
              html
            </p>
          </li>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              Styling and design with modern{' '}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                CSS
              </strong>
              ,{' '}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Sass
              </strong>{' '}
              and frameworks such as strong and{' '}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Material UI
              </strong>
            </p>
          </li>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              State management with{' '}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Redux + RTK
              </strong>
            </p>
          </li>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              Familiar with MERN stack, JSON Web Tokens (JWT)
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Skills;

import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContextProvider';
import styles from './Skills.module.scss';
import { CgShapeRhombus } from 'react-icons/cg';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={styles.skills}>
        <h3 className={styles.heading}>My primary tools include:</h3>
        <ul className={styles.list}>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Semantic
              </strong>{' '}
              HTML
            </p>
          </li>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Javascript / ES6
              </strong>
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
              and frameworks such as{' '}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Tailwind CSS
              </strong>{' '}
              and{' '}
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
              <strong className={`${styles.strong} ${styles[theme]}`}>
                ReactJS
              </strong>
              , hooks and React{' '}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Router
              </strong>
            </p>
          </li>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              {`State management with `}
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
              {`Source control with `}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Github
              </strong>
            </p>
          </li>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              Building {` `}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                RESTful APIs
              </strong>
              {` `}with{` `}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                MongoDB
              </strong>
              {', '}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Express
              </strong>
              {', and '}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                Node.js
              </strong>
            </p>
          </li>
          <li className={styles.skill}>
            <span className={styles['bullet-container']}>
              <CgShapeRhombus className={`${styles.bullet} ${styles[theme]}`} />
            </span>
            <p className={styles.caption}>
              {`Familiar with `}
              <strong className={`${styles.strong} ${styles[theme]}`}>
                JSON Web Tokens (JWT)
              </strong>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Skills;

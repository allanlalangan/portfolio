import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContextProvider';
import styles from './Skills.module.scss';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={styles.skills}>
        <h3 className={styles.heading}>My primary tools consist of:</h3>
        <ul className={styles.list}>
          <li className={styles.skill}>ReactJS, hooks and React Router</li>
          <li className={styles.skill}>Javascript / ES6</li>
          <li className={styles.skill}>Semantic html</li>
          <li className={styles.skill}>
            Styling and design with modern CSS, Sass and frameworks such as
            Tailwind CSS and Material UI
          </li>
          <li className={styles.skill}>State management with Redux + RTK</li>
          <li className={styles.skill}>
            Familiar with MERN stack, JSON Web Tokens (JWT)
          </li>
        </ul>
      </section>
    </>
  );
};
export default Skills;

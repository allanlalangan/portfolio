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
          <li>ReactJS, hooks and React Router</li>
          <li>Javascript / ES6</li>
          <li>Semantic html</li>
          <li>
            Styling and design with modern CSS, Sass and frameworks such as
            Tailwind CSS and Material UI
          </li>
          <li>State management with Redux + RTK</li>
          <li>Familiar with MERN stack, JSON Web Tokens (JWT)</li>
        </ul>
      </section>
    </>
  );
};
export default Skills;

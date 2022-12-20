import { useEffect, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../store/ThemeContextProvider';
import styles from './Switch.module.scss';

const Switch = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <label aria-hidden={true} htmlFor='darkMode' className={styles['label']}>
      {theme === 'light' ? (
        <FaSun className={`${styles['icon']} ${styles['sun']}`} />
      ) : (
        <FaMoon className={`${styles['icon']} ${styles['moon']}`} />
      )}
      <input
        id='darkMode'
        name='darkMode'
        type='checkbox'
        role='switch'
        className={styles.checkbox}
        onChange={switchTheme}
        checked={theme === 'dark' ? true : false}
        aria-checked={theme === 'dark' ? true : false}
      />
      <span className={styles['label-text']}>Dark Theme Toggle</span>
    </label>
  );
};
export default Switch;

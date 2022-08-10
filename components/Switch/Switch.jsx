import { useEffect, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../store/ThemeContextProvider';
import styles from './Switch.module.scss';

const Switch = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <aside className={styles['container']}>
      <button className={styles.switch} onClick={switchTheme}>
        {theme === 'light' ? (
          <FaSun className={`${styles['icon']} ${styles['sun']}`} />
        ) : (
          <FaMoon className={`${styles['icon']} ${styles['moon']}`} />
        )}
      </button>
    </aside>
  );
};
export default Switch;

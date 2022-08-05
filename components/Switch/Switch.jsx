import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './Switch.module.scss';

const Switch = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <aside className={styles['container']}>
      <button
        className={styles.switch}
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {!darkTheme ? (
          <FaSun className={`${styles['icon']} ${styles['sun']}`} />
        ) : (
          <FaMoon className={`${styles['icon']} ${styles['moon']}`} />
        )}
      </button>
    </aside>
  );
};
export default Switch;

import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './Switch.module.scss';

const Switch = () => {
  const [theme, setTheme] = useState('default');
  return (
    <form className={styles['container']}>
      {/* <span className={styles['switch']}></span> */}
      <input
        checked={theme === 'default'}
        className={styles['radio']}
        type='radio'
        onChange={(e) => setTheme(e.target.id)}
        id='default'
        name='theme'
      />
      <label className={styles['label']} htmlFor='default'>
        <FaSun className={styles['icon']} />
      </label>
      <input
        checked={theme === 'dark'}
        className={styles['radio']}
        type='radio'
        onChange={(e) => setTheme(e.target.id)}
        id='dark'
        name='theme'
      />
      <label className={styles['label']} htmlFor='dark'>
        <FaMoon className={styles['icon']} />
      </label>
    </form>
  );
};
export default Switch;

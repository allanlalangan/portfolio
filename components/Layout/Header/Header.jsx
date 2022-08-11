import styles from './Header.module.scss';
import Link from 'next/link';

import { FaTwitter, FaFileDownload, FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Switch from '../../Switch/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../../../store/ThemeContextProvider';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`${styles['header']} ${styles[theme]}`}>
      <div className={styles['main-banner']}>
        <Link className={styles['home-link']} href='/'>
          <figure className={styles.logo}>
            <span className={styles['home-icon']}>👹</span>
            <span className={styles['main-title']}>
              la<strong>Dev</strong>
            </span>
          </figure>
        </Link>
      </div>

      <nav className={styles['nav']}>
        <ul className={styles['nav-links']}>
          <Link href='/'>
            <li className={`${styles['__link']} ${styles['section']}`}>
              projects
            </li>
          </Link>
          <Link href='/'>
            <li className={`${styles['__link']} ${styles['section']}`}>
              skills
            </li>
          </Link>
          <Link href='/about'>
            <li className={`${styles['__link']} ${styles['section']}`}>me</li>
          </Link>
          <a
            href='https://twitter.com/allanladev'
            target='_blank'
            rel='noreferrer noopener'
          >
            <li className={`${styles['__link']} ${styles['button']}`}>
              <FaTwitter className={styles['social-icon']} />
            </li>
          </a>
          <a
            href='https://github.com/allanlalangan'
            target='_blank'
            rel='noreferrer noopener'
          >
            <li className={`${styles['__link']} ${styles['button']}`}>
              <FaGithub className={styles['social-icon']} />
            </li>
          </a>
          <Link href='/'>
            <li
              className={`${styles['__link']} ${styles['cv-link']} ${styles['button']}`}
            >
              <span className={`${styles['cv-link__text']}`}>cv</span>
              <FaFileDownload className={styles['cv-icon']} />
            </li>
          </Link>
        </ul>
        <aside className={styles['menu-button__container']}>
          <Switch />
          <button className={styles['menu-button']}>
            <GiHamburgerMenu
              className={`${styles[theme]} ${styles['burger-icon']}`}
            />
          </button>
        </aside>
      </nav>
    </header>
  );
};
export default Header;

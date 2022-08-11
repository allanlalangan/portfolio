import styles from './Header.module.scss';
import Link from 'next/link';
import { GiBullHorns } from 'react-icons/gi';
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
            {/* <GiBullHorns
              style={{ fill: 'url(#logo-gradient)' }}
              className={styles['home-icon']}
            /> */}
            <span className={styles['main-title']}>laDev</span>
          </figure>
        </Link>
      </div>
      {/* <svg position='absolute' width='0' height='0'>
        <linearGradient id='logo-gradient' x1='%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#ff1d4e' offset='20%' />
          <stop stopColor='#000000' offset='90%' />
        </linearGradient>
      </svg> */}

      <nav className={styles['nav']}>
        <ul className={styles['nav-links']}>
          <Link href='/'>
            <li className={styles['__link']}>projects</li>
          </Link>
          <Link href='/'>
            <li className={styles['__link']}>skills</li>
          </Link>
          <Link href='/about'>
            <li className={styles['__link']}>me</li>
          </Link>
          <Link href='/'>
            <li className={`${styles['__link']} ${styles['social']}`}>
              <FaTwitter className={styles['social-icon']} />
            </li>
          </Link>
          <Link href='/'>
            <li className={`${styles['__link']} ${styles['social']}`}>
              <FaGithub className={styles['social-icon']} />
            </li>
          </Link>
          <Link href='/'>
            <li className={`${styles['__link']} ${styles['cv-link']}`}>
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

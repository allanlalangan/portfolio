import styles from './Header.module.scss';
import Link from 'next/link';
import { GiBullHorns } from 'react-icons/gi';
import { FaTwitter, FaFileDownload, FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Switch from '../../Switch/Switch';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['main-banner']}>
        <Link className={styles['home-link']} href='/'>
          <figure className={styles.logo}>
            <GiBullHorns
              style={{ fill: 'url(#logo-gradient)' }}
              className={styles['home-icon']}
            />
            <span className={styles['main-title']}>Dev</span>
          </figure>
        </Link>
      </div>
      <svg position='absolute' width='0' height='0'>
        <linearGradient id='logo-gradient' x1='%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#ff1d4e' offset='20%' />
          <stop stopColor='#000000' offset='90%' />
        </linearGradient>
      </svg>
      <aside className={styles['menu-button__container']}>
        <button className={styles['menu-button']}>
          <GiHamburgerMenu className={styles['burger-icon']} />
        </button>
      </aside>
      <nav className={styles['nav']}>
        <Switch />
        <ul className={styles['nav-links']}>
          <Link href='/about'>
            <li className={styles['nav-links__link']}>me</li>
          </Link>
          <Link href='/'>
            <li className={`${styles['nav-links__link']} ${styles['cv-link']}`}>
              <span className={`${styles['cv-link__text']}`}>CV</span>
              <FaFileDownload className={styles['nav-icon']} />
            </li>
          </Link>
          <Link href='/'>
            <li className={styles['nav-links__link']}>
              <FaTwitter className={styles['social-icon']} />
            </li>
          </Link>
          <Link href='/'>
            <li className={styles['nav-links__link']}>
              <FaGithub className={styles['social-icon']} />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

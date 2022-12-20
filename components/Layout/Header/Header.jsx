import styles from './Header.module.scss';
import Link from 'next/link';

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';
import Switch from '../../Switch/Switch';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../../store/ThemeContextProvider';

const Header = ({ projectsRef, skillsRef, aboutRef, contactRef }) => {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <ul
          className={`${styles['nav-links']} ${styles[theme]} ${
            menuOpen ? styles.active : ''
          }`}
        >
          <li
            onClick={() => {
              projectsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
              setMenuOpen(false);
            }}
            className={`${styles['nav__link']}`}
          >
            projects
          </li>

          <li
            onClick={() => {
              skillsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
              });
              setMenuOpen(false);
            }}
            className={`${styles['nav__link']}`}
          >
            skills
          </li>

          <li
            onClick={() => {
              aboutRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
              setMenuOpen(false);
            }}
            className={`${styles['nav__link']}`}
          >
            me
          </li>
          <li
            onClick={() => {
              contactRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
              });
              setMenuOpen(false);
            }}
            className={`${styles['nav__link']}`}
          >
            contact
          </li>

          <li className={`${styles['nav__link']} ${styles['button']}`}>
            <a
              className={styles['social-link']}
              href='https://github.com/allanlalangan'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaGithub className={styles['social-icon']} />
            </a>
          </li>
          <li className={`${styles['nav__link']} ${styles['button']}`}>
            <a
              className={styles['social-link']}
              href='https://www.linkedin.com/in/allan-lalangan-16a86a243/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaLinkedin className={styles['social-icon']} />
            </a>
          </li>
          <a
            href='https://twitter.com/allanladev'
            target='_blank'
            rel='noreferrer noopener'
          >
            <li className={`${styles['nav__link']} ${styles['button']}`}>
              <FaTwitter className={styles['social-icon']} />
            </li>
          </a>
          {/* <Link href='/'>
            <li
              className={`${styles['nav__link']} ${styles['cv-link']} ${styles['button']}`}
            >
              <span className={`${styles['cv-link__text']}`}>cv</span>
              <FaFileDownload className={styles['cv-icon']} />
            </li>
          </Link> */}
        </ul>
        <aside className={styles['menu-button__container']}>
          <Switch />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${styles['menu-button']} ${
              menuOpen ? styles.active : ''
            }`}
          >
            {menuOpen ? (
              <MdClose className={`${styles[theme]} ${styles['close-icon']}`} />
            ) : (
              <MdMenu className={`${styles[theme]} ${styles['burger-icon']}`} />
            )}
          </button>
        </aside>
      </nav>
    </header>
  );
};
export default Header;

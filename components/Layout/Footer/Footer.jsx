import { useContext } from 'react';
import { ThemeContext } from '../../../store/ThemeContextProvider';
import styles from './Footer.module.scss';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`${styles.container} ${styles[theme]}`}>
      <h2 className={styles.heading}>
        Designed and built by Allan Lalangan © 2022
      </h2>
    </footer>
  );
};
export default Footer;

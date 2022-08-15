import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../store/ThemeContextProvider';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add(theme);

      document.body.classList.remove('dark');
    }
    if (theme === 'dark') {
      document.body.classList.add(theme);

      document.body.classList.remove('light');
    }
  }, [theme]);
  return (
    <>
      <Header />
      <main className={styles['main-content']}>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;

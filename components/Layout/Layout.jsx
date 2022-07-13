import Header from './Header/Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['main-content']}>{children}</main>
    </>
  );
};
export default Layout;

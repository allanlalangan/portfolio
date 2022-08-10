import '../scss/index.scss';
import { Layout } from '../components/';
import ThemeContextProvider from '../store/ThemeContextProvider';

function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;

/* Next Modules */
import { useEffect } from 'react';

/* Libraries scss, js files */
import 'normalize.css/normalize.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Custom scss and js files */
import '../styles/styles.scss';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return <Component {...pageProps} />;
}

/* Next Modules */
import Head from 'next/head';

/* Components */
import Navigation from './navigation';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#fff" />
        <meta name="description" content="company name" />
        <meta name="author" content="a.emrearabaci@gmail.com" />
        <title>Home | Company Name</title>
      </Head>

      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

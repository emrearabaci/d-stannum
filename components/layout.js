import Navigation from './navigation';
import Head from 'next/head';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Home | Company Name</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

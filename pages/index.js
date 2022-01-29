/* Next modules */
import Head from 'next/head';

/* Components */
import Layout from '../components/layout';
import Landing from '../components/sections/landing';
import Services from '../components/sections/services';

// Styles
import styles from '../styles/modules/index.module.scss';

function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Home | Company Name</title>
        </Head>
        <Landing />
        <Services />
      </div>
    </Layout>
  );
}

export default Home;

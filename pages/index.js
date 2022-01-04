import Layout from '../components/layout';
import Head from 'next/head';

// Styles
import styles from '../styles/modules/index.module.scss';

function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Home | Company Name</title>
        </Head>
        <p>Home</p>
      </div>
    </Layout>
  );
}

export default Home;

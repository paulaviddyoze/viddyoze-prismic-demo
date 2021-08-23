import React from 'react';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-reactjs';

// Project components & functions
import DefaultLayout from 'layouts';
import { Header, SetupRepo } from 'components/home';
import { Client } from 'utils/prismicHelpers';

/**
 * Homepage component
 */
const Home = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout menu={menu}>
        <Head>
          <title>{RichText.asText(doc.data.headline)}</title>
        </Head>
        <Header
          image={doc.data.image}
          headline={doc.data.headline}
          description={doc.data.description}
        />
      </DefaultLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  const client = Client();

  const doc = (await client.getSingle('homepage', ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      preview
    }
  };
}

export default Home;

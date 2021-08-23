// import Prismic from '@prismicio/client';
import { Client } from 'utils/prismicHelpers';
import DefaultLayout from 'layouts';
import PageContent from '../components/PageContent';
import { queryRepeatableDocuments } from 'utils/queries';
import { useRouter } from 'next/router';

const Page = ({ menu, page }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <DefaultLayout menu={menu}>
      <PageContent page={page} />
    </DefaultLayout>
  );
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {}
}) {
  const { ref } = previewData;
  const page =
    (await Client().getByUID('page', params.uid, ref ? { ref } : null)) || {};
  return {
    props: {
      preview,
      page
    }
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(doc => doc.type === 'page');
  return {
    paths: documents.map(doc => `/${doc.uid}`),
    fallback: true
  };
}

export default Page;

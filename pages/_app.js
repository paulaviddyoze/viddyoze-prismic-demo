// import App from 'next/app'
import { reset, globals } from 'styles';
import Prismic from '@prismicio/client';
import { Client } from 'utils/prismicHelpers';

function MyApp({ Component, pageProps, props }) {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {globals}
      </style>
      <Component {...pageProps} menu={props.menu} />
    </>
  );
}

MyApp.getInitialProps = async appCtx => {
  const menu = (await Client().getSingle('menu')) || {};
  return {
    props: {
      menu: menu
    }
  };
};

export default MyApp;

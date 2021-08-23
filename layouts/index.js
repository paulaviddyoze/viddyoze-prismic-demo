import Footer from 'components/Footer';
import MainMenu from '../components/MainMenu';

/**
 * Default layout component
 */
const DefaultLayout = ({ children, menu = [] }) => {
  const menuLinks = menu?.data.links;
  return (
    <div>
      <MainMenu menu={menuLinks} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

import { pageStyles } from 'styles';
import { RichText } from 'prismic-reactjs';
import { hrefResolver, linkResolver } from 'prismic-configuration';
import SliceZone from './post/SliceZone';

const PageContent = ({ page }) => {
  const titleHtml = RichText.render(page.data.title, linkResolver);
  const content = RichText.render(page.data.description, linkResolver);
  return (
    <div className="page-content">
      {titleHtml}
      <div className="image-wrapper">
        <img src={page.data.image.url} alt={page.data.image.alt} />
      </div>
      {content}
      {page.data.body && <SliceZone sliceZone={page.data.body} />}
      <style jsx global>
        {pageStyles}
      </style>
    </div>
  );
};
export default PageContent;

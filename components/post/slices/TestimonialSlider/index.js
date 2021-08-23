import { testimonialStyles } from 'styles';
import { RichText } from 'prismic-reactjs';
import { hrefResolver, linkResolver } from 'prismic-configuration';
import Testimonial from './Testimonial';

const TestimonialsSlider = ({ slice }) => {
  // const { eyebrow_headline, title, paragraph, link, buttonLabel, slices } = slice;
  return (
    <div className="testimonials">
      <div className="intro">
        {RichText.asText(slice.primary.eyebrow_headline)}
      </div>
      {RichText.render(slice.primary.title)}
      {RichText.render(slice.primary.paragraph, linkResolver)}
      <a className="testimonials-cta" href={slice.primary.button_link.url}>
        {slice.primary.button_label}
      </a>
      {slice.items.map((item, index) => (
        <Testimonial content={item} key={`testimonial-${index}`} />
      ))}
      <style jsx global>
        {testimonialStyles}
      </style>
    </div>
  );
};
export default TestimonialsSlider;

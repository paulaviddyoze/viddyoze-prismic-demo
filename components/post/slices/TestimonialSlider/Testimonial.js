import { testimonialStyles } from 'styles';
import { RichText } from 'prismic-reactjs';

const Testimonial = ({ content }) => {
  const { image, testimonial, person, title } = content;
  return (
    <>
      <div className="testimonial">
        <div className="image-wrapper">
          <img src={image.url} alt={image.alt} />
        </div>
        <div className="info-wrapper">
          {RichText.render(testimonial)}
          <div className="person">
            {person}, {title}
          </div>
        </div>
      </div>
      <style jsx global>
        {testimonialStyles}
      </style>
    </>
  );
};
export default Testimonial;

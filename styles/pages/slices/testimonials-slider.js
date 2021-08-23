import css from 'styled-jsx/css';

export const testimonialStyles = css.global`
  .testimonials {
    margin-top: 2em;
    border-top: 1px solid black;
    padding-top: 2em;
  }
  .testimonials-cta {
    padding: 0.5em 2em;
    border-radius: 10px;
    background: darkgreen;
    color: white;
  }
  .testimonials .intro {
    font-size: 2em;
  }
  .testimonial {
    display: flex;
    margin: 2em 0;
    border-top: 1px solid lightgrey;
  }
  .testimonial .image-wrapper {
    width: 50%;
  }
  .testimonial .image-wrapper img {
    width: 100%;
    flex-grow: 0;
  }
  .testimonial .info-wrapper {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .testimonial .info-wrapper p {
    font-weight: bold;
  }
  .testimonial .info-wrapper person {
    font-style: italic;
  }
`;

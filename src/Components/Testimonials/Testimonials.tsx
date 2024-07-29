import Styles from "./Testimonials.module.scss";
import { testimonialData } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials: testimonialData[] = [
  {
    title: "Tony",
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    img: { src: "", alt: "picture" },
  },
  {
    title: "Tony",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    img: { src: "", alt: "picture" },
  },
  {
    title: "Tony",
    rating: 2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    img: { src: "", alt: "picture" },
  },
  {
    title: "Tony",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    img: { src: "", alt: "picture" },
  },
];

const Testimonial = ({ testimonial }: { testimonial: testimonialData }) => {
  return (
    <div className={Styles.testimonial}>
      <figure className={Styles.imageContainer}>
        <img src={testimonial.img.src} alt={testimonial.img.alt} />
      </figure>
      <h2>{testimonial.title}</h2>
      <div className={Styles.rating}>
        {Array(5)
          .fill(undefined)
          .map((_, index) => (
            <FontAwesomeIcon
              icon={faStar}
              className={`${Styles.ratingStar} ${
                index < testimonial.rating ? Styles.active : ""
              }`}
            />
          ))}
      </div>

      <p>
        <q>{testimonial.review}</q>
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className={Styles.testimonials}>
      {testimonials.map((testimonial) => (
        <Testimonial testimonial={testimonial} />
      ))}
    </section>
  );
};

export default Testimonials;

import Styles from "./Testimonials.module.scss";
import { testimonialData } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials: testimonialData[] = [
  {
    title: "Tony",
    rating: 4,
    review: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Mel",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    title: "Andy",
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    title: "John",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

const Testimonial = ({ testimonial }: { testimonial: testimonialData }) => {
  const drawStar = (idx: number, isActive: boolean) => {
    return (
      <FontAwesomeIcon
        icon={faStar}
        className={`${Styles.ratingStar} ${isActive ? Styles.active : ""}`}
        key={idx}
      />
    );
  };
  return (
    <div className={Styles.testimonial}>
      <h2 className={Styles.testimonialTitle}>{testimonial.title}</h2>
      <div className={Styles.rating}>
        {Array(5)
          .fill(undefined)
          .map((_, idx) => drawStar(idx, idx < testimonial.rating))}
      </div>
      <hr />
      <p className={Styles.testimonialReview}>{testimonial.review}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className={Styles.testimonials}>
      {testimonials.map((testimonial) => (
        <Testimonial
          testimonial={testimonial}
          key={`${testimonial.title}-${testimonial.rating}`}
        />
      ))}
    </section>
  );
};

export default Testimonials;

import Styles from "./Highlights.module.scss";
import { highlightsData } from "../../types";

const highlights: highlightsData[] = [
  {
    title: "tapas",
    price: "13.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: false,
  },
  {
    title: "tapas",
    price: "13.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: false,
  },
  {
    title: "tapas",
    price: "13.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: true,
  },
  {
    title: "tapas",
    price: "13.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: true,
  },
  {
    title: "tapas",
    price: "13.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: true,
  },
  {
    title: "tapas",
    price: "13.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: true,
  },
];

const HighlightCard = ({ card }: { card: highlightsData }) => {
  return (
    <div className={Styles.highlightCard}>
      <figure className={Styles.imageContainer}>
        <img src={card.img.src} alt={card.img.alt} className={Styles.img} />
      </figure>
      <div className={Styles.highlightData}>
        <div className={Styles.header}>
          <h3 className={Styles.title}>{card.title}</h3>
          <span className={Styles.price}>${card.price}</span>
        </div>
        <p className={Styles.description}>{card.description}</p>
        <a href={card.link} className={Styles.link}>
          <span>icon</span>
          <span>order for delivery</span>
        </a>
      </div>
    </div>
  );
};

const CarouselArrow = ({
  onClick,
  isVisible,
  direction,
  disabled,
}: {
  onClick: () => void;
  isVisible: boolean;
  disabled?: boolean;
  direction: "left" | "right";
}) => {
  return (
    <button
      className={`${Styles.arrow} ${
        isVisible ? Styles.isVisible : Styles.hide
      } ${direction === "left" ? Styles.left : Styles.right}`}
      disabled={disabled}
    >
      <span className={Styles.arrow} />
    </button>
  );
};

const Carousel = ({ list }: { list: highlightsData[] }) => {
  return (
    <div className={Styles.carouselContainer}>
      <div className={Styles.carousel}>
        {list
          .filter((card) => card.highlighted)
          .map((card) => (
            <HighlightCard card={card} />
          ))}
      </div>
    </div>
  );
};

const HighLights = () => {
  return (
    <section className={Styles.highlights}>
      <div className={Styles.header}>
        <h3 className={Styles.highlightsTitle}>This week specials</h3>
        <div className={Styles.highlightsButtons}>
          {/* should be visible only if scrollLeft = 0 && content is bigger than container */}
          <CarouselArrow onClick={() => {}} isVisible direction="left" />
          {/* should be visible only if  content is bigger than container */}
          <CarouselArrow onClick={() => {}} isVisible direction="right" />
          <button className={Styles.highlightButton}>Menu</button>
        </div>
      </div>
      <Carousel list={highlights} />
    </section>
  );
};

export default HighLights;

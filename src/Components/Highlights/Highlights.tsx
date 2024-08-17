import Styles from "./Highlights.module.scss";
import { dish } from "../../types";
import { menuList } from "../../Pages/Menu/Menu";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export const HighlightCard = ({
  card,
  hideFooter = false,
}: {
  card: dish;
  hideFooter?: boolean;
}) => {
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
        {!hideFooter && (
          <a href={card.link} className={Styles.link}>
            <span>icon</span>
            <span>order for delivery</span>
          </a>
        )}
      </div>
    </div>
  );
};

const Carousel = ({ list }: { list: dish[] }) => {
  return (
    <div className={Styles.carouselContainer}>
      <div className={Styles.carousel}>
        {list
          .filter((card) => card.highlighted)
          .map((card) => (
            <HighlightCard card={card} key={card.title} />
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
          <Button size="small">
            <Link to={"/menu"}>Menu</Link>
          </Button>
        </div>
      </div>
      <Carousel list={menuList} />
    </section>
  );
};

export default HighLights;

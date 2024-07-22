import HighLights from "../Highlights/Highlights";
import Styles from "./Main.module.scss";
const Main = () => {
  return (
    <div className={Styles.main}>
      <section className="hero"></section>
      <HighLights />
      <section className="testimonials"></section>
      <section className="about"></section>
    </div>
  );
};

export default Main;

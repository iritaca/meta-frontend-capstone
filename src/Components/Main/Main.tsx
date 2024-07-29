import Hero from "../Hero/Hero";
import HighLights from "../Highlights/Highlights";
import Testimonials from "../Testimonials/Testimonials";
import Styles from "./Main.module.scss";
const Main = () => {
  return (
    <div className={Styles.main}>
      <Hero />
      <HighLights />
      <Testimonials />
      <section className="about"></section>
    </div>
  );
};

export default Main;

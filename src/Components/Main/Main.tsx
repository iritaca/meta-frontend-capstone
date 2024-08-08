import About from "../About/About";
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
      <About />
    </div>
  );
};

export default Main;

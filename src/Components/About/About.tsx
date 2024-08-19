import React from "react";
import Styles from "./About.module.scss";
import img1 from "../../assets/images/mario_adrian_a.jpg";
import img2 from "../../assets/images/mario_adrian_b.jpg";

const AboutImage = ({
  className = "",
  img,
}: {
  className?: string;
  img: string;
}) => {
  return (
    <figure className={`${Styles.aboutPic} ${className}`}>
      <img src={img} alt="little lemon chefs" />
    </figure>
  );
};

const About = () => {
  return (
    <section className={Styles.about}>
      <div className={Styles.aboutDescription}>
        <h1>About: Little lemon</h1>
        <span>Chicago</span>
        <p className={Styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <AboutImage className={Styles.photo1} img={img1} />
      <AboutImage className={Styles.photo2} img={img2} />
    </section>
  );
};

export default About;

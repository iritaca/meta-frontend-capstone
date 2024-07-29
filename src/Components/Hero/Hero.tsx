import React from "react";

import Styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={Styles.hero}>
      <div className={Styles.heroText}>
        <h1>Little lemon</h1>
        <span>Chicago</span>
        <p>
          We are a family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a table</button>
      </div>
      <figure className={Styles.heroImageContainer}>
        <img src="" alt="" />
      </figure>
    </section>
  );
};

export default Hero;

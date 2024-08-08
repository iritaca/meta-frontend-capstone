import React, { useState } from "react";

import Styles from "./Hero.module.scss";
import Button from "../Button/Button";
import SidePanel from "../SidePanel/SidePanel";
const Hero = () => {
  const [showPanel, setShowPanel] = useState(false);
  return (
    <section className={Styles.hero}>
      <div className={Styles.heroText}>
        <h1>Little lemon</h1>
        <span>Chicago</span>
        <p>
          We are a family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <Button onClick={() => setShowPanel(true)}>Reserve a table</Button>
      </div>
      <figure className={Styles.heroImageContainer}>
        <img src="" alt="" />
      </figure>
      {showPanel && (
        <SidePanel
          variant="reserve"
          onClose={() => setShowPanel(false)}
          onSave={() => {
            // @Dev - add here the action after save is clicked
          }}
        />
      )}
    </section>
  );
};

export default Hero;

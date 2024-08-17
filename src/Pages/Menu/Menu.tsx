import React from "react";
import { dish } from "../../types";

import Styles from "./Menu.module.scss";
import { HighlightCard } from "../../Components/Highlights/Highlights";

export const menuList: dish[] = [
  {
    title: "Little Carne Bites",
    price: "15.95",
    description:
      "Chorizo al Vino, Pork Belly, Polenta Toscana and Jamon Croquettes",
    link: "",
    img: { src: "", alt: "" },
    highlighted: true,
  },
  {
    title: "Little Vegan Bites",
    price: "15.95",
    description: "Winter Champignon and Halloumi Saganaki",
    link: "",
    img: { src: "", alt: "" },
    highlighted: true,
  },
  {
    title: "Little Seafood Bites",
    price: "15.95",
    description: "Mussels and Fish Cakes",
    link: "",
    img: { src: "", alt: "" },
    highlighted: true,
  },
  {
    title: "Burrata & Heirloom Tomato Focaccia",
    price: "12.95",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: false,
  },
  {
    title: "Chicken & Nduja Focaccia",
    price: "10.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: false,
  },
  {
    title: "King Oyster",
    price: "10.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: false,
  },
  {
    title: "Jamon Croquettes",
    price: "8.95",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: false,
  },
  {
    title: "Pork Belly",
    price: "10.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: false,
  },
  {
    title: "Salad",
    price: "5.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "",
    img: { src: "", alt: "" },
    highlighted: false,
  },
];

const Menu = () => {
  return (
    <div className={Styles.menuWrapper}>
      <h2>Menu</h2>
      <div className={Styles.menuGrid}>
        {menuList.map((itemCard) => (
          <HighlightCard card={itemCard} key={itemCard.title} hideFooter />
        ))}
      </div>
    </div>
  );
};

export default Menu;

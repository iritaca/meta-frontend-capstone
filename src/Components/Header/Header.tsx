import { useState } from "react";
import LogoSvg from "../../assets/images/Logo.svg";
import Styles from "./Header.module.scss";

const NAV_OPTIONS: { title: string; value: string }[] = [
  { title: "home", value: "home" },
  { title: "about", value: "about" },
  { title: "menu", value: "menu" },
  { title: "reservations", value: "reserve" },
  { title: "order online", value: "order_online" },
  { title: "login", value: "login" },
];

const HeaderNav = () => {
  const [selected, setSelected] = useState("home");

  return (
    <nav className={Styles.navContainer}>
      <ul className={Styles.navList}>
        {NAV_OPTIONS.map((navItem) => (
          <li
            key={navItem.title}
            className={`${Styles.navItem} ${
              selected === navItem.value ? Styles.isActive : ""
            }`}
            onClick={() => setSelected(navItem.value)}
          >
            {/* @Dev - this should be replaced by React.Route */}
            <a href={`/${navItem.value}`}>{navItem.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <div className={Styles.header}>
      <a href="/" className={Styles.headerLogo}>
        <img src={LogoSvg} alt="Little Lemon logo" />
      </a>
      <HeaderNav />
    </div>
  );
};

export default Header;

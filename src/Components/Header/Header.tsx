import { useState } from "react";
import LogoSvg from "../../assets/images/Logo.svg";
import Styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

const NAV_OPTIONS: { title: string; value: string }[] = [
  { title: "home", value: "" },
  { title: "about", value: "about" },
  { title: "menu", value: "menu" },
  { title: "reservations", value: "reserve" },
  { title: "order online", value: "order_online" },
  { title: "login", value: "login" },
];

const HeaderNav = () => {
  const location = useLocation();
  const [_, setSelected] = useState("");

  const pathName = location.pathname.replace(/^\/|\/$/g, "");
  return (
    <nav className={Styles.navContainer}>
      <ul className={Styles.navList}>
        {NAV_OPTIONS.map((navItem) => (
          <li
            key={navItem.title}
            className={`${Styles.navItem} ${
              pathName === navItem.value ? Styles.isActive : ""
            }`}
            onClick={() => setSelected(navItem.value)}
          >
            <Link to={`/${navItem.value}`}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${Styles.header} ${className}`}>
      <a href="/" className={Styles.headerLogo}>
        <img src={LogoSvg} alt="Little Lemon logo" />
      </a>
      <HeaderNav />
    </div>
  );
};

export default Header;

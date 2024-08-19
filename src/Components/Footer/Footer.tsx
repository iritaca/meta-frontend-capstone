import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/footer_logo.png";
import { footerListProps } from "../../types";
import Styles from "./Footer.module.scss";

const footerList: footerListProps[] = [
  {
    title: "Get to know us",
    list: [
      { content: "about", href: "/about" },
      { content: "highlights", href: "/" },
      { content: "testimonials", href: "/" },
    ],
  },
  {
    title: "Connect",
    list: [
      { content: "facebook", href: "https:www/facebook.com" },
      { content: "instagram", href: "https:www/instagram.com" },
      { content: "x", href: "https:www/x.com" },
    ],
  },
  {
    title: "Contact",
    list: [{ content: "Chicago" }],
  },
];

const FooterColumn = ({ list }: { list: footerListProps[] }) => {
  return (
    <div className={Styles.footerColumns}>
      {list.map((col) => {
        return (
          <div className={Styles.footerColumn} key={col.title}>
            <h6>{col.title}</h6>
            <ul>
              {col.list.map((listItem) => {
                return (
                  <li key={`${col.title}-${listItem.content}`}>
                    {listItem.href ? (
                      <Link to={listItem.href}>{listItem.content}</Link>
                    ) : (
                      <span>{listItem.content}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const Footer = ({ className = "" }: { className?: string }) => {
  return (
    <footer className={`${Styles.footer} ${className}`}>
      <figure className={Styles.footerLogo}>
        <img src={footerLogo} alt="Little Lemon footer logo" />
      </figure>
      <FooterColumn list={footerList} />
    </footer>
  );
};
export default Footer;

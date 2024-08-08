import footerLogo from "../../assets/images/footer_logo.png";
import { footerListProps } from "../../types";
import Styles from "./Footer.module.scss";

const footerList: footerListProps[] = [
  {
    title: "Get to know us",
    list: [
      { content: "highlights", href: "/highlights" },
      { content: "testimonials", href: "/testimonials" },
      { content: "about", href: "/about" },
    ],
  },
  {
    title: "Connect",
    list: [
      { content: "face", href: "https:www/facebook.com" },
      { content: "insta", href: "https:www/instagram.com" },
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
          <div className={Styles.footerColumn}>
            <h6>{col.title}</h6>
            <ul
              className={col.title === "Connect" ? Styles.horizontalList : ""}
            >
              {col.list.map((listItem) => {
                return (
                  <li>
                    <a href={listItem.href}> {listItem.content}</a>
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

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <figure className={Styles.footerLogo}>
        <img src={footerLogo} alt="Little Lemon footer logo" />
      </figure>
      <FooterColumn list={footerList} />
    </footer>
  );
};
export default Footer;

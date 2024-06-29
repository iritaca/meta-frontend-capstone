import Styles from "./Footer.module.scss";

const FooterColumn = ({
  title,
  list,
}: {
  title: string;
  list: { title: string; content?: React.ReactNode }[];
}) => {
  return (
    <>
      <h6>{title}</h6>
      <ul className={!!list[0].content ? Styles.row : Styles.column}>
        {list.map((item) => {
          let itemContent = item.content;
          if (!itemContent) itemContent = item.title;
          return (
            <li>
              <a href={item.title}>{itemContent}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <figure className={Styles.footerLogo}>
        <img src="" alt="Little Lemon footer logo" />
      </figure>
      <FooterColumn
        title="Get to know us"
        list={[
          { title: "highlights" },
          { title: "testimonials" },
          { title: "about" },
        ]}
      />
    </footer>
  );
};
export default Footer;

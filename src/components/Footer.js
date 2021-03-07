// styles & resources
import "../style/components/Footer.scss";
import icons from "../assets/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <small className="copyright">
        {icons.copyright}{" "}
        <a
          href="https://github.com/marcjnn"
          title="check github profile"
          className="footer__link"
        >
          marcjnn
        </a>{" "}
        2021 {icons.at}{" "}
        <a
          href="https://adalab.es/"
          className="footer__link"
          title="visit adalab.es"
        >
          Adalab
        </a>
      </small>
    </footer>
  );
};

export default Footer;

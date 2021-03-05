// styles & resources
import "../style/components/Footer.scss";
import icons from "../assets/icons";

const Footer = () => {
  return (
    <footer class="footer">
      <small class="copyright">
        {icons.copyright}{" "}
        <a
          href="https://github.com/marcjnn"
          title="check github profile"
          class="footer__link"
        >
          marcjnn
        </a>{" "}
        2021 {icons.at}{" "}
        <a
          href="https://adalab.es/"
          class="footer__link"
          title="visit adalab.es"
        >
          Adalab
        </a>
      </small>
    </footer>
  );
};

export default Footer;

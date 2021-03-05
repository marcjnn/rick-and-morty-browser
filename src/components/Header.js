// styles & resources
import "../style/components/Header.scss";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Rick and Morty database</h1>
      <img className="logo" src={logo} alt="Rick and Morty logo" />
    </header>
  );
};

export default Header;

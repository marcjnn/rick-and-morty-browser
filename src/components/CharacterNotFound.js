// styles & resources
import "../style/components/CharacterNotFound.scss";
import errorIMG from "../assets/images/error404.jpeg";
import icons from "../assets/icons";

// components
import ReturnLink from "./ReturnLink";

const CharacterNotFound = () => {
  return (
    <>
      <article className="error">
        <h2>404... Whoops...</h2>
        <img className="error__image" src={errorIMG} alt="404 error image" />
        <p
          className="error__description
      "
        >
          Sorry, the character you're looking for is nowhere to be found
        </p>
      </article>
      <ReturnLink text="go to homepage" icon={icons.homepage} route="/" />
    </>
  );
};

export default CharacterNotFound;

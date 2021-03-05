// styles & resources
import "../style/components/CharacterNotFound.scss";
import errorIMG from "../assets/images/error404.jpeg";

const CharacterNotFound = () => {
  return (
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
  );
};

export default CharacterNotFound;

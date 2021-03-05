// styles & resources
import "../style/components/CharacterDetails.scss";
import icons from "../assets/icons";

// React
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  const character = props.character;
  return (
    <div>
      <Link className="return__link" to="/">
        <p className="return__button">
          {icons.doublearrow}
          <span className="return__button--btn">return</span>
        </p>
      </Link>
      <article className="card__detail">
        <img
          className="detail__image"
          src={character.image}
          alt={character.name}
        />
        <div>
          <h2 className="detail__name">{character.name}</h2>
          <p className="detail__details">
            <span className="detail__details--thin">Status:</span>{" "}
            {character.status}
          </p>
          <p className="detail__details">
            <span className="detail__details--thin">Species:</span>{" "}
            {character.species}
          </p>
          <p className="detail__details">
            <span className="detail__details--thin">Origin:</span>{" "}
            {character.origin}
          </p>
          <p className="detail__details">
            <span className="detail__details--thin">Episodes:</span>{" "}
            {character.episodes}
          </p>
        </div>
      </article>
    </div>
  );
};

export default CharacterDetails;

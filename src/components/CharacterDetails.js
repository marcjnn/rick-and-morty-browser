// styles & resources
import "../style/components/CharacterDetails.scss";
import icons from "../assets/icons";

// React
import PropTypes from "prop-types";

// components
import ReturnLink from "./ReturnLink";

const CharacterDetails = (props) => {
  const character = props.character;
  return (
    <div>
      <ReturnLink icon={icons.doublearrow} />
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

CharacterDetails.propTypes = {
  character: PropTypes.object,
};

export default CharacterDetails;

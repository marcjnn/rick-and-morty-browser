// styles & resources
import icons from "../assets/icons";
import "../style/components/CharacterCard.scss";

// React
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  const character = props.character;

  // decide which icon to use depending on character's status
  const icon = () => {
    if (character.status === "alive") {
      return icons.heartbeat;
    }
    if (character.status === "dead") {
      return icons.skull;
    }
    return icons.questionmark;
  };

  return (
    <article className="results__card">
      <img className="card__image" src={character.image} alt={character.name} />
      <h2 className="card__name">{character.name}</h2>
      <p className="card__spieces">{character.species}</p>
      <div className="card__status">{icon()}</div>
    </article>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;

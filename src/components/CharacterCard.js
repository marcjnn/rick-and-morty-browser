// styles & resources
import { icon } from "@fortawesome/fontawesome-svg-core";
import "../style/components/CharacterCard.scss";

const CharacterCard = (props) => {
  const character = props.character;
  console.log(props);
  const icon = () => {
    if (character.status === "alive") {
      return props.icons.heartbeat;
    }
    if (character.status === "dead") {
      return props.icons.skull;
    }
    return props.icons.questionmark;
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

export default CharacterCard;

// React
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  const character = props.character;
  return (
    <div>
      <Link to="/">
        <p>return</p>
      </Link>
      <article>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Origin: {character.origin}</p>
        <p>Episodes: {character.episodes}</p>
      </article>
    </div>
  );
};

export default CharacterDetails;

// React
import { Link } from "react-router-dom";

// components
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterList = props.searchResults.map((character) => {
    return (
      <li key={character.id}>
        <Link to={`/characters/${character.route}`}>
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });

  return props.searchResults.length === 0 ? (
    <p>
      The horror!!! There is no characters matching your criteria" ¯\_(ツ)_/¯
    </p>
  ) : (
    <ul>{characterList}</ul>
  );
};

export default CharacterList;

// styles & resources
import "../style/components/CharacterList.scss";

// React
import { Link } from "react-router-dom";

// components
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterList = props.searchResults.map((character) => {
    return (
      <li key={character.id}>
        <Link className="results__link" to={`/characters/${character.route}`}>
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });

  return props.searchResults.length === 0 ? (
    <p className="results--nomatch">
      There are no characters matching your criteria
    </p>
  ) : (
    <ul className="results">{characterList}</ul>
  );
};

export default CharacterList;

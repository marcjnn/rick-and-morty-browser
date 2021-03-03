// React
import { Link } from "react-router-dom";

// components
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  // console.log(props);
  const characterList = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <Link to={`/${character.route}`}>
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });
  return <ul>{characterList}</ul>;
};

export default CharacterList;

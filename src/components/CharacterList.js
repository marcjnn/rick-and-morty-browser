import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  // console.log(props);
  const characterList = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return <ul>{characterList}</ul>;
};

export default CharacterList;

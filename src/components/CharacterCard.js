const CharacterCard = (props) => {
  const character = props.character;
  return (
    <article>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </article>
  );
};

export default CharacterCard;

const CharacterCard = (props) => {
  console.log(props);
  return (
    <article>
      <img src={props.character.image} alt={props.character.name} />
      <h2>{props.character.name}</h2>
      <p>{props.character.species}</p>
    </article>
  );
};

export default CharacterCard;

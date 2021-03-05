import errorIMG from "../assets/images/error404.jpeg";

const CharacterNotFound = () => {
  return (
    <article>
      <h2>Whoops...</h2>
      <img src={errorIMG} alt="404 error image" />
      <p>Sorry, the character you're looking for is nowhere to be found</p>
    </article>
  );
};

export default CharacterNotFound;

const ENDPOINT = "https://rickandmortyapi.com/api/character";

let fetchCharacters = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  // console.log(data.results);
  return data.results.map((character) => {
    return {
      id: character.id.toString(),
      name: character.name,
      status: character.status,
      species: character.species,
      origin: character.origin.name,
      image: character.image,
      episodes: character.episode.length,
    };
  });
};

export default { fetchCharacters: fetchCharacters };

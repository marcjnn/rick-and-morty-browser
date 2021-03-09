const ENDPOINT = "//rickandmortyapi.com/api/character";

let fetchCharacters = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.results.map((character) => {
    return {
      id: character.id.toString(),
      name: character.name,
      status: character.status.toLowerCase(),
      species: character.species.toLowerCase(),
      origin: character.origin.name,
      location: character.location.name,
      image: character.image,
      episodes: character.episode.length,
      route: character.name.split(" ").join("-").toLowerCase(),
    };
  });
};

export default { fetchCharacters: fetchCharacters };

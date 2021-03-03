// styles
import "../style/components/App.scss";

// services
import api from "../services/api";

// React
import React, { useEffect, useState } from "react";

// components
import CharacterList from "./CharacterList";
// import Filters from "./Filters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  // fetch data; asynchronus
  useEffect(async () => {
    const data = await api.fetchCharacters();
    setCharacters(data);
  }, []);

  return (
    <main>
      {/* <Filters /> */}
      <CharacterList characters={characters} />
    </main>
  );
};

export default App;

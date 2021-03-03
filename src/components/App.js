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
    console.log(data);
  }, []);

  return (
    <main>
      {/* <Filters /> */}
      <CharacterList />
    </main>
  );
};

export default App;

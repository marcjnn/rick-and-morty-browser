// styles
import "../style/components/App.scss";

// services
import api from "../services/api";

// React
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// components
import CharacterList from "./CharacterList";
// import Filters from "./Filters";
import CharacterDetails from "./CharacterDetails";
import CharacterNotFound from "./CharacterNotFound";

const App = () => {
  const [characters, setCharacters] = useState([]);
  // fetch data; asynchronus
  useEffect(async () => {
    const data = await api.fetchCharacters();
    setCharacters(data);
  }, []);

  console.log(characters);

  const renderCharacterDetails = (props) => {
    const route = props.match.params.route;
    const character = characters.find((character) => character.route === route);
    return character ? (
      <CharacterDetails character={character} />
    ) : (
      <CharacterNotFound />
    );
  };

  return (
    <main>
      <Switch>
        <Route exact path="/">
          {/* <Filters /> */}
          <CharacterList characters={characters} />
        </Route>
        <Route path="/:route" render={renderCharacterDetails} />
      </Switch>
    </main>
  );
};

export default App;

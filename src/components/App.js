// styles & resources
import "../style/components/App.scss";
import logo from "../images/logo.png";

// React
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// services
import api from "../services/api";

// components
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";
import CharacterNotFound from "./CharacterNotFound";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  // fetch data; asynchronus
  // "useEffect function must return a cleanup function or nothing. Promises and useEffect(async () => ...) are not supported, but you can call an async function inside an effect... That's why using async directly in the useEffect function isn't allowed"
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);

  const renderCharacterDetails = (props) => {
    const route = props.match.params.route;
    const character = characters.find((character) => character.route === route);
    return character ? (
      <CharacterDetails character={character} />
    ) : (
      <CharacterNotFound />
    );
  };

  const filterByName = (inputData) => {
    setName(inputData.value);
  };

  const searchResults = characters.filter((character) =>
    character.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <main>
      <img src={logo} alt="Rick and Morty logo" />
      <Switch>
        <Route exact path="/">
          <Filters filterByName={filterByName} inputValue={name} />
          <CharacterList characters={searchResults} />
        </Route>
        <Route path="/:route" render={renderCharacterDetails} />
      </Switch>
    </main>
  );
};

export default App;

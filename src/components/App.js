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
  const [status, setStatus] = useState([]);
  const [species, setSpecies] = useState([]);
  const [origin, setOrigin] = useState([]);

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

  const filterBy = (inputData) => {
    // console.log(inputData);
    if (inputData.key === "species") {
      const indexSpecie = species.indexOf(inputData.value);
      if (indexSpecie === -1) {
        setSpecies([...species, inputData.value]);
      } else {
        const newSpecies = [...species];
        newSpecies.splice(indexSpecie, 1);
        setSpecies(newSpecies);
      }
    } else if (inputData.key === "status") {
      const indexStatus = status.indexOf(inputData.value);
      if (indexStatus === -1) {
        setStatus([...status, inputData.value]);
      } else {
        const newStatus = [...status];
        newStatus.splice(indexStatus, 1);
        setStatus(newStatus);
      }
    } else if (inputData.key === "origin") {
      const indexOrigin = origin.indexOf(inputData.value);
      if (indexOrigin === -1) {
        setOrigin([...origin, inputData.value]);
      } else {
        const newOrigin = [...origin];
        newOrigin.splice(indexOrigin, 1);
        setOrigin(newOrigin);
      }
    }
  };

  // console.log(status);
  // console.log(species);
  // console.log(origin);

  const searchResults = characters
    .filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    )
    .filter((character) => {
      return species.length === 0 ? true : species.includes(character.species);
    })
    .filter((character) => {
      return status.length === 0 ? true : status.includes(character.status);
    })
    .filter((character) => {
      return origin.length === 0 ? true : origin.includes(character.origin);
    });

  const getSpecies = () => {
    const species = characters.map((character) => character.species);
    return [...new Set(species)];
  };

  const getStatus = () => {
    const status = characters.map((character) => character.status);
    return [...new Set(status)];
  };

  const getOrigin = () => {
    const origin = characters.map((character) => character.origin);
    return [...new Set(origin)];
  };

  // console.log(searchResults);
  return (
    <main>
      <img src={logo} alt="Rick and Morty logo" />
      <Switch>
        <Route exact path="/">
          <Filters
            filterByName={filterByName}
            inputValue={name}
            status={getStatus()}
            species={getSpecies()}
            origin={getOrigin()}
            filterBy={filterBy}
          />
          <CharacterList searchResults={searchResults} />
        </Route>
        <Route path="/characters/:route" render={renderCharacterDetails} />
      </Switch>
    </main>
  );
};

export default App;

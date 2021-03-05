// styles & resources
import "../style/components/App.scss";

// React
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// services
import api from "../services/api";

// components
import Header from "./Header";
import Loader from "./Loader";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";
import CharacterNotFound from "./CharacterNotFound";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  // state
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    status: [],
    species: [],
    origin: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  // fetch data; asynchronus

  // "useEffect function must return a cleanup function or nothing. Promises and useEffect(async () => ...) are not supported, but you can call an async function inside an effect... That's why using async directly in the useEffect function isn't allowed"
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchCharacters();
      setCharacters(data);
    };
    fetchData();
    setIsLoading(false);
  }, []);

  // additional data to pass through props

  // rewriting previous functions: const species = characters.map((character) => character.species); return [...new Set(species)];

  // getItems - to get species, status, origin - one function to rule them all

  const getItems = (key) => {
    return [...new Set(characters.map((character) => character[key]))];
  };

  // filter results' list

  const filterResults = (inputData) => {
    // console.log(inputData);
    const filterByName = (inputData) => {
      return setFilters({ ...filters, [inputData.key]: inputData.value });
    };

    const filterByCheckbox = (inputData) => {
      const add = () => {
        return setFilters({
          ...filters,
          [inputData.key]: [...filters[inputData.key], inputData.value],
        });
      };

      const remove = () => {
        const newArr = [...filters[inputData.key]];
        newArr.splice(indexOf, 1);
        return setFilters({ ...filters, [inputData.key]: newArr });
      };

      const indexOf = filters[inputData.key].indexOf(inputData.value);
      return indexOf === -1 ? add() : remove();
    };

    return inputData.key === "name"
      ? filterByName(inputData)
      : filterByCheckbox(inputData);
  };

  const sortResults = (a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };

  const searchResults = characters
    .sort(sortResults)
    .filter((character) =>
      character.name.toLowerCase().includes(filters.name.toLowerCase())
    )
    .filter((character) => {
      return filters.species.length === 0
        ? true
        : filters.species.includes(character.species);
    })
    .filter((character) => {
      return filters.status.length === 0
        ? true
        : filters.status.includes(character.status);
    })
    .filter((character) => {
      return filters.origin.length === 0
        ? true
        : filters.origin.includes(character.origin);
    });

  // render page content

  const renderCharacterDetails = (props) => {
    const route = props.match.params.route;
    const character = characters.find((character) => character.route === route);
    return character ? (
      <CharacterDetails character={character} />
    ) : (
      <CharacterNotFound />
    );
  };

  const renderHomePage = () => {
    return (
      <>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Filters
              filters={filters}
              inputValue={filters.name}
              status={getItems("status")}
              species={getItems("species")}
              origin={getItems("origin")}
              filterResults={filterResults}
            />
            <CharacterList searchResults={searchResults} />
          </Route>
          <Route path="/characters/:route" render={renderCharacterDetails} />
          <Route path="/">
            <CharacterNotFound />
          </Route>
        </Switch>
      </>
    );
  };

  // console.log(searchResults);
  return (
    <div className="app">
      <Header />
      <main className="main">{isLoading ? <Loader /> : renderHomePage()}</main>
    </div>
  );
};

export default App;

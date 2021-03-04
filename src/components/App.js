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
    console.log(inputData);
    // console.log(inputData);
    // if (inputData.key === "species") {
    //   const indexSpecie = species.indexOf(inputData.value);
    //   console.log(indexSpecie);
    //   if (indexSpecie === -1) {
    //     setSpecies([...species, inputData.value]);
    //   } else {
    //     const newSpecies = [...species];
    //     newSpecies.splice(indexSpecie, 1);
    //     setSpecies(newSpecies);
    //   }
    if (inputData.key === "status") {
      const indexStatus = status.indexOf(inputData.value);
      console.log(indexStatus);
      if (indexStatus === -1) {
        setStatus([...status, inputData.value]);
      } else {
        // debugger;
        const newStatus = [...status];
        newStatus.splice(indexStatus, 1);
        setStatus(newStatus);
      }
    }
  };

  console.log(species);
  console.log(status);

  // start dayani

  // const indexCity = cities.indexOf(inputChange.value);
  // if (indexCity === -1) {
  //   const newCities = [...cities, inputChange.value];
  //   setCities(newCities);
  // } else {
  //   /*const newCities = [...cities];
  //         newCities.splice(indexCity,1);*/
  //   // const newCities = cities.filter(city =>{
  //   //   return city !==inputChange.value;
  //   // })
  //   setCities(newCities);
  // }

  // end dayani

  const searchResults = characters
    .filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    )
    // .filter((character) => {
    //   if (species.length === 0) {
    //     return true;
    //   } else {
    //     return species.includes(character.species);
    //   }
    // });
    .filter((character) => {
      return species.length === 0 ? true : species.includes(character.species);
    })
    .filter((character) => {
      return status.length === 0 ? true : species.includes(character.species);
    });

  //   .filter(user=>{
  //     if(cities.length === 0){
  //       return true;
  //     }
  //     else{
  //       return cities.includes(user.city);
  //     }
  // })

  const getSpecies = () => {
    const species = characters.map((character) => character.species);
    return [...new Set(species)];
  };

  const getStatus = () => {
    const status = characters.map((character) => character.status);
    return [...new Set(status)];
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
            species={getSpecies()}
            status={getStatus()}
            filterBy={filterBy}
          />
          <CharacterList searchResults={searchResults} searchValue={name} />
        </Route>
        <Route path="/characters/:route" render={renderCharacterDetails} />
      </Switch>
    </main>
  );
};

export default App;

//import axios from "axios";
import { useState, useEffect } from "react";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const useDataApi = () => {
  const [pokeList, setPokeList] = useState(null);
  const [onePoke, setOnePoke] = useState(null);
  const [pokeDescription, setPokeDescription] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [interval, setInterval] = useState({
    offset: 0,
    limit: 20
  });

  useEffect(() => {
    setIsLoading(true);

    const getPokeList = async () => {
      try {
        const pokemons = await P.getPokemonsList(interval)
        const data = pokemons.results;
        const requests = await data.map(({name}) => 
          P.getPokemonByName(name)
        )

        const results = await Promise.all(requests)
        setPokeList(results)
        setIsLoading(false);

      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
  }
  getPokeList();
  
  }, [interval])

  const getOnePoke = async (name) => {
    setIsLoading(true);
    const pokemon = await P.getPokemonByName(name);
    const species = await P.getPokemonSpeciesByName(name);

    setOnePoke(pokemon);
    setPokeDescription(species);
    setIsLoading(false);
  }

  const goNext = () => {
    if(interval.offset < 200) {
      setInterval({...interval, offset: interval.offset +20})
    }
  }

  const goPrev = () => {
    if(interval.offset > 0) {
      setInterval({...interval, offset: interval.offset -20})

    }
  }

  return { pokeList, pokeDescription, error, isLoading, getOnePoke, onePoke, goNext, goPrev }
}

export default useDataApi;
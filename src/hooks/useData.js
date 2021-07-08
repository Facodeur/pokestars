import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const useDataApi = () => {
  let history = useHistory();
  const [pokeList, setPokeList] = useState();
  const [onePoke, setOnePoke] = useState();
  const [pokeDescription, setPokeDescription] = useState();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [config, setConfig] = useState({
    offset: 0,
    limit: 15,
  });

  useEffect(() => {
    setIsLoading(true);

    const getPokeList = async () => {
      try {
        const pokemons = await P.getPokemonsList(config);
        const requests = await pokemons.results.map(({ name }) =>
          P.getPokemonByName(name)
        );
        const results = await Promise.all(requests);

        setPokeList(results);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getPokeList();
  }, [config]);

  const getOnePoke = async (name) => {
    setIsLoading(true);
    try {
      const pokemon = await P.getPokemonByName(name);
      const species = await P.getPokemonSpeciesByName(name);
      setOnePoke(pokemon);
      setPokeDescription(species);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setErrorMsg("Pokemon not found.");
      setIsLoading(false);
      history.push(`/`);
    }
  };

  const changePage = (num) => {
    setConfig({ ...config, offset: (config.offset = num) });
  };

  return {
    pokeList,
    pokeDescription,
    error,
    setError,
    errorMsg,
    setErrorMsg,
    isLoading,
    getOnePoke,
    onePoke,
    changePage,
    setConfig,
    config,
  };
};

export default useDataApi;

import axios from "axios";
import { useState, useEffect } from "react";

const useDataApi = () => {
  const [pokeList, setPokeList] = useState(null);
  const [onePoke, setOnePoke] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    const getPokeList = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const data = res.data.results;
        const requests = await data.map(({url}) => {
          return axios.get(url)
        })

        const promises = await Promise.all(requests)
        setPokeList(promises)
        setIsLoading(false);

      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
  }
  getPokeList();
  // eslint-disable-next-line
  }, [])

  const getOnePoke = async (name) => {
    setIsLoading(true);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = res.data;
    setOnePoke(data);
    setIsLoading(false);
    // console.log("datasingle", data)
  }

  return { pokeList, error, isLoading, getOnePoke, onePoke }
}

export default useDataApi;
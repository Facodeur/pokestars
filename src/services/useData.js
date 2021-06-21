import axios from "axios";
import { useState, useEffect } from "react";

const useDataApi = () => {
  const [pokeList, setPokeList] = useState(null);
  const [onePoke, setOnePoke] = useState(null);
  const [pokeDescription, setPokeDescription] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    const getPokeList = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
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
  
  }, [offset])

  const getOnePoke = async (name) => {
    setIsLoading(true);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = res.data;
    const description = data.species.url;
    const resDescription = await axios.get(description)
    setOnePoke(data);
    setPokeDescription(resDescription);
    setIsLoading(false);
  }

  const goNext = () => {
    if(offset < 200) {
      setOffset(count => count +20)
    }
  }

  const goPrev = () => {
    if(offset > 0) {
      setOffset(count => count -20)
    }
  }

  return { pokeList, pokeDescription, error, isLoading, getOnePoke, onePoke, goNext, goPrev }
}

export default useDataApi;
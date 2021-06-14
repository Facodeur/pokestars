import axios from "axios";
import { useState, useEffect } from "react";

const useDataApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    const getAllData = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const data = res.data.results;

        const requests = await data.map(({url}) => {
          return axios.get(url)
        })
        const promises = await Promise.all(requests)
        setResponse(promises)
        console.log("promises", promises)

        setIsLoading(false);
      } catch (error) {
        setError(error)
      }
  }
  getAllData();
  // eslint-disable-next-line
  }, [])

  return { response, error, isLoading }
}

export default useDataApi;
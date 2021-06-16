import axios from "axios";
import { useState, useEffect } from "react";

const useDataApi = () => {
  const [response, setResponse] = useState(null);
  const [singleResponse, setSingleResponse] = useState(null);
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
        setIsLoading(false);

      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
  }
  getAllData();
  // eslint-disable-next-line
  }, [])

  const getSingleData = async (name) => {
    
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = res.data;
    setSingleResponse(data);
    
    // console.log("datasingle", data)
  }

  return { response, error, isLoading, getSingleData, singleResponse }
}

export default useDataApi;
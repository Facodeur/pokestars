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
        setResponse(res.data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error)
      }
  }
  getAllData();
  }, [])

  return { response, error, isLoading }
}

export default useDataApi;
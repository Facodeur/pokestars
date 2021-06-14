import { useContext, useState, useEffect } from "react";
import PokeDataContext from "../services/context";

const PokeList = () => {
  
  const [pokeAll, setPokeAll] = useState(null);
  const [singlePoke, setSinglePoke] = useState([])
  const { getAll, getByName } = useContext(PokeDataContext)
  useEffect(() => {
    getData();
    singleDataByName();
  }, [])

  const getData = () => {
    getAll().then(res => {
      setPokeAll(res.data.results)
      console.log("getData", res.data.results)
    })
  }

  const singleDataByName = () => {
    pokeAll && pokeAll.map(poke => {
      return getByName(poke.name).then(res => {
        setSinglePoke({singlePoke: res.data})
        console.log(singlePoke && singlePoke)
      })
    })
  }

  
  return (
    <ul>
    {pokeAll && pokeAll.map(poke => {
      return <li key={poke.name}>{poke.name}</li>
    })}
    </ul>
  ) 
};

export default PokeList;

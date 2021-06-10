import { useContext } from "react";
import PokeDataContext from "../services/context";

const PokeList = () => {
  const data = useContext(PokeDataContext);
  console.log(data);
  return <div>pokeList</div>;
};

export default PokeList;

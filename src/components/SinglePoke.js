import { useContext } from "react";
import PokeDataContext from "../services/context";
import styled from "styled-components";

const SinglePoke = ({ className }) => {

  const { response, isLoading } = useContext(PokeDataContext);

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
    {response && response.map(poke => {
      return (
        <li className={className} key={poke.data.name}>
          <img src={poke.data.sprites.front_default} alt={`${poke.data.name}`} />
          <h4>{poke.data.name}</h4>
        </li>)
    })}
    </>
  )
}

export default styled(SinglePoke)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  margin: 10px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
`

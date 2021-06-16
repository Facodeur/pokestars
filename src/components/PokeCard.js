import { useContext } from "react";
import { Link } from "react-router-dom";
import PokeDataContext from "../services/context";
import styled from "styled-components";

const PokeCard = ({ className }) => {

  const { response, isLoading } = useContext(PokeDataContext);

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
    {response && response.map(poke => {
      return (
        <Link to={`/pokestar/${poke.data.name}`} key={poke.data.name}>
          <div className={className} >
          <img src={poke.data.sprites.front_default} alt={`${poke.data.name}`} />
          <h4>{poke.data.name}</h4>
        </div>
        </Link>
          
        
        )
    })}
    </>
  )
}

export default styled(PokeCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  margin: 10px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 6px 4px rgba(255,255,255,0.57);
    transform:scale(1.02);
    transition: 0.3s;
  }
`

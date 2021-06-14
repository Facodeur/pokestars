import styled from "styled-components";
import { layout } from "../theme/helpers";
import { useContext } from "react";
import PokeDataContext from "../services/context";

const PokeList = ({ className }) => {
  
  const { response, loading } = useContext(PokeDataContext)

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <section className={className}>
      <ul>
    {response && response.map(poke => {
      return (
        <li key={poke.data.name}>
          <img src={poke.data.sprites.front_default} alt="" />
          {poke.data.name}
        
        </li>)
    })}
    </ul>
    </section>
    
  ) 
};

export default styled(PokeList)`
  ${layout()}
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
    margin: 10px;
    
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
  }
  
`

import styled from "styled-components";
import { useContext } from "react";
import PokeDataContext from "../services/context";

const PokeList = ({ className }) => {
  
  const { response, loading } = useContext(PokeDataContext)
 
    console.log("pokelist", response)

  


  if(loading) {
    return <p>Loading...</p>
  }

  
  return (
    <section className={className}>
      <ul>
    {response && response.map(poke => {
      return <li key={poke.name}>{poke.name}</li>
    })}
    </ul>
    </section>
    
  ) 
};

export default styled(PokeList)`
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
    width: 150px;
    height: 150px;
    margin: 10px;
    background: gray;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
  }
  
`

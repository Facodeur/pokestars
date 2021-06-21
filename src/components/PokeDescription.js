import { useContext } from 'react';
import PokeDataContext from "../services/context";
import styled from "styled-components";


const PokeDescription = ({ className }) => {
  
  const { pokeDescription } = useContext(PokeDataContext);
  const descriptionFr = `${pokeDescription && pokeDescription.data.flavor_text_entries[16].flavor_text}`;

  return (
    <p className={className}>
      {descriptionFr}
    </p>
  )
}

export default styled(PokeDescription)`
  padding: 8px;
 
`

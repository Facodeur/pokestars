import { useContext } from 'react';
import PokeDataContext from "../services/context";
import styled from "styled-components";

const PokeStats = ({ className }) => {

  const { onePoke } = useContext(PokeDataContext);

  return (
    <>
      {onePoke && onePoke.stats.map(stat => {
        return (
          <div className={className} key={stat.stat.name}>
            <p>{stat.stat.name}  {""}
              <meter min="0" max="100" value={stat.base_stat}></meter>
            </p>
          </div>
        )
      })}
    </>
  )
}

export default styled(PokeStats)`
  width: 200px;
`

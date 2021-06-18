import { useContext } from 'react';
import PokeDataContext from "../services/context";
import styled from "styled-components";
import ProgressBar from './ProgressBar';

const PokeStats = ({ className }) => {

  const { onePoke } = useContext(PokeDataContext);

  return (
    <>
      {onePoke && onePoke.stats.map(stat => {
        return (
          <div className={className} key={stat.stat.name}>
            <p>{stat.stat.name}</p>
            <ProgressBar done={stat.base_stat} />
          </div>
        )
      })}
    </>
  )
}

export default styled(PokeStats)`
  width: 200px;
`

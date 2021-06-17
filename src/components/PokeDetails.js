import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import PokeDataContext from "../services/context";
import styled from "styled-components";
import Spinner from "./Spinner";

const PokeDetails = ({ className }) => {
  let { name } = useParams();
  const { getOnePoke, onePoke, isLoading } = useContext(PokeDataContext);

  useEffect(() => {
    getOnePoke(name);
    console.log(onePoke && onePoke);
    // eslint-disable-next-line
  }, [name]);

  if (isLoading) {
    return <Spinner />;
  }

  // const stats = onePoke && onePoke.stats.map(stat => {
  //    return stat.base_stat;
  // })

  //console.log(stats)

  return (
    <>
      {onePoke && (
        <div className={className}>
          <h4>{onePoke.name}</h4>
          <img src={onePoke.sprites.other.dream_world.front_default} alt="" />
        </div>
      )}
    </>
  );
};

export default styled(PokeDetails)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  img {
    width: 190px;
    height: 190px;
  }
`;

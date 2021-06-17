import { useParams } from "react-router-dom";
import { useEffect,useContext } from "react";
import PokeDataContext from "../services/context";
import styled from "styled-components";
import Spinner from "./Spinner";

const PokeDetails = ({ className }) => {

  let { name } = useParams();
  const { getOnePoke, onePoke, isLoading } = useContext(PokeDataContext);

  useEffect(() => {
    
    getOnePoke(name);
    console.log(onePoke && onePoke)
    // eslint-disable-next-line
  }, [name]);

  if(isLoading) {
    return <Spinner />
  }


  
  return (
    <div className={className}>
      
      <img src={onePoke.sprites.front_default} alt="" />
    </div>
  );
};

export default styled(PokeDetails)`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  img {
    width: 200px;
    height: 200px;
  }
`;

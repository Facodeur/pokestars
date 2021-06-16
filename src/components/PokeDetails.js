import { useParams } from "react-router-dom";
import { useEffect,useContext } from "react";
import PokeDataContext from "../services/context";
import styled from "styled-components";

const PokeDetails = ({ className }) => {

  let { name } = useParams();
  const { getSingleData, singleResponse } = useContext(PokeDataContext);

  useEffect(() => {
    getSingleData(name);
    // eslint-disable-next-line
  }, [name]);


  
  return (
    <div className={className}>
      <h3>Je suis le pokemon {singleResponse && singleResponse.name}</h3>
    </div>
  );
};

export default styled(PokeDetails)``;

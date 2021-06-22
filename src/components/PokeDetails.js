import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import PokeDataContext from "../services/context";
import styled from "styled-components";
import { motion } from "framer-motion";
import { layout } from "../theme/helpers";
import Spinner from "./Spinner";
import PokeStats from "./PokeStats";
import PokeDescrition from "./PokeDescription";

const PokeDetails = ({ className }) => {
  let { name } = useParams();

  const { getOnePoke, onePoke, isLoading } = useContext(PokeDataContext);
  
  
  useEffect(() => {
    getOnePoke(name);
    // eslint-disable-next-line
  }, [name]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.4 }}
      >
        {onePoke && (
          <div className={className}>
            <h3>{onePoke.name}</h3>
            <PokeDescrition />
            <img
              src={onePoke.sprites.other.dream_world.front_default}
              alt=""
            />
            <PokeStats />
          </div>
        )}
      </motion.div>
    );
  }
};

export default styled(PokeDetails)`
  ${layout()}
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

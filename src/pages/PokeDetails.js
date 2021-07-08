import { useParams, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import PokeDataContext from "../context/context";
import styled from "styled-components";
import { motion } from "framer-motion";
import { layout } from "../theme/helpers";
import Spinner from "../components/Spinner";
import PokeStats from "../components/pokestars/PokeStats";
import PokeDescrition from "../components/pokestars/PokeDescription";

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
            <Link className="btnBack" to="/"><i className="fas fa-angle-left"></i> Back to home</Link>
            <h3>{onePoke.name}</h3>
            <PokeDescrition />
            <img src={onePoke.sprites.other.dream_world.front_default} alt="" />
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

  .btnBack {
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 7px;
    margin: 5px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
    &:hover {
      box-shadow: 0px 0px 6px 4px rgba(255, 255, 255, 0.57);
      transition: 0.3s;
    }
  }
`;

import { useContext } from "react";
import { Link } from "react-router-dom";
import PokeDataContext from "../../context/context";
import styled from "styled-components";
import { motion } from "framer-motion";

const PokeCard = ({ className }) => {
  const { pokeList } = useContext(PokeDataContext);

  return (
    <>
      {pokeList &&
        pokeList.map((poke) => {
          return (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.4 }}
              key={poke.name}
            >
              <Link className={className} to={`/pokestar/${poke.name}`}>
                <img src={poke.sprites.front_default} alt={`${poke.name}`} />
                <h4>{poke.name}</h4>
              </Link>
            </motion.div>
          );
        })}
    </>
  );
};

export default styled(PokeCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  margin: 10px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 6px 4px rgba(255, 255, 255, 0.57);
    transform: scale(1.02);
    transition: 0.3s;
  }
`;

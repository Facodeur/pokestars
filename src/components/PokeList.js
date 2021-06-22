import { useContext } from "react";
import styled from "styled-components";
import { layout } from "../theme/helpers";
import PokeCard from "./PokeCard";
import PokeDataContext from "../services/context";
import Spinner from "./Spinner";


const PokeList = ({ className }) => {
  const { goNext, goPrev, isLoading } = useContext(PokeDataContext);

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div className={className}>
      <div className="buttons-group">
        <button onClick={goPrev}><i className="fas fa-angle-left"></i></button>
        <button onClick={goNext}><i className="fas fa-angle-right"></i></button>
      </div>
      <section className="pokeList">
        <PokeCard />
      </section>
    </div>
  );
};

export default styled(PokeList)`
  ${layout()}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  .buttons-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-top: 30px;
    button {
      width: 50px;
      border: none;
      border-radius: 5px;
      font-size: 1.5rem;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      &:hover {
        box-shadow: 0px 0px 6px 4px rgba(255, 255, 255, 0.57);
        transform: scale(1.02);
        transition: 0.3s;
      }
    }
  }

  .pokeList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-top: 20px;
  }
`;

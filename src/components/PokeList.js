import { useContext } from "react";
import styled from "styled-components";
import { layout } from "../theme/helpers";
import PokeCard from "./PokeCard";
import PokeDataContext from "../context/context";
import Spinner from "./Spinner";
import Paginate from "./Paginate";


const PokeList = ({ className }) => {
  const { isLoading } = useContext(PokeDataContext);

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div className={className}>
      <section className="pokeList">
        <PokeCard />
      </section>
      <div className="buttons-group">
        <Paginate />
      </div>
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
    margin-top: 30px;
    button {
      width: 40px;
      margin: 1px;
      border: none;
      font-size: 1.1rem;
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

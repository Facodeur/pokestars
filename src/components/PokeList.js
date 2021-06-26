import { useContext } from "react";
import styled from "styled-components";
import { layout } from "../theme/helpers";
import PokeCard from "./PokeCard";
import PokeDataContext from "../context/context";
import Spinner from "./Spinner";
import Paginate from "./Paginate";

const PokeList = ({ className }) => {
  const { isLoading } = useContext(PokeDataContext);

  if (isLoading) {
    return <Spinner />;
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
  margin-top: 50px;

  .pokeList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-top: 20px;
  }
`;

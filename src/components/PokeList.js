import styled from "styled-components";
import { layout } from "../theme/helpers";
import PokeCard from "./PokeCard";

const PokeList = ({ className }) => {

  return (
    <section className={className}>
        <PokeCard />
    </section>
  );
};

export default styled(PokeList)`
  ${layout()}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 50px;
`;

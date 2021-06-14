import styled from "styled-components";
import { layout } from "../theme/helpers";
import SinglePoke from "./SinglePoke";

const PokeList = ({ className }) => {

  return (
    <section className={className}>
      <ul>
        <SinglePoke />
      </ul>
    </section>
  );
};

export default styled(PokeList)`
  ${layout()}
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  
`;

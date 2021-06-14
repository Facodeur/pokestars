import styled from "styled-components";
import { pxToRem } from "../theme/helpers";

const Banner = ({ className }) => {
  return (
    <header className={className}>
      <h1>PokéStars</h1>
    </header>
  )
}

export default styled(Banner)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ef5350;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.5);
  margin-top: 30px;

  h1 {
    font-family: 'Wendy One', sans-serif;
    font-size: ${pxToRem(50)};
    color: #fbc531;
    text-shadow: 3px 3px 2px #2f3640;
  }
`
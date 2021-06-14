import styled from "styled-components";


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
`
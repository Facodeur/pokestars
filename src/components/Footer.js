import styled from 'styled-components';


const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <h6> @Created by wilfried</h6>
    </footer>
  )
}

export default styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-top: 1px solid #fff;
  box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.5);
`

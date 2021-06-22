import styled from 'styled-components';


const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <h5> @Created by wilfried</h5>
    </footer>
  )
}

export default styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  border-top: 1px solid #fff;
  box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.5);
`

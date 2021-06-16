import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PokeDetails = ({ className }) => {
  let { name } = useParams();
  console.log(name)
  return (
    <div className={className}>
      <h3>Je suis le pokemon {name}</h3>
    </div>
  )
}

export default styled(PokeDetails)`


`

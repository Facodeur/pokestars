import { useContext } from 'react'
import PokeDataContext from "../context/context";


const Paginate = () => {
  const { changePage } = useContext(PokeDataContext);

  let paginate = [];
  let max = 100;
  let limit = 15;
  let fin = max / 10;

  for(let i = 0; i < fin; i++) {
    paginate.push(<button key={i} onClick={() => changePage(i*limit)} >{i +1}</button>)
  }

  
  return (
    <div>
      {paginate}
    </div>
  )
}

export default Paginate


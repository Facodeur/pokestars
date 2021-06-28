import { useContext } from "react";
import PokeDataContext from "../../context/context";
import styled from "styled-components";
import ProgressBar from "../ProgressBar";

const PokeStats = ({ className }) => {
  const { onePoke } = useContext(PokeDataContext);

  return (
    <div className={className}>
      {onePoke &&
        onePoke.stats.map((stat) => {
          return (
            <div className="stat" key={stat.stat.name}>
              <p>{stat.stat.name}</p>
              <ProgressBar done={stat.base_stat} />
            </div>
          );
        })}
    </div>
  );
};

export default styled(PokeStats)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin-bottom: 50px;
  .stat {
    margin: 10px;
  }
  p {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 569px) {
    .stat {
      margin: 0;
    }
  }
`;

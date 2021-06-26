import { useContext, useState } from "react";
import PokeDataContext from "../context/context";
import styled from "styled-components";

const Paginate = ({ className }) => {
  const { changePage, config } = useContext(PokeDataContext);
  const [currentPage, setCurrentPage] = useState(config.offset / 15);

  let pages = [];
  const max = 100;
  const limit = 15;
  let fin = max / 10;

  for (let i = 0; i < fin; i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
    changePage(Number(event.target.id) * limit);
  };

  const renderPageNumber = pages.map((number) => {
    return (
      <li
        id={number}
        key={number}
        className={currentPage === number ? "active" : null}
        onClick={handleClick}
      >
        {number + 1}
      </li>
    );
  });

  return <ul className={className}>{renderPageNumber}</ul>;
};

export default styled(Paginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 30px;
    width: 30px;
    margin: 3px;
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 6px 4px rgba(255, 255, 255, 0.57);
      transform: scale(1.02);
      transition: 0.3s;
    }
  }

  li.active {
    box-shadow: 0px 0px 6px 4px rgba(255, 255, 255, 0.57);
  }
`;

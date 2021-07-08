import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PokeDataContext from "../context/context";

const SearchBar = ({ className }) => {
  let history = useHistory();

  const { error, setError, errorMsg, setErrorMsg } = useContext(PokeDataContext);

  const [search, setSearch] = useState("");

  const getPokemon = () => {
    if (search === "") {
      setError(true);
      setErrorMsg("Please enter Name");
      return;
    }

    history.push(`/pokestar/${search}`);
    setError(false);
  };

  return (
    <>
      <div className={className}>
        <div className="search">
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => setSearch(event.target.value)}
          />
          {error && <p>{errorMsg}</p>}
        </div>
        <button onClick={getPokemon}>Search</button>
      </div>
    </>
  );
};

export default styled(SearchBar)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;

  .search {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      border-radius: 5px;
      margin-right: 10px;
      border: 1px solid #ddd;
      outline-style: none;
      &:focus {
        box-shadow: 0px 0px 4px 3px rgba(255, 255, 255, 0.57);
      }
    }
    p {
      margin: 0;
      color: red;
    }
  }
  button {
    border-radius: 5px;
    border: 1px solid #ddd;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 4px 3px rgba(255, 255, 255, 0.57);
      transition: 0.3s;
    }
  }
`;

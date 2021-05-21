import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { PokemonLogoURL } from "./constants";
import background from "../imgs/background.png";
import "./Home.css";

export const HomePage = ({ setPokemon, favorites }) => {
  const history = useHistory();
  
  function handleSearchClick() {
    history.replace("/card");
  }

  function handleRandomClick() {
    setPokemon( Math.floor( Math.random() *  898 ) + 1 );
    history.replace("/card");
  }

  function handleSubmit(event){
    event.preventDefault();
    setPokemon((event.target.value).toLowerCase());
  }

  return (
    <Home width="20px">
      <Wrapper>
        <PokemonLogo src={PokemonLogoURL} alt="Pokemon Logo" />
        <input onChange={handleSubmit} style={{ marginBottom: "20px" }} type="search" placeholder="Search a Pokémon"/>
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Search</button>
          <button onClick={handleRandomClick}>Favorites</button>
          <button onClick={handleRandomClick}>Random</button>
        </ButtonsWrapper>
        {favorites.map((favorite, index) => <p key={index}><img className="image" src={favorite.sprites.front_default} />{favorite.name}  #{favorite.id} </p>)}
      </Wrapper>
    </Home>
  );
};

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:url(${background});
  background-size: cover;
`;
/**/
//background-image: url("https://i.pinimg.com/originals/26/b5/55/26b5551ba10f013a335e91b98f530d51.png");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const PokemonLogo = styled.img`
  display: flex;
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  button {
    cursor: pointer;
    color: white;
    padding: 10px;
    font-weight: 600;
    background-color: red;
    border: none;
    border-radius: 6px;
    transition: all ease-out 0.3s;
    width: 33.3%;

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }
  }
`;
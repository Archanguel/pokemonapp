import React from "react";
import styled from "styled-components";
import pokedex from "../imgs/pokedex.jpg";

export const PokeCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = React.useState();

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) =>
      response.json().then((data) => setPokemonData(data))
    );
  }, []);

  return (
    <Pokedex width="30px">
      <Container className="grid-container">
        <Div>
          {pokemonData && (
            <img src={pokemonData.sprites.front_default} alt="Imagen del Pokemon" />
          )}
        </Div>

        <Div className="item1">
          <p>Name: {pokemonData.forms[0].name}</p>
          <p>Nº {pokemonData.id}</p>
        </Div>
        
        <Div className="item2">
          <p>Type: {pokemonData.types[0].type.name}</p>
        </Div>

        <Div className="item3">
          <p>Height: {pokemonData.height}</p>
          <p>Width: {pokemonData.width}</p>
        </Div>

        <Div className="item4">
          <p>Ability 1: {pokemonData.abilities[0].ability.name}</p>
          <p>Ability 2: {pokemonData.abilities[1].ability.name}</p>
        </Div>
          
      </Container>
    </Pokedex>
  );
};

const Pokedex = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  background-color: #2196F3;
  padding: 10px;
  background:url(${pokedex});
`;

const Div = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px 0;
  font-size: 30px;
`;


/*
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  background:url(${pokedex});
  background-repeat: no-repeat;
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

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }

    &:first-child {
      width: 70%;
    }

    &:last-child {
      width: 30%;
    }
  }
`;*/

import React from "react";
import styled from "styled-components";
import pokedex from "../imgs/pokedex.png";

export const PokeCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = React.useState();

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) =>
      response.json().then((data) => setPokemonData(data))
    );
  }, []);

  //const typeList = pokemonData.types.map((type) => <li>{type.name}</li>)
  //const abilityList = pokemonData.abilities.map((ability) => <li>{ability.name}</li>)

  return (
    <Pokedex width="20px">
      <Container>
        {pokemonData && (
          <img src={pokemonData.sprites.front_default} alt="Imagen del Pokemon" />
        )}

        <Div>
          <p>Name: {pokemonData.forms[0].name}</p>
          <p>Nº {pokemonData.id}</p>
        </Div>
        
        <Div>
          <p>Types: {pokemonData.types.map((type) => <li>{type.name}</li>)}</p>
        </Div>

        <Div>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </Div>

        <Div>
          <p>Abilities: {pokemonData.abilities.map((ability) => <li>{ability.name}</li>)}</p>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800 px;
  height: 2000 px;
  background-image:url(${pokedex});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Div = styled.div`
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

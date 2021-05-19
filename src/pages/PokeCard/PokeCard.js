import React from "react";
import styled from "styled-components";
import pokedex from "../imgs/pokedex.png";
import background from "../imgs/pokebola.jpg";

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
    <Fondo>
    <Pokedex>
        {pokemonData && (
          <Container>
            <Image>
              <img src={pokemonData.sprites.other.dream_world.front_default} alt="Imagen del Pokemon" />
            </Image>

            <Info>
              <p>Name: {pokemonData.name}</p>
              <p>Nº {pokemonData.id}</p>
              <p>Types: {pokemonData.types.map((types) => <li>{types.type.name}</li>)}</p>
            </Info>

            <Extra>
              <p>Height: {pokemonData.height}</p>
              <p>Weight: {pokemonData.weight}</p>
              <p>Abilities: {pokemonData.abilities.map((abilities) => <li>{abilities.ability.name}</li>)}</p>
            </Extra>
          </Container>
        )}
    </Pokedex>
    </Fondo>
  );
};

const Fondo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image:url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Pokedex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100vh;
  align-items: center;
  background-image:url(${pokedex});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  family-font: arial;
  text-transform: capitalize;
`;

const Image = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

const Extra = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  line-height: 1.5em;
  align-items: center;
`;

/*const Div = styled.div`
  font-size: 30px;
`;

Types: <table>{pokemonData.types.map((types) => <tbody>{types.type.name}</tbody>)}</table>
*/
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

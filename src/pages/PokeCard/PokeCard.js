import React from "react";
import styled from "styled-components";
import pokedex from "../imgs/pokedex.png";
import background from "../imgs/pokebola.jpg";
import "./Pokedex.css";

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
    <div className="pokedex">
          <div className="left-container">
      
            <div className="left-container__top-section">
              <div className="top-section__blue"></div>
      
                <div className="top-section__small-buttons">
                  <div className="top-section__red"></div>
                  <div className="top-section__yellow"></div>
                  <div className="top-section__green"></div>
                </div>
      
              </div>
      
            <div className="left-container__main-section-container">
              <div className="left-container__main-section">
                <div className="main-section__white">
                  <div className="main-section__black">
                    {pokemonData && (
                    <div className="main-screen hide">
                      <div className="screen__header">
                        <span className="poke-name">{pokemonData.name}</span>
                        <span className="poke-id">#{pokemonData.id}</span>
                      </div>

                      <div className="screen__image">
                        <img src={pokemonData.sprites.front_default} className="poke-front-image" alt="front"/>
                        <img src={pokemonData.sprites.back_default} className="poke-back-image" alt="back"/>
                      </div>

                      <div className="screen__description">
                        <div className="stats__types">
                          <span className="poke-type-one">{pokemonData.types.map((types, index) => <li key={index}>{types.type.name}</li>)}</span>
                        </div>
                        <div className="screen__stats">
                          <p className="stats__weight">
                            weight: <span className="poke-weight">{pokemonData.weight}</span>
                          </p>
                          <p className="stats__height">
                            height: <span className="poke-height">{pokemonData.height}</span>
                          </p>
                        </div>
                      </div>

                    </div>
                    )}
                  </div>
                </div>
      
                <div className="left-container__controllers">
                  <div className="controllers__d-pad">
                    <div className="d-pad__cell top"></div>
                    <div className="d-pad__cell left"></div>
                    <div className="d-pad__cell middle"></div>
                    <div className="d-pad__cell right"></div>
                    <div className="d-pad__cell bottom"></div>
                  </div>
      
                  <div className="controllers__buttons">
                    <div className="buttons__button">B</div>
                    <div className="buttons__button">A</div>
                  </div>
                </div>
      
              </div>
      
              <div className="left-container__right">
                <div className="left-container__hinge"></div>
                <div className="left-container__hinge"></div>
              </div>
            </div>
          </div>
      
          <div className="right-container">
      
            <div className="right-container__black">
              <div className="right-container__screen">
                <div className="list-item">Favoritos</div>
              </div>
            </div>
      
            <div className="right-container__buttons">
              <div className="left-button">♡♥</div>
              <div className="right-button">Menu</div>
            </div>
      
          </div>
    </div>
  );
};


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

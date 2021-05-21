import React from "react";
import styled from "styled-components";
import pokedex from "../imgs/pokedex.png";
import background from "../imgs/pokebola.jpg";
import "./Pokedex.css";
import { useHistory } from "react-router";

export const PokeCard = ({ pokemon, addFavorite, favorites, deleteFav }) => {
  const [pokemonData, setPokemonData] = React.useState();
  const history = useHistory();
  const favoriteNames = favorites.map(favorite => favorite.name)
  const isPokemonAdded = pokemonData && favoriteNames.includes(pokemonData.name);
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    setStatus("loading");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json()
      .then((data) => setPokemonData(data)))
      .catch((error) => setStatus("error"))
      .finally(setStatus("idle"));
  }, [pokemon]);

  if(status === "idle"){
    
    return (
      <>
        {pokemonData && (
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
                            {pokemonData.types.map((types, index) => <span className="poke-type-one" key={index}>{types.type.name}</span>)}
                          </div>
                          <div className="screen__stats">
                            <p className="stats__weight">
                              Weight: <span className="poke-weight">{pokemonData.weight}</span>
                            </p>
                            <p className="stats__height">
                              Height: <span className="poke-height">{pokemonData.height}</span>
                            </p>
                          </div>
                        </div>

                      </div>
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
                  {favorites.map((favorite, index) => <div className="list-item" key={index} onClick={isPokemonAdded ? () => deleteFav(favorite.name) : () => deleteFav(favorite.name)}>♥ {favorite.name}  #{favorite.id} </div>)}
                </div>
              </div>
        
              <div className="right-container__buttons">
                <div className="left-button" onClick={isPokemonAdded ? () => deleteFav(pokemonData.name) : () => addFavorite(pokemonData)}> {isPokemonAdded ? '♥' : '♡'} </div>
                <div className="right-button" onClick={() => history.push("./")}>Go To Menu</div>
              </div>
        
            </div>
          </div>
        )}
      </>
    );
  
  }else if(status === "loading"){
      return 'Loading...';
  }else if(status === "error"){
      return (
        <>
        <button onClick={() => history.push("./")}>Go To Menu</button>
        ¡Pokémon not found!
        </>
      );
  }
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

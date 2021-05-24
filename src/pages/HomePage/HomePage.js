import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
//import { PokemonLogoURL } from "./constants";
import pokemonFinder from "../imgs/PokemonFinder.png";
import background from "../imgs/background3.png";
//import favoriteBackground from "../imgs/favoriteBackground.jpg";
import "./Home.css";

export const HomePage = ({ setPokemon, favorites, deleteFav }) => {
  const history = useHistory();
  //const favoriteNames = favorites.map(favorite => favorite.name);
  //const isPokemonAdded = pokemonData && favoriteNames.includes(pokemonData.name);
  const [status, setStatus] = React.useState("show");
  
  /*React.useEffect(() => {
    setStatus("show");
  }, []);*/
  
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

  function ShowFav(){
    if(status === "hide"){
      setStatus("show");
    }else if(status === "show"){
      setStatus("hide");
    }
  }

  return (
    <Home>
      <Wrapper>
        <PokemonLogo src={pokemonFinder} alt="Pokemon Logo" />
        <input className="searchBar" onChange={handleSubmit} style={{ marginBottom: "20px", marginTop: "20px" }} type="search" placeholder="Search a Pokémon"/>
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Search</button>
          <button onClick={ShowFav}>{(status==="show") ?  "Hide Favorites" : "Show Favorites"}</button>
          <button onClick={handleRandomClick}>Random</button>
        </ButtonsWrapper>

          <Pokebola>
            { (status==="show") ?  favorites.map((favorite, index) => 
            <div className="favs" key={index}> 
              <div> #{favorite.id} </div> 
                <img className="image" src={favorite.sprites.front_default} alt="Favorite Pokémon" />
              {favorite.name}
            </div>) : ""}
          </Pokebola>
          
      </Wrapper>
    </Home>
  );
};

/* onClick={isPokemonAdded ? () => deleteFav(favorite.name) : () => deleteFav(favorite.name)} */

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
  align-self: center;
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

const Pokebola = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-top: 20px;
  gap: 10px;
  justify-content: center;
`;
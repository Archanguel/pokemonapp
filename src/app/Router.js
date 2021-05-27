import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PokeCard, HomePage } from "../pages";

export const Router = () => {
  const [pokemon, setPokemon] = React.useState(JSON.parse(localStorage.getItem('pokemon') || ""));
  const [favorites, setFavorite] = React.useState(JSON.parse(localStorage.getItem("favorites") || [])); //JSON.parse(localStorage.getItem("favorites"))       `${JSON.parse(localStorage.getItem("favorites"))}`

  function handleSetPokemon(pokemon) {
    setPokemon(pokemon);
  }
  
  function handleAddFavorite(pokemon){
    setFavorite((oldFavorites) => [...oldFavorites, pokemon]);
  }

  function deleteFavorite(pokemonName){
    setFavorite(favorites.filter((favorite) => favorite.name !== pokemonName));
  }

  /*function savedPokemon(pokemon) {
    localStorage.setItem('pokemon', JSON.stringify(pokemon));
  }*/

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card">
          <PokeCard pokemon={pokemon} addFavorite={handleAddFavorite} favorites={favorites} deleteFav={deleteFavorite} /*saved={savedPokemon}*//>
        </Route>

        <Route path="/">
          <HomePage  setPokemon={handleSetPokemon} favorites={favorites} deleteFav={deleteFavorite} /*saved={savedPokemon}*//>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

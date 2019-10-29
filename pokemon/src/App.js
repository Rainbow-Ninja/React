
import React from 'react';
import './App.css';
import PokemonInfo from "./PokemonInfo";

function App() {
  return (
    <div>
      <PokemonInfo
            pokeName = "Charizard"
            pokeTypeFirst = "Fire"
            pokeTypeSecond = "Flying"
            pokeImage= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        />
    </div>
  );
}

export default App;


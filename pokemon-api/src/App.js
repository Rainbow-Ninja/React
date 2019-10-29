import React from 'react';
import PokemonInfo from "./PokemonInfo";
import './App.css';
const Pokedex = require('pokedex-promise-v2');
let P = new Pokedex();

function App() {
  return (
    <div className="App">
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

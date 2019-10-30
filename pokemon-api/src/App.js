import React from 'react';
import PokemonInfo from "./PokemonInfo";
import './App.css';

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

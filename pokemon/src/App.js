// Challenge 1.1: Pokemon Info Component
// Create a function component that would show take this component & display it successfully (copy & paste this directly into your App.js!) :
//         <PokemonInfo
//             pokeName = "Charizard"
//             pokeTypeFirst = "Fire"
//             pokeTypeSecond = "Flying"
//             pokeImage= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
//         />
// Where "pokeName" would be a <h1>
// and "pokeImage" would be an <img> 
// and "pokeTypeFirst" would be a <h3>
// and "pokeTypeSecond" is also a <h3>, but only shows if "pokeTypeSecond" has a value. 


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


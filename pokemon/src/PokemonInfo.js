import React from "react";


const PokemonInfo = (props) => {
    return (
        <div>
            <h1 className="pokeName">{props.pokeName}</h1>
            <img className="pokeImage" src={props.pokeImage} alt="pokemon" />
            <h3 className="pokeTypeFirst">{props.pokeTypeFirst}</h3>
            <h3 className="pokeTypesecond">{props.pokeTypeSecond? props.pokeTypeSecond: null }</h3> 
        </div>
    )
}

export default PokemonInfo;

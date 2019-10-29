import React from "react";


const PokemonInfo = (props) => {
    return (
        <div>
            <h1 className="pokeName">{props.pokeName}</h1>
            <img className="pokeImage" src={props.pokeImage} alt="pokemon" />
            <h3 className="pokeTypesecond">{props.pokeTypeFirst} {props.pokeTypeSecond? " and " + props.pokeTypeSecond: null} Type Pokemon</h3> 
        </div>
    )
}

export default PokemonInfo;

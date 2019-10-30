async function getRandomPokemon () {
    var randomPokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`);
    var sanitizedPokeData = await randomPokeData.json();
    return (sanitizedPokeData);
}

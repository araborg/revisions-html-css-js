const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

let inputPoke;

const findPokemon = () => {
    const inputValue = searchInput.value;

    console.log(pokemons(inputValue));
};

searchBtn.addEventListener("click", findPokemon);

// console.log(inputPoke);

const pokemonUrl = "https://pokemon-search-app.freecodecamp.rocks";

const pokemons = async () => {
    // const pokeNameOrNum = searchInput.value;
    const pokeNameOrNum = "25"; // Pikachu
    const eachPokemon = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokeNameOrNum}`;

    console.log(eachPokemon);

    // try {
    //     const res = await fetch(`pokemonUrl/api/pokemon/${pokeNameOrNum}`);
    //     const pokem = await res.json();
    //     console.log(pokem);

    //     // findPokemon(pokem);
    // } catch (err) {
    //     console.error(err);
    // }
};

pokemons();

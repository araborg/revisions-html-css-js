const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const pokemonUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputPoke}`;
console.log(pokemonUrl);

const pokemons = async () => {
    try {
        const res = await fetch(pokemonUrl);
        const pokem = await res.json();

        findPokemon(pokem);
    } catch (err) {
        console.error(err);
    }
};

// pokemons();

let inputPoke;

const findPokemon = (pokem) => {
    inputPoke = searchInput.value;

    // console.log(pokem);
};

searchBtn.addEventListener("click", findPokemon);

console.log(inputPoke);

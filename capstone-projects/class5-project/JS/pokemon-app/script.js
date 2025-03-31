const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const findPokemon = (pokem) => {
    // const inputValue = searchInput.value;
    // console.log(pokemons(inputValue));

    console.log([...pokem]);
};

searchBtn.addEventListener("click", findPokemon);

const pokemonUrl = "https://pokemon-search-app.freecodecamp.rocks";

const pokemons = async () => {
    try {
        const pokeNameOrNum = searchInput.value.toLowerCase();

        const eachPokemon = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokeNameOrNum}`;

        const res = await fetch(eachPokemon);
        const pokem = await res.json();

        findPokemon(pokem);
    } catch (err) {
        console.error(err);
    }
};

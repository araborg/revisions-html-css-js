const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const pokemonUrl = "https://pokemon-search-app.freecodecamp.rocks";

const pokemons = async () => {
    try {
        const res = await fetch(pokemonUrl);
        const pokem = await res.json();

        console.log(pokem);
    } catch (err) {
        console.error(err);
    }
};

pokemons();

const findPokemon = (poke) => {
    const inputPoke = searchInput.value;

    console.log(inputPoke);
};

searchBtn.addEventListener("click", findPokemon);

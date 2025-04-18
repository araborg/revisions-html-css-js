const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");

const pokemons = async () => {
    try {
        const pokeNameOrNum = searchInput.value.toLowerCase();

        const eachPokemon = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokeNameOrNum}`;

        const res = await fetch(eachPokemon);
        const data = await res.json();

        findPokemon(data);
    } catch (err) {
        console.error(err);
    }
};

const findPokemon = (data) => {
    console.log(data.name);

    pokemonName.textContent = `${data.name}`;
};

searchBtn.addEventListener("click", findPokemon);

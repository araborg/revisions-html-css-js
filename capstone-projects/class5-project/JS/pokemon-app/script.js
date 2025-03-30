const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

// pokemons();

let inputPoke;

const findPokemon = (pokem) => {
    // const inputValue = searchInput.value;

    // const result = pokemons();

    console.log(pokem);
};

searchBtn.addEventListener("click", findPokemon);

// console.log(inputPoke);

// const pokemonUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputPoke}`;
// console.log(pokemonUrl);

const pokemons = async () => {
    try {
        const inputValue = searchInput.value;

        const res = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputValue}`
        );

        const pokem = await res.json();
        findPokemon(pokem);

        console.log(pokem);

        // findPokemon(pokem);
    } catch (err) {
        console.error(err);
    }
};

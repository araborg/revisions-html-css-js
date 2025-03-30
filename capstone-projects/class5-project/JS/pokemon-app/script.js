const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

// pokemons();

let inputPoke;

const findPokemon = () => {
    const inputValue = searchInput.value;

    pokemons();

    // console.log(pokem);
};

searchBtn.addEventListener("click", findPokemon);

console.log(inputPoke);

// const pokemonUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputPoke}`;
// console.log(pokemonUrl);

const pokemons = async () => {
    // console.log(input);

    try {
        // const res = await fetch(pokemonUrl);
        const inputValue = searchInput.value;
        console.log(inputValue);

        // const res = await fetch(
        //     `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`
        // );

        // console.log(res);
        // const pokem = await res.json();

        // console.log(pokem);

        // findPokemon(pokem);
    } catch (err) {
        console.error(err);
    }
};

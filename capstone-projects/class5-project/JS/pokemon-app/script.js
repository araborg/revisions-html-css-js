const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

let inputPoke;

const findPokemon = () => {
    const inputValue = searchInput.value;

    pokemons(inputValue);
};

searchBtn.addEventListener("click", findPokemon);

// console.log(inputPoke);

const pokemons = async (input) => {
    try {
        const res = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`
        );

        const pokem = await res.json();
        console.log(pokem);

        return pokem;
    } catch (err) {
        console.error(err);
    }
};

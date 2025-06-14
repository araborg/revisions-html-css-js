/*
https://rpg-creature-api.freecodecamp.rocks/api/creature/pyrolynx
https://rpg-creature-api.freecodecamp.rocks/api/creature/1
*/

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");

const weight = document.getElementById("weight");
const height = document.getElementById("height");

const spriteContainer = document.getElementById(
	"sprite-container"
);

const types = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById(
	"special-attack"
);
const specialDefense = document.getElementById(
	"special-defense"
);
const speed = document.getElementById("speed");

const fetchData = async () => {
	const pokemonNameOrId = searchInput.value.toLowerCase();
	console.log(pokemonNameOrId);

	try {
		const res = await fetch(
			`https://rpg-creature-api.freecodecamp.rocks/api/creature/${pokemonNameOrId}`
		);

		const data = await res.json();

		console.log(data);

		// getPokemon(data);
	} catch (err) {
		// alert("Pokemon not found");

		console.log(`Pokemon not found: ${err}`);
	}
};

fetchData();

const getPokemon = (pokemon) => {
	console.log(pokemon);
};

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();

	getPokemon();
});

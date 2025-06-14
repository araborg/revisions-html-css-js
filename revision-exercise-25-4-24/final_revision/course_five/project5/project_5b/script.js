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

const getPokemon = async () => {
	const pokemonNameOrId = searchInput.value.toLowerCase();
	console.log(pokemonNameOrId);

	try {
		const res = await fetch(
			`https://rpg-creature-api.freecodecamp.rocks/api/creature/${pokemonNameOrId}`
		);

		const data = await res.json();

		pokemonName.textContent = data.name;
		pokemonID.textContent = `#${data.id}`;

		weight.textContent = `Weight: ${data.weight}`;
		height.textContent = `Height: ${data.height}`;

		data.types.map((type) => {
			console.log(type);

			types.innerHTML = `
				<span id="types" class="type">${type.name}</span>
			`;
		});

		hp.textContent = data.stats[0].base_stat;
		attack.textContent = data.stats[1].base_stat;
		defense.textContent = data.stats[0].base_stat;
		specialAttack.textContent = data.stats[0].base_stat;
		specialDefense.textContent =
			data.stats[0].base_stat;
		speed.textContent = data.stats[0].base_stat;
	} catch (err) {
		alert("Pokemon not found");

		console.log(`Pokemon not found: ${err}`);
	}
};

const resetPage = () => {
	pokemonName.textContent = ``;
	pokemonID.textContent = ``;

	weight.textContent = ``;
	height.textContent = ``;

	types.innerHTML = ``;
	// data.types.map((type) => {
	// });

	hp.textContent = ``;
	attack.textContent = ``;
	defense.textContent = ``;
	specialAttack.textContent = ``;
	specialDefense.textContent = ``;
	speed.textContent = ``;
};

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();

	getPokemon();
});

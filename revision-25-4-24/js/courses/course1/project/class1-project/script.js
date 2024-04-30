const target = 8;
const layers = [];
const character = "#";

for (let i = 0; i < target; i++) {
    layers.push(character.repeat(i));
}

for (let i = 0; i < layers.length; i++) {
    console.log(layers[i]);
}

// console.log(layers);

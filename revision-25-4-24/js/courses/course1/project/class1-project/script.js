const target = 8;
const layers = [];
const character = "#";

const result = "";

const pad = " ";

for (let i = 0; i < target; i++) {
    layers.push(character.repeat(i));
}

// for (let i = 0; i < layers.length; i++) {
//     console.log(layers[i]);
// }

for (const layer of layers) {
    console.log(layer);
}

// console.log(layers);

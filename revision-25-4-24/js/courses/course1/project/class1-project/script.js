const target = 8;
const layers = [];
const character = "#";

let result = "";

const pad = " ";

for (let i = 0; i < target; i++) {
    layers.push(padRow(i, target));
}

// for (let i = 0; i < layers.length; i++) {
//     console.log(layers[i]);
// }

for (const layer of layers) {
    result = result + "\n" + layer;
}

console.log(result);

function padRow(currentRow, totalRow) {
    return character.repeat(currentRow);
}

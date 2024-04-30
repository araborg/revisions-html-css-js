// 1. For loop
const target = 8;
const layers = [];
const character = "#";

let result = "";

const pad = " ";

function generateFlatPyramid() {
    for (let i = 1; i <= target; i++) {
        layers.push(padRow(i, target));
    }
}

function printPyramid() {
    for (const layer of layers) {
        // result = result + "\n" + layer;
        result = result + layer + "\n";
    }

    console.log(result);
}

function padRow(currentRow, totalRow) {
    return (
        pad.repeat(totalRow - currentRow) +
        character.repeat(2 * currentRow - 1) +
        pad.repeat(totalRow - currentRow)
    );
}

// generateFlatPyramid();
printPyramid();

// 2. Whole loop
while() {}
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

/*
function printPyramid() {
    for (const layer of layers) {
        console.log(layer);
        // result = result + "\n" + layer;
        result = result + layer + "\n";
    }

    console.log(result);
}


generateFlatPyramid();
printPyramid();
*/

function padRow(currentRow, totalRow) {
    return (
        pad.repeat(totalRow - currentRow) +
        character.repeat(2 * currentRow - 1) +
        pad.repeat(totalRow - currentRow)
    );
}

/*
2. Whole loop

let done = 0;

while (done < target) {
    done++;
    layers.push(padRow(done, target));
}


- Using push with while loop:
function generateInvertedPyramid() {
    for (let i = target; i > 0; i--) {
        layers.push(padRow(i, target));
    }
}
generateInvertedPyramid();

function printPyramid() {
    for (const layer of layers) {
        result = result + "\n" + layer;
    }

    console.log(result);
}
printPyramid();


- Using unshift with for loop:
function generateInvertedPyramid() {
    for (let i = 1; i <= target; i++) {
        layers.unshift(padRow(i, target));
    }
}


- Using unshift with while loop:
while (layers.length < target) {
    layers.unshift(padRow(layers.length + 1, target));
}

function printPyramid() {
    for (const layer of layers) {
        result = result + "\n" + layer;
    }

    console.log(result);
}
printPyramid();
*/

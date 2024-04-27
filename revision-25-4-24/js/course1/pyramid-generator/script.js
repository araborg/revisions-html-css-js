/*
let character = "Hello";
let count = 8;
character[1] = "a";
console.log(character);

let rows = ["Naomi", "Quincy", "CamperChan"];

let pushed = rows.push("freeCodeCamp");
console.log(`This is d pushed value: ${pushed}`);

let popped = rows.pop();
console.log(`This is d popped value: ${popped}`);

console.log(rows);
*/
// ================stops here ===============
const character = "#";
const count = 8;
const rows = [];

for (let i = 1; i < count; i += 1) {
    // rows.push(i);
    // rows.push(character.repeat(i + 1));
    rows.push(padRow(i, count));
}

console.log(rows);

// console.log(`wt rows looks like ${rows}`);

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
    // result = result + row + "\n";
}

console.log(result);
/*
// console.log("" + "\n" + 2);
function padRow(name) {
    const test = "Testing";
    // return character + name;
    return test;
}
const call = padRow("Baba");
console.log(call);
// console.log(test); // Uncaught ReferenceError: test is not defined
*/

function padRow(rowNumber, rowCount) {
    return (
        " ".repeat(rowCount - rowNumber) +
        character.repeat(2 * rowNumber - 1) +
        " ".repeat(rowCount - rowNumber)
    );
}

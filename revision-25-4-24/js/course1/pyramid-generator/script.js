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

const character = "#";
const count = 8;
const rows = [];

/*
change ds code to diff kind of loop

for (let i = 1; i <= count; i += 1) {
    rows.push(padRow(i, count));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
    // result = result + row + "\n";
}

console.log(result);
*/

function padRow(rowNumber, rowCount) {
    return (
        " ".repeat(rowCount - rowNumber) +
        character.repeat(2 * rowNumber - 1) +
        " ".repeat(rowCount - rowNumber)
    );
}

// ================stops here ===============
/*
if (" ") {
    console.log("Condition is true");
}

While loop:

while (condition) {
    logic
}

1.

let continueLoop = false;
let done = 0;

while (!continueLoop) {
    done++;
    rows.push(padRow(done, count));
    
    if (done === count) {
        continueLoop = false;
        console.log(`continue loop if {}`);
    }
    
    console.log(done);
}

2.

*/
let done = 0;

while (done !== count) {
    done++;
    rows.push(padRow(done, count));

    console.log(done);
}

while (rows.length < count) {
    // while (done !== count)
    // while (done <= count)
    // while (rows.length <= count)

    // done++;

    /*
    if (done === count) {
        continueLoop = false;
    }
    */

    rows.push(padRow(rows.length + 1, count));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

// console.log(result);

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

let result = "";

/*
A: For loop

// change ds code to diff kind of loop
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

function getResult() {
    for (const row of rows) {
        result = result + "\n" + row;
    }

    console.log(result);
}

/*
if (" ") {
    console.log("Condition is true");
}

B: While loop:

while (condition) {
    logic
}


1. Uncaught RangeError: Invalid count value: -1
This: done = 8, count = 8; results in error wn done++ gives 9;

let continueLoop = false;
let done = 0;

while (!continueLoop) {
    done++;
    rows.push(padRow(done, count));
    
    if (done === count) {
        continueLoop = false;
    }
    
    console.log(done);
}


2. This will go into infinite loop if done is initialized with
a bigger value than count e.g 10

done !== count is true in all of dse cases:
done = 4, count = 8;
done = 9, count = 8;

let done = 0;

while (done !== count) {
    done++;
    rows.push(padRow(done, count));
}

getResult();


3. Uncaught RangeError: Invalid count value: -1
This: done = 8, count = 8; results in error wn done++ gives 9;

let done = 0;

while (done <= count) {
    done++;
    rows.push(padRow(done, count));
}

getResult();


4.
let done = 0;

while (done < count) {
    done++;
    rows.push(padRow(done, count));
}

getResult();


5.
Due to d fact dt rows is empty, rows.length = 0;
As done increases by 1, rows.length increases by 1;

let done = 0;

while (done < count) {
    done++;
    rows.push(padRow(rows.length + 1, count));
}

getResult();


6.
This is d most improved code.

Initial: array rows.length = 0;

while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}

getResult();


Inverted Loops:
*/

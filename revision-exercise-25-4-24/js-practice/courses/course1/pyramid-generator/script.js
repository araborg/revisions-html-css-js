/*
1.
let character = "Hello";
character[1] = "a";

Note that strings are immutable, which means once they are
created, they cannot be changed. 

console.log(character);


2.


let character = "Hello";
let count = 8;

console.log(count + 1);

let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]); // Nsomi

rows[2] = 10;
console.log(rows); // ['Naomi', 'Quincy', 10]

rows[rows.length - 1] = 10; // ['Naomi', 'Quincy', 10]
console.log(rows);

3.
*****************************



*/
let rows = ["Naomi", "Quincy", "CamperChan"];

rows.push("freeCodeCamp");

console.log(rows); // ['Naomi', 'Quincy', 10]

// let pushed = rows.push("freeCodeCamp");
// console.log(`This is d pushed value: ${pushed}`);

// let popped = rows.pop();
// console.log(`This is d popped value: ${popped}`);

// console.log(rows);

// const character = "#";
// const count = 8;
// const rows = [];

let result = "";

/*
=================================================

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



if (" ") {
    console.log("Condition is true");
}


=================================================

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


=================================================
C: Inverted Loops:
*/
// const character = "#";
// let count = 8;
// const rows = [];

// let result = "";

// function padRow(rowNumber, rowCount) {
//     return (
//         " ".repeat(rowCount - rowNumber) +
//         character.repeat(2 * rowNumber - 1) +
//         " ".repeat(rowCount - rowNumber)
//     );
// }

// function getResult() {
//     for (const row of rows) {
//         result = result + "\n" + row;
//     }

//     console.log(result);
// }

/*
1. For loops:

for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}

getResult();

2. 

const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5);
console.log(numbers); // [4, 1, 2, 3]
console.log(unshifted); // 4, i.e d arr length

unshift added value(s) to the beginning of an arr while 
shift removes & return value(s) from d beginning of an arr 


Not using inverted method:

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}
*/

// count = 10;

// let inverted = true;
// // inverted = true;

// for (let i = 1; i <= count; i++) {
//     if (inverted) {
//         rows.unshift(padRow(i, count));
//     } else {
//         rows.push(padRow(i, count));
//     }
// }

// getResult();

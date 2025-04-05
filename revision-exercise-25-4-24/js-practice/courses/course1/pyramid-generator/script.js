/*
Note:
Any number multiply by 2 automatically becomes an
even number.
Any even number which 1 is substracted from becomes
an old number.

For loop:

1.
let character = 'Hello';
character[1] = "a";

Note that strings are immutable, which means 
once they are created, they cannot be changed. 

console.log(character); // Hello


2.
let character = 'Hello';
let count = 8;

console.log(count + 1); // 9

let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]); // Naomi

rows[2] = 10;
console.log(rows); // ['Naomi', 'Quincy', 10]

rows[rows.length - 1] = 10;
console.log(rows);  // ['Naomi', 'Quincy', 10]


3.
let rows = ["Naomi", "Quincy", "CamperChan"];

rows.push("freeCodeCamp");

console.log(rows); 
// ['Naomi', 'Quincy', 'CamperChan', 'freeCodeCamp']


4.
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");

const popped = rows.pop();

console.log(popped); // freeCodeCamp
console.log(rows); // ['Naomi', 'Quincy', 'CamperChan']


5.
let rows = ["Naomi", "Quincy", "CamperChan"];

let pushed = rows.push("freeCodeCamp");

console.log(pushed); 
// 4 i.e d length of the array, rows


6.
Changing let to const:
const rows = [];
const count = 8;

const character = "Hello";


7.
const rows = [];
let result = "";

const count = 8;

const character = "#";

for (let i = 0; i < count; i = i + 1) {
    Wn i = 0, character.repeat(0) returns 
    an empty space 

    rows.push(character.repeat(i));
}

console.log(rows); 
// ['', '#', '##', '###', '####', '#####', '######', '#######']

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);


8.
const rows = [];
let result = "";

const count = 8;

const character = "#";

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

console.log(rows); 
// ['#', '##', '###', '####', '#####', '######', '#######', '########']

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);


9.
function padRow() {
    return "Hello";
}

const call = padRow();
console.log(call); // Hello


10.
function padRow(name) {
    return character + name;
}

const call = padRow("Babs");
console.log(call); // #Babs


11. 
Scope:
function padRow(name) {
    return character + name;

    const test = "Testing";
}

console.log(test); 
// ReferenceError: test is not defined


12. 
Two ths return does: 
it "defines" d value to be returned and 
stops code executn.

function padRow(name) {
    const test = "Testing";

    return character + name;
}

console.log(test); 
// Uncaught ReferenceError: test is not defined


13.
Note: 
A fxn call returns d fxn value from its scope to 
the scope (wc can be global or blk) where it was 
called.

function padRow() {
    const test = "Testing";

    return test;
}

const call = padRow();

console.log(call); // Testing


14.
const rows = [];
let result = "";

const count = 8;

const character = "#";

for (let i = 0; i < count; i = i + 1) {
    // rows.push(character.repeat(i + 1));

    rows.push(padRow(i + 1, count));
}

function padRow(index, count) {
    return " " + character.repeat(index) + " ";
}

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

 #           1
 ##          2
 ###         3 
 ####        4
 #####       5
 ######      6
 #######     7
 ########    8


15.
const rows = [];
let result = "";

const count = 8;

const character = "#";

for (let i = 0; i < count; i = i + 1) {
    // rows.push(character.repeat(i + 1));

    rows.push(padRow(i + 1, count));
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(index) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

        #      1 
       ##      2
      ###      3
     ####      4
    #####      5
   ######      6
  #######      7
 ########      8


16.
const rows = [];
const count = 8;

let result = "";
const character = "#";

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for...of loop:
for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

       #            1
      ###           3
     #####          5
    #######         7
   #########        9
  ###########       11
 #############      13
###############     15


17.
Note: 
    Additn operator: i = i + 1; 

    Addition assignment: i += 1; 

    Increment operator: i++.

This changed to:
for (let i = 0; i < count; i += 1) {}

This:
for (let i = 0; i < count; i++) {
    rows.push(padRow(i + 1, count));
}


18.
const rows = [];
const count = 8;

let result = "";
const character = "#";

change i = 0 to i = 1;

From this to:
for (let i = 0; i < count; i++) {
    rows.push(padRow(i + 1, count));
}

To this:
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

padRow fxn:
function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for...of loop:
for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

       #            1       
      ###           3
     #####          5
    #######         7    
   #########        9
  ###########       11
 #############      13
###############     15


*****************************
While loop:

1.
Falsy values includes(6): 
false (without strings), 
0, 
"": empty string, 
null, 
undefined, and 
NaN.


2.
if (condition === true) {
    run logic
}

if (true) {
    run logic
}


3.
while (condition === true) {
    run logic
}

while (true) {
    run logic
}


4.
const rows = [];
const count = 8;

let result = "";
const character = "#";


let continueLoop = false;
let done = 0;

while (continueLoop) {
    done++;

    rows.push(padRow(done, count));

    if (done === count) {
        continueLoop = false;
    }
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}


5.
const rows = [];
const count = 8;

let result = "";
const character = "#";


let continueLoop = false;
let done = 0;

while (done !== count) {
    done++;

    rows.push(padRow(done, count));
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}


6.
Your loop is no longer relying on the continueLoop 
variable. So remove it.

const rows = [];
const count = 8;

let result = "";
const character = "#";


let done = 0;

while (done !== count) {
    done++;

    rows.push(padRow(done, count));
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}


7.
Your pyramid generator is still working. However, it 
could be possible to end up with an infinite loop 
again.

Because you are only checking if done is not equal 
to count, if done were to be larger than count your 
loop would go on forever.

Update your loop's condition to check if done is 
less than or equal to count.

const rows = [];
const count = 8;

let result = "";
const character = "#";


let done = 0;

while (done <= count) {
    done++;

    rows.push(padRow(done, count));
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}


8.
Using done to track the number of rows that have 
been generated is functional, but you can actually 
clean up the logic a bit further.

N.B: Both done and rows.length will have a value 
of 0 at d beginning of the while loop. So since rows 
has been declared dre is no need to declare another
variable.

const rows = [];
const count = 8;

let result = "";
const character = "#";

while (rows.length < count) {
    rows.push(
        padRow(rows.length + 1, count)
    );
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}


9.
const rows = [];
const count = 8;

let result = "";
const character = "#";

console.log(rows.length); // 0

while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

console.log(rows.length); // 8


11.
Final code:

const rows = [];
const count = 8;

const character = "#";
let result = "";

rows.length start from empty array wc = 0

while (rows.length < count) {
    rows.push(
        padRow(rows.length + 1, count)
    );
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

console.log(rows.length); // 8


*****************************
Inverted pyramid:

1.
for (let i = count; false; false) {}


2.
const rows = [];
const count = 8;
const character = "#";

let result = "";

// for (let i = count; i > 0; i = i - 1) {]

// for (let i = count; i > 0; i -= 1) {}

for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);


*****************************
Inverted pyramid(2):

1.
.unshift():

const rows = [];
const count = 8;
const character = "#";

let result = "";

for (let i = 1; i <= count; i++) {
    rows.unshift(padRow(i, count));
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);


2. Alternating btw inverted and non-inverted pyramids

const rows = [];
const count = 8;
const character = "#";

let result = "";

let inverted = true;

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);


3.

const rows = [];
const count = 10;

const character = "!";
let result = "";

let inverted = false;

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

function padRow(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);


*****************************

*/

/* Revision */

/*
pyramids:

1.
For loop:

let character = "#";
let result = "";

let rows = [];
let counts = 8;

for (let i = 1; i <= counts; i++) {
    rows.push(rowPad(i, counts));
}

function rowPad(index, count) {
    return (
        " ".repeat(count - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(count - index)
    );
}

for (let row of rows) {
    result += "\n" + row; // ds will an empty space at d beginning/top

    // result += row + "\n"; // ds will nt av an empty space at d beginning/top
}

console.log(rows);
console.log(result);


2.
While loop:

let character = "#";
let result = "";

let rows = []; // At d very beginning, rows.length will be 0
let counts = 8;

const rowPad = (index, count) => {
    return (
        " ".repeat(counts - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(counts - index)
    );
};

while (rows.length < counts) {
    rows.push(rowPad(rows.length + 1, counts));
}

for (let row of rows) {
    result += "\n" + row; 
}

console.log(rows);
console.log(result);


3.
inverted pyramid with #

// using .unshift()
let character = "#";
let result = "";

let rows = []; 
let counts = 8;

const rowPad = (index, count) => {
    return (
        " ".repeat(counts - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(counts - index)
    );
};

while (rows.length < counts) {
    rows.unshift(rowPad(rows.length + 1, counts));
}

for (let row of rows) {
    result += "\n" + row; 
}

console.log(result);


4.
inverted pyramid with !

let character = "!";
let result = "";

let rows = [];
let counts = 8;

const rowPad = (index, counts) => {
    return (
        " ".repeat(counts - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(counts - index)
    );
};

for (let i = counts; i > 0; i--) {
    rows.push(rowPad(i, counts));
}

for (let row of rows) {
    result += "\n" + row;
}

console.log(result);


5.

Alternate btw inverted and non-inverted pyramid

*/
let character = "!";
let result = "";

let inverted = true;

let rows = [];
let counts = 8;

const rowPad = (index, counts) => {
    return (
        " ".repeat(counts - index) +
        character.repeat(2 * index - 1) +
        " ".repeat(counts - index)
    );
};

for (let i = 1; i <= counts; i++) {
    if (inverted) {
        rows.unshift(rowPad(i, counts));
        rows.push(rowPad(i, counts));
    } else {
    }
}

for (let row of rows) {
    result += "\n" + row;
}

console.log(result);

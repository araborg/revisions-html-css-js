// for loop
const character = "#";
const rows = [];
const counts = 8;

let result = "";

for (let i = 1; i <= counts; i++) {
    rows.push(character.repeat(i));
}

// for (const row of rows) {
//     result = result + row + "\n";
// }

// console.log(result);

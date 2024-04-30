// for loop
const character = "#";
const rows = [];
const counts = 8;

let result = "";

for (let i = 1; i <= counts; i++) {
    rows.push(padRow(i, counts));
}

function padRow(rowNumber, rowCount) {
    return (
        " ".repeat(rowCount - rowNumber) +
        character.repeat(2 * rowNumber - 1) +
        " ".repeat(rowCount - rowNumber)
    );
}

for (const row of rows) {
    result = result + row + "\n";
}

console.log(result);

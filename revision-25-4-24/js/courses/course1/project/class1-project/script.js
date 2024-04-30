// for loop
const character = "#";
const rows = [];
const counts = 8;

let result = "";

function printResult() {
    for (let i = 0; i < counts; i++) {
        rows.push(rowPad(i + 1, counts));
    }

    console.log(rows);
}

printResult();

function rowPad(rowNumber, rowCount) {
    console.log(rowNumber);
    return (result = result + character.repeat(rowNumber));
}

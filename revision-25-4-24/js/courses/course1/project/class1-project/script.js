// for loop
const character = "#";
const rows = [];
const counts = 8;

const result = "";

function printResult() {
    for (let i = 0; i < counts; i++) {
        rows.push(rowPad(i + 1));
    }

    console.log(rows);
}

printResult();

function rowPad(rowNumber, rowCount) {
    return character.repeat(rowNumber);
}

// const call = rowPad(1);
// console.log(call);

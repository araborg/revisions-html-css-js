const calorieCounter = document.getElementById("calorie-counter");

const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entryDropdown");

const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

// const esc = "come \"home\""

let isError = false;

/*
1. forwardslash / 4 regex while backslash \ for escape
2. Shorthand character e.g \s
3. Character class e.g /[hello]/
4. Flags e.g /hello/g


*/
// console.log("hello".replace(/l/g, "3"));

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

console.log(cleanInputString(" + ba-+b-")); // bab

console.log(cleanInputString(" + ba-+ bs- ")); // babs

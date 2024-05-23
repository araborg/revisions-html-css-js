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
function cleanInputString(str) {
    const regex = /[+-\s]/g;
}

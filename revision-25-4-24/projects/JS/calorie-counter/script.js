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
4. Flags e.g global: /hello/g
5. replace() method
*/

// console.log("hello".replace(/l/g, "3"));

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

console.log(cleanInputString(" + ba-+b-")); // bab
console.log(cleanInputString(" + ba-+ bs- ")); // babs

/*

1. Flag e.g insensitive /hello/i
2. Numbers e.g [0-9]
3. + modifier: matches pattern dt occurs one or more times
4. Shorthand character , \d: matches any digit
5. match() method

*/

function isInvalidInput(str) {
    // const regex = /[0-9]+e[0-9]+/i;
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

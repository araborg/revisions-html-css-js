// HTML elemts selections
const calorieCounter = document.getElementById("calorie-counter");

const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");

const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

// state variable
let isError = false;

/*
Regex A:
1. forward slash (/regex/) 4 regex while back slash is 
("Who is "\tunde\"") for escape (of quotes)
2. Shorthand character e.g \s = space, \d = digits btw 0-9
3. Character class,[] e.g /[hello]/
4. Flags e.g /g = global: /hello/g, /i = insensitive
5. .replace() method
*/

// clean d str of +, -, empty space(s) as many as dy occurs, g
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

/*
console.log(cleanInputString(" + ba-+b-")); // bab
console.log(cleanInputString(" + ba-+ bs- ")); // babs
*/

/*
Regex B:
1. Flag e.g insensitive /hello/i
2. Character class e.g Numbers: [0-9]
3. + modifier: matches pattern dt occurs one or more times
4. Shorthand character , \d: matches any digit
5. match() method
*/

// stop invalid inputs e.g 1e0, 3E400
function isInvalidInput(str) {
    // const regex = /[0-9]+e[0-9]+/i;
    // wt [] will do is wt + does????
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

/*
console.log(isInvalidInput("1e3"));
console.log(isInvalidInput("20e90"));
console.log(isInvalidInput("10")); // null

The match method returns null when no match is found
*/

function addEntry() {
    // get d id of selected option of entryDropdown select element
    // const targetId = "#" + entryDropdown.value;

    // target the .input-container element within the element that has your targetId
    // i.e document.querySelector('#breakfast/lunch/dinner .input-container');
    const targetInputContainer = document.querySelector(
        `#${entryDropdown.value} .input-container`
    );

    const entryNumber =
        targetInputContainer.querySelectorAll('input[type="text"]');

    // const entryNumber = document.querySelectorAll('input[type="text"]');
    // console.log(entryNumber);
}

addEntry();

// form
const calorieCounter = document.getElementById("calorie-counter");

// inputs
const budgetNumberInput = document.getElementById("budget");

// dropdown
const entryDropdown = document.getElementById("entry-dropdown");

// btns
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");

// Calculate Remaining Calories btn is yet to be selected

// outpust
const output = document.getElementById("output");

// boolean state
let isError = false;

// format budgetNumberInput value:

// if d input value contains any of dse: +, - or
// empty space any where replace it with empty string
function cleanInputString(str) {
    const regex = /[+-\s]/g;

    return str.replace(regex, "");
}

// if d input value contains scientific notation
// return a boolean
function isInvalidInput(str) {
    const regex = /\d+e\d/i;

    return str.match(regex);
}

const calculateCalories = (e) => {
    e.preventDefault();

    const inputVal = cleanInputString(budgetNumberInput.value);
    // const inputVal = budgetNumberInput.value;

    const isInputValid = isInvalidInput(inputVal);

    console.log(inputVal, isInputValid);
};

calorieCounter.addEventListener("submit", calculateCalories);

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

// if d input value contains scientific notation:
// It will  return null when the input is a valid
// number without any scientific notation else it
// returns smth else

function isInvalidInput(str) {
    const regex = /\d+e\d/i;

    return str.match(regex);
}

// console.log(isInvalidInput("1e3"));
// ['1e3', index: 0, input: '1e3', groups: undefined]

// console.log(isInvalidInput("10")); // null

const calculateCalories = (e) => {
    e.preventDefault();

    // Y r will repeating ds?
    isError = false;

    const breakfastNumberInputs = document.querySelectorAll(
        "#breakfast input[type=number]"
    );

    const lunchNumberInputs = document.querySelectorAll(
        "#lunch input[type=number]"
    );

    const dinnerNumberInputs = document.querySelectorAll(
        "#dinner input[type=number]"
    );

    const snacksNumberInputs = document.querySelectorAll(
        "#snacks input[type=number]"
    );

    const exerciseNumberInputs = document.querySelectorAll(
        "#exercise input[type=number]"
    );

    console.log(
        breakfastNumberInputs,
        lunchNumberInputs,
        dinnerNumberInputs,
        snacksNumberInputs,
        exerciseNumberInputs
    );
};

calorieCounter.addEventListener("submit", calculateCalories);

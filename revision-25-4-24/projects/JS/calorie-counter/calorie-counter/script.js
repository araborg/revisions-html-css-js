const budget = document.querySelector("#budget");
const output = document.querySelector("#output");

const selectOption = document.querySelector("#options");

// btns
const caloriesCounter = document.querySelector("#calories-counter");
const addEntryBtn = document.querySelector("#add-entry");
const clearBtn = document.querySelector("#clear");

// state
let isError = false;

// Helper fxns
// Helper A: remove plus, minus signs and space
function trimInput(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

// Helper B: stop invalid input valid
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

// console.log(isInvalidInput("20e23"));
// console.log(Boolean(isInvalidInput("20e23"))); // true

const addInput = () => {
    console.log("Input added");
};

addEntryBtn.addEventListener("click", addInput);

// Helper C
function getCaloriesValues(array) {
    // init calories
    let calories = 0;

    // loop d arr
    for (const arr of array) {
        // console.log(arr);
    }
}

getCaloriesValues([1, 2, 3, 4, 5, 6]);

const budgetInput = document.querySelector("#budget");
const entryDropdown = document.querySelector("#entry-dropdown");

// btns
const calorieCounter = document.querySelector("#calorie-counter");
const addEntry = document.getElementById("add-entry");
const clearBtn = document.querySelector("#clear");

// state
const hasError = false;

// Helper fxns
// remove space, plus, minus from d input value
function trimInput(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

// add appropriate input
function addInput() {
    const targetInputContainer = document.querySelector(
        `#${entryDropdown.value} .input-container`
    );

    const targetNumber =
        targetInputContainer.querySelectorAll("input[type=text]").length + 1;

    const inputHTML = `
        <label for="${entryDropdown.value}">Entry ${targetNumber} Name</label>
        <input type="text" id="${entryDropdown.value}" required/>

        <label for="${entryDropdown.value}">Entry ${targetNumber} Calories</label>
        <input type="number" id="${entryDropdown.value}" required/>
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", inputHTML);
}

addEntry.addEventListener("click", addInput);

// function calCalories(num) {
function sumCalories(nums) {
    // declare init value 4 calories
    let calories = 0;

    for (num of nums) {
        const inputValue = trimInput(num.value);
        const brushedValue = isInvalidInput(inputValue);
        console.log(brushedValue);

        if (brushedValue) {
            alert(`Invalid Input: ${brushedValue[0]}`);
            hasError = true;
            return null;
        }

        calories += Number(inputValue);
        console.log(calories);
    }

    // console.log("cal calories");
}

function calCalories() {
    const breakfastInputs = document.querySelectorAll(
        "#breakfast input[type=number]"
    );
    // console.log(breakfastInputs.value);

    sumCalories(breakfastInputs);
    // console.log()
}
calorieCounter.addEventListener("submit", calCalories);

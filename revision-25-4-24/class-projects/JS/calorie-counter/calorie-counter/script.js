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
    const inputContainer = document.querySelector(
        `#${selectOption.value} .input-container`
    );

    // get d length of d inputs in an input container: ds can be done in 2 ways
    // const inputContainerLength =
    //     document.querySelectorAll(`#${selectOption.value} input[type=text]`)
    //         .length + 1;

    const inputContainerLength =
        inputContainer.querySelectorAll(`input[type=text]`).length + 1;

    const inputHTML = `
        <label for="${selectOption.value}-${inputContainerLength}-name"> Entry ${inputContainerLength} Name</label>
        <input type="text" id="" placeholder="Name" />

        <label for="${selectOption.value}-${inputContainerLength}-calories"> Entry ${inputContainerLength} Calories</label>
        <input type="number" placeholder="Calories" />

    `;

    inputContainer.insertAdjacentHTML("beforeend", inputHTML);
};
addEntryBtn.addEventListener("click", addInput);

// Helper C
function getCaloriesValues(array) {
    // init calories
    let calories = 0;

    // loop d arr
    for (const arr of array) {
        const trimmedValue = trimInput(arr.value);
        const isInvalidInputValue = isInvalidInput(trimmedValue);

        if (isInvalidInputValue) {
            alert("Invalid Input: " + isInvalidInputValue[0]);
            isError = true;
            return null;
        }

        calories += Number(trimmedValue);
    }

    return calories;
}

const calRemainingCalories = (e) => {
    e.preventDefault();
    isError = false;

    // get meals inputs
    const breakfastInputs = document.querySelectorAll(
        "#breakfast input[type=number]"
    );
    const lunchInputs = document.querySelectorAll("#lunch input[type=number]");
    const dinnerInputs = document.querySelectorAll(
        "#dinner input[type=number]"
    );
    const snacksInputs = document.querySelectorAll(
        "#snacks input[type=number]"
    );
    const exerciseInputs = document.querySelectorAll(
        "#exercise input[type=number]"
    );

    // cal getCaloriesValues on d meal input arrar
    const breakfastCalories = getCaloriesValues(breakfastInputs);
    const lunchCalories = getCaloriesValues(lunchInputs);
    const dinnerCalories = getCaloriesValues(dinnerInputs);
    const snacksCalories = getCaloriesValues(snacksInputs);
    const exerciseCalories = getCaloriesValues(exerciseInputs);

    const budgetCalories = getCaloriesValues([budget]);

    if (isError) {
        return;
    }

    const consumedCalories =
        breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;

    const remainingCalories =
        budgetCalories - consumedCalories + exerciseCalories;

    const surplusOrDeficitCalories =
        remainingCalories < 0 ? "Surplus" : "Deficit";

    const outputHTML = `
        <span class="${surplusOrDeficitCalories.toLowerCase()}">${Math.abs(
        remainingCalories
    )} Calories ${surplusOrDeficitCalories}</span>    

        <hr/>

        <p> ${budgetCalories} Calories Budgeted </p>
        <p> ${consumedCalories} Calories Consumed </p>
        <p> ${exerciseCalories} Calories Burned </p>
    `;

    output.innerHTML = outputHTML;

    output.classList.remove("hide");
};
caloriesCounter.addEventListener("submit", calRemainingCalories);

function clearForm() {
    const allInput = document.querySelectorAll(".input-container");

    for (const input of allInput) {
        input.innerHTML = "";
    }

    budget.value = "";
    output.classList.add("hide");
}
clearBtn.addEventListener("click", clearForm);

const budgetInput = document.querySelector("#budget");
const entryDropdown = document.querySelector("#entry-dropdown");
const output = document.querySelector("#output");

// btns
const calorieCounter = document.querySelector("#calorie-counter");
const addEntry = document.getElementById("add-entry");
const clearBtn = document.querySelector("#clear");

// state
let hasError = false;

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

// cal d calories
function getCalorieSum(calories) {
    // decalare an initiatl value for calorie
    let calorie = 0;

    for (calo of calories) {
        const trimValue = trimInput(calo.value);
        const isInvalid = isInvalidInput(trimValue);

        if (isInvalid) {
            alert("Invalid input: " + isInvalid);
            hasError = true;
            return null;
        }

        calorie += Number(trimValue);
    }

    return calorie;
}

// detect if it is surplus or deficit
function isCaloriesDeficitOrSurplus(e) {
    e.preventDefault();
    hasError = false;

    const breakfastInput = document.querySelectorAll(
        "#breakfast input[type=number]"
    );
    const lunchInput = document.querySelectorAll("#lunch input[type=number]");
    const dinnerInput = document.querySelectorAll("#dinner input[type=number]");
    const snacksInput = document.querySelectorAll("#snacks input[type=number]");
    const exerciseInput = document.querySelectorAll(
        "#exercise input[type=number]"
    );

    const breakfastCalories = getCalorieSum(breakfastInput);
    const lunchCalories = getCalorieSum(lunchInput);
    const dinnerCalories = getCalorieSum(dinnerInput);
    const snacksCalories = getCalorieSum(snacksInput);
    const exerciseCalories = getCalorieSum(exerciseInput);
    const budgetCalories = getCalorieSum([budgetInput]);

    if (hasError) return;

    const consumedCalories =
        breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories =
        budgetCalories - consumedCalories + exerciseCalories;

    const surplusOrDeficitCalories =
        remainingCalories < 0 ? "Surplus" : "Deficit";

    const outputText = `
        <span class="${surplusOrDeficitCalories.toLowerCase()}">
            ${Math.abs(remainingCalories)} Calorie ${surplusOrDeficitCalories}
        </span>

        <hr />
        
        <p>${budgetCalories} Calories Budgeted</p>
        <p>${consumedCalories} Calories Consumed</p>
        <p>${exerciseCalories} Calories Burned</p>
    `;

    output.innerHTML = outputText;
    output.classList.remove("hide");
}

calorieCounter.addEventListener("submit", isCaloriesDeficitOrSurplus);

function clearAllInputs() {
    const allInputs = document.querySelectorAll(".input-container");

    for (input of allInputs) {
        input.innerHTML = "";
    }

    budgetInput.value = "";
    output.innerText = "";
    output.classList.add("hide");
}

clearBtn.addEventListener("click", clearAllInputs);

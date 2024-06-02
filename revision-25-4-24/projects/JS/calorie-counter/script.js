const budgetInput = document.querySelector("#budget");
const entryDropdown = document.querySelector("#entry-dropdown");

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
        // console.log(calo.value);
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

// getCalorieSum(["10e3", "9e2", "30", "40", "50", " +60", "- 70+ "]);
// getCalorieSum(["40", "50", " +60", "- 70+ ", "200e1"]);

// detect if it is surplus or deficit
function isCaloriesDeficitOrSurplus(e) {
    e.preventDefault();

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

    // console.log(breakfastInput);
    // for (input of breakfastInput) {
    //     console.log(input.value);
    // }
    console.log(
        breakfastCalories,
        lunchCalories,
        dinnerCalories,
        snacksCalories,
        exerciseCalories
    );
}

// isCaloriesDeficitOrSurplus();

calorieCounter.addEventListener("submit", isCaloriesDeficitOrSurplus);

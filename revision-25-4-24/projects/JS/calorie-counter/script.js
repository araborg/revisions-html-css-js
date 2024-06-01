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
        <input id="${entryDropdown.value}" required/>
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", inputHTML);
}

addEntry.addEventListener("click", addInput);

// cal d calories
function getCalorieSum(calories) {
    // decalare an initiatl value for calorie
    let calorie = 0;

    for (calo of calories) {
        const trimValue = trimInput(calo);
        const isInvalid = isInvalidInput(trimValue);
        // console.log(isInvalid);

        if (isInvalid) {
            alert("Invalid input: " + isInvalid);
            hasError = true;
            return null;
        }

        calorie += Number(trimValue);
    }
    console.log(calorie);
    return calorie;
    // console.log(isInvalidInput(calories));
}

// getCalorieSum(["10e3", "9e2", "30", "40", "50", " +60", "- 70+ "]);
getCalorieSum(["40", "50", " +60", "- 70+ "]);

// detect if it is surplus or deficit
function isCaloriesDeficitOrSurplus() {}

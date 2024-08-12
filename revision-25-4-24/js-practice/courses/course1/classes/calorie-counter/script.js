// form elemt
const calorieCounter = document.getElementById("calorie-counter");

// input elemt
const budgetNumberInput = document.getElementById("budget");

// select elemt
const entryDropdown = document.getElementById("entry-dropdown");

// btns
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");

// output
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
6. e.g:
    console.log(cleanInputString(" + ba-+b-")); // bab
    console.log(cleanInputString(" + ba-+ bs- ")); // babs
*/

// Helper function: A
// clean d str of +, -, empty space(s) as many as dy occurs, g
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

/*
Regex B:
1. Flag e.g insensitive /hello/i
2. Character class e.g Numbers: [0-9]
3. + modifier: matches pattern dt occurs one or more times
4. Shorthand character , \d: matches any digit
5. match() method: The match method returns null when no match is found
6. e.g:
    console.log(isInvalidInput("1e3"));
    console.log(isInvalidInput("20e90"));
    console.log(isInvalidInput("10")); // null
*/

// Helper function: B
// stop invalid inputs e.g 1e0, 3E400
function isInvalidInput(str) {
    // const regex = /[0-9]+e[0-9]+/i;
    // wt [] will do is wt + does????
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

// console.log(isInvalidInput("10E2")); // ['10E2', index: 0, input: '10E2', groups: undefined]

function addEntry() {
    // get d id of selected option of entryDropdown select element
    // const targetId = "#" + entryDropdown.value;
    // console.log(targetId);

    // target the .input-container element within the element that has your targetId
    // i.e document.querySelector('#breakfast/lunch/dinner .input-container');
    const targetInputContainer = document.querySelector(
        `#${entryDropdown.value} .input-container`
    );
    // targetInputContainer.style.backgroundColor = "red";

    const entryNumber =
        targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    // console.log(entryNumber);

    // wt will ds return?????
    // const entryNumber =
    //     document.querySelectorAll('input[type="text"]').length + 1;
    // console.log(entryNumber);

    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">
            Entry ${entryNumber} Name
        </label>
        <input 
            type="text"
            id="${entryDropdown.value}-${entryNumber}-name"
            placeholder="Name"
        />

        <label for="${entryDropdown.value}-${entryNumber}-calories">
            Entry ${entryNumber} Calories
        </label>
        <input
            type="number"
            id="${entryDropdown.value}-${entryNumber}-calories"
            placeholder="Calories"
            min="0"
        />
    `;

    // targetInputContainer.innerHTML += HTMLString;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}
addEntryButton.addEventListener("click", addEntry);

// Helper function: C
function getCaloriesFromInputs(list) {
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);

        // invalid input
        if (invalidInputMatch) {
            alert("Invalid Input" + invalidInputMatch[0]);
            isError = true;
            return null;
        }

        // valid input
        calories += Number(currVal);
    }

    return calories;
}

function calculateCalories(e) {
    // The default action of the submit event is to reload the page.
    e.preventDefault();
    isError = false;

    // inputs
    const breakfastNumberInputs = document.querySelectorAll(
        '#breakfast input[type="number"]'
    );
    const lunchNumberInputs = document.querySelectorAll(
        '#lunch input[type="number"]'
    );
    const dinnerNumberInputs = document.querySelectorAll(
        '#dinner input[type="number"]'
    );
    const snacksNumberInputs = document.querySelectorAll(
        "#snacks input[type=number]"
    );
    const exerciseNumberInputs = document.querySelectorAll(
        "#exercise input[type=number]"
    );

    // calling getCaloriesFromInputs() with respective input array NodeList, []
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    // manually mks budgetNumberInput an arr: [budgetNumberInput]
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    // console.log(budgetCalories);

    // if dre is an error after calling getCaloriesFromInputs() dn end calculateCalories fxn
    if (isError) return;

    const consumedCalories =
        breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;

    const remainingCalories =
        budgetCalories - consumedCalories + exerciseCalories;

    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";

    output.innerHTML = `
        <span class="${surplusOrDeficit.toLowerCase()}">
            ${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}
        </span>

        <hr />
        
        <p>${budgetCalories} Calories Budgeted</p>
        <p>${consumedCalories} Calories Consumed</p>
        <p>${exerciseCalories} Calories Burned</p>

    `;

    output.classList.remove("hide");
}
calorieCounter.addEventListener("submit", calculateCalories);

function clearForm() {
    // Array.from()
    const inputContainers = Array.from(
        document.querySelectorAll(".input-container")
    );

    // set all inputs to empty str
    for (const container of inputContainers) {
        container.innerHTML = "";
    }

    // budget input
    budgetNumberInput.value = "";

    output.innerText = "";
    output.classList.add("hide");
}
clearButton.addEventListener("click", clearForm);

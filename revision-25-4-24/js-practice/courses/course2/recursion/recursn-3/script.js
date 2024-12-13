const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const outputNumber = document.getElementById("output-number");

const animationStack = document.getElementById("animation-stack");

// console.log(numberInput, convertBtn, outputNumber, animationStack);

const userInput = () => {
    const userVal = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(userVal) || userVal < 0) {
        alert("Kindly input a valid number");
    }

    // else {
    outputNumber.textContent = getInput(userVal);

    console.log(getInput(userVal));
    // }

    numberInput.value = "";
};

// get input
/*
1.
const getInput = (input) => {
    const inputs = [];
    const divisors = [];
    const reminders = [];

    while (input > 0) {
        let divisor = Math.floor(input / 2);
        const reminder = input % 2;

        reminders.push(reminder);
        input = divisor;
    }

    const returnVal = reminders.reverse().join("");

    outputNumber.textContent = returnVal;
};

2.
const userInput = () => {
    const userVal = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(userVal) || userVal < 0) {
        alert("Kindly input a valid number");
    } else {
        getInput(userVal);
    }
};

const getInput = (input) => {
    let binary = "";

    if (input === 0) {
        binary = "0";
    }

    if (input === 1) {
        binary = "1";
    }

    while (input > 1) {
        const num = Math.floor(input / 2);

        binary = (input % 2) + binary;

        input = num;
    }

    outputNumber.textContent = binary;
};


*/

const getInput = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return getInput(Math.floor(input / 2)) + (input % 2);
    }
};

getInput(Math.floor(5 / 2));
getInput(parseInt(Math.floor(5 / 2)));
// input event listener

// btn event listener
convertBtn.addEventListener("click", userInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const userVal = parseInt(numberInput.value);

        // getInput(userVal);
        userInput();

        // console.log(userVal);
    }
});

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const outputNumber = document.getElementById("output-number");

const animationStack = document.getElementById("animation-stack");

// console.log(numberInput, convertBtn, outputNumber, animationStack);

// get input
const getInput = (input) => {
    const inputs = [];
    const reminders = [];
    const divisors = [];

    while (input > 0) {
        const reminder = input % 2;

        console.log(input);

        input = 0;
    }
};

getInput(5);
// input event listener

// btn event listener
convertBtn.addEventListener("click", getInput);

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const outputNumber = document.getElementById("output-number");

const animationStack = document.getElementById("animation-stack");

// console.log(numberInput, convertBtn, outputNumber, animationStack);

// get input
const getInput = (input) => {
    // let inputValue = parseInt(numberInput.value);

    const inputs = [];
    const reminders = [];
    const divisors = [];

    // let input;

    while (input > 0) {
        const reminder = input % 2;
        const divisor = Math.floor(input / 2);

        input = divisor;

        console.log(reminder, divisor, input);
    }
};

getInput(5);
// input event listener

// btn event listener
convertBtn.addEventListener("click", getInput);

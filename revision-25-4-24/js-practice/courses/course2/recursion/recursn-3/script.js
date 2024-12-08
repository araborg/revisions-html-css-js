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
        const divisor = Math.floor(input / 2);

        console.log(input, divisor, reminder);

        input = divisor;

        reminders.push(reminder);
    }

    console.log(reminders);
};

getInput(4);
// input event listener

// btn event listener
convertBtn.addEventListener("click", getInput);

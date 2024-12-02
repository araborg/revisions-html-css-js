const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const outputNumber = document.getElementById("output-number");

const animationStack = document.getElementById("animation-stack");

console.log(numberInput, convertBtn, outputNumber, animationStack);

// get input
const getInput = () => {
    const inputValue = numberInput.value;

    console.log(inputValue);
};

getInput();
// input event listener

// btn event listener

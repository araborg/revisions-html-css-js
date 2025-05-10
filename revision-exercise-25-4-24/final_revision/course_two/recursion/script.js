const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");

const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

// addElDelay: delays d msg for sm millisec b4 showing
// showMsgDelay: keeps d msg for sm millisec
// removeElDelay: remove d msg after sm millisec

// How d animation is shown: 5 -->  2  --> 1
// How d animation is removed: 1 -->  2  --> 5
const animationData = [
    {
        inputVal: 5,
        addElDelay: 1000,

        msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',

        showMsgDelay: 15000,
        removeElDelay: 20000,
    },

    {
        inputVal: 2,
        addElDelay: 1500,

        msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',

        showMsgDelay: 10000,
        removeElDelay: 15000,
    },

    {
        inputVal: 1,
        addElDelay: 2000,

        msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",

        showMsgDelay: 5000,
        removeElDelay: 10000,
    },
];

/*

1. Using array 
const getInputValue = () => {
    // wn numberInput.value has noth inside: it means d value is: ""
    // console.log(Boolean("")); returns false

    // parseInt("") or parseInt(numberInput.value) returns NaN
    // isNaN(NaN) returns true

    // NaN === NaN returns false

    const inputVal = parseInt(numberInput.value);

    // d if condition: in case of empty string || in case d Number,
    // inputVal is less than 0 || in case inputVal returns NaN
    if (!numberInput.value || inputVal < 0 || isNaN(inputVal)) {
        alert("Please provide a decimal number greater than or equal to 0");

        return;
    }

    decimalToBinary(inputVal);
};

// diff btw reminder and divisn
// reminder: returns d remaining value after a WHOLE
// divisn e.g 1 (5 % 2) after has wholely divided 5 twice

// divisn: divides d value into equal half

const decimalToBinary = (input) => {
    // needed variables containers
    const inputs = [];
    const reminders = [];
    const results = [];

    if (input === 0) {
        result.textContent = 0;

        return;
    }

    // wn input = 4
    while (input > 0) {
        // modulo
        const reminder = input % 2; // 0, 0, 1

        // divisn: ds reduces d value of input wc is a
        // condition needed to avoid infinite loop
        const result = Math.floor(input / 2); // 2, 1, 0

        // update d needed variables declared earlier
        inputs.push(input); // 4, 2, 1
        reminders.push(reminder); // 0, 0, 1
        results.push(result); // 2, 1, 0

        input = result; // = 2, 1, 0
    }

    numberInput.value = "";

    result.textContent = reminders.reverse().join("");
};


=====================================================

2. Using string 
const getInputValue = () => {
    const inputVal = parseInt(numberInput.value);

    if (!numberInput.value || inputVal < 0 || isNaN(inputVal)) {
        alert("Please provide a decimal number greater than or equal to 0");

        return;
    }

    decimalToBinary(inputVal);
};

const decimalToBinary = (input) => {
    let binary = "";

    if (input === 0) {
        binary = "0";
    }

    while (input > 0) {
        // d purpose of: (input % 2) + binary is
        // for string concatenatn
        binary = (input % 2) + binary;

        // reduce input
        input = Math.floor(input / 2);
    }

    result.textContent = binary;
};

=====================================================

3. Using recursion

*/
const getInputValue = () => {
    const inputVal = parseInt(numberInput.value);

    if (!numberInput.value || inputVal < 0 || isNaN(inputVal)) {
        alert("Please provide a decimal number greater than or equal to 0");

        return;
    }

    // little modification
    result.textContent = decimalToBinary(inputVal);

    numberInput.value = "";
};

const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        // decimalToBinary(Math.floor(parseInt(input / 2))) + (input % 2)
        // is like string concetatenaion too.
        // Math.floor(parseInt(input / 2)) reduces d value of input
        // (input % 2) returns d reminder

        // ds will work just like
        // return decimalToBinary(Math.floor(input / 2)) + (input % 2);

        // this will too either with parseInt() or not
        return (
            decimalToBinary(Math.floor(input / 2)) + //
            (input % 2)
        );
    }
};

convertBtn.addEventListener("click", getInputValue);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getInputValue();
    }
});

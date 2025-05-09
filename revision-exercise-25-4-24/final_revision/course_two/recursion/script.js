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

const getInputValue = () => {
    const inputVal = parseInt(numberInput.value);

    // "Please provide a decimal number greater than or equal to 0"
};

// console.log(());
getInputValue();

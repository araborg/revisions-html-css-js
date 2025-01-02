const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");

const result = document.getElementById("result");

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

const getInputVal = () => {
    const inputVal = parseInt(numberInput.value);

    if (!numberInput.value || inputVal < 0 || isNaN(inputVal)) {
        alert("Please provide a decimal number greater than or equal to 0");
    }

    decimatToBinary(inputVal);

    console.log(decimatToBinary(inputVal));
};

/*

const getInputVal = () => {
    const inputVal = parseInt(numberInput.value);

    if (!numberInput.value || inputVal < 0 || isNaN(inputVal)) {
        alert("Please provide a decimal number greater than or equal to 0");
    }

    decimatToBinary(inputVal);

    console.log(decimatToBinary(inputVal));
};

1.
const decimatToBinary = (input) => {
    const inputs = [];
    const reminders = [];
    const results = [];

    if (input === 0) {
        result.textContent = 0;

        return;
    }

    while (input > 0) {
        const reminder = input % 2;
        const result = Math.floor(input / 2);

        inputs.push(input);
        reminders.push(reminder);
        results.push(result);

        input = result;
    }

    numberInput.value = "";

    result.textContent = reminders.reverse().join("");
};

2.
const decimatToBinary = (input) => {
    let binary = "";

    if (input === 0) {
        binary = "0";
    }

    while (input > 0) {
        binary = (input % 2) + binary;

        input = Math.floor(input / 2);
    }

    result.textContent = binary;
};

*/
const decimatToBinary = (input) => {
    if (input === 0) {
        return String(input);
    } else {
        return decimatToBinary(Math.floor(parseInt(input / 2)));
    }
};

convertBtn.addEventListener("click", getInputVal);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getInputVal();
    }
});

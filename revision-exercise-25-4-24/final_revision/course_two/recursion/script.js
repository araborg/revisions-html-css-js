/*
N.B:
// diff btw reminder and divisn
// reminder: returns d remaining value after a WHOLE
// divisn e.g 1 (5 % 2) after has wholely divided 5 twice

// divisn: divides d value into equal half


// Diff btw parseInt() and Number()
parseInt("") returns not a number, NaN
console.log(parseInt("")) // NaN

Number("") returns 0
console.log(Number("")) // 0




const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");

const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");


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

    if (!numberInput.value || inputVal < 0 || isNaN(inputVal)) {
        alert("Please provide a decimal number greater than or equal to 0");

        return;
    }

    if (inputVal === 5) {
        showAnimation();
    } else {
        // little modification
        result.textContent = decimalToBinary(inputVal);
    }

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
            decimalToBinary(Math.floor(parseInt(input / 2))) + //
            (input % 2)
        );
    }
};

// Wt is showAnimation() doing?
// 1. creates a pararaph of diff values of 5, 2, 1
// 2. shows d obj msg
// 3. remove d obj msg
// 4. shows d binary result
const showAnimation = () => {
    result.textContent = "Call Stack Animation";

    animationData.forEach((obj) => {
        setTimeout(() => {
            animationContainer.innerHTML += `
                <p id="${obj.inputVal}" class="animation-frame">
                    decimalToBinary(${obj.inputVal})
                </p>
            `;
        }, obj.addElDelay);

        setTimeout(() => {
            // ds, obj.inputVal, was used like ds bcos
            // were r dealing with number and not string
            document.getElementById(obj.inputVal).textContent = obj.msg;
        }, obj.showMsgDelay);

        setTimeout(() => {
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);

        setTimeout(() => {
            result.textContent = decimalToBinary(5);
        }, 20000);
    });
};

convertBtn.addEventListener("click", getInputValue);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getInputValue();
    }
});



*/

// Revision:
// general HTML elements
const numberInput = document.getElementById("number-input");

const convertBtn = document.getElementById("convert-btn");

const output = document.getElementById("result");

// Method 1:
/*
const getInputValue = () => {
    const inputVal = parseInt(numberInput.value);

    // wn inputVal returns empty string, ""
    // console.log(numberInput.value === ""); // true
    // console.log(!"" === true); // true

    // console.log(parseInt("")); // NaN
    // console.log(inputVal); // NaN

    // console.log(isNaN(inputVal)); // true
    // console.log(isNaN(NaN)); // true

    // ds shows dt it's effect of parseInt() dt returns isNaN
    // console.log(isNaN("")); // false

    if (!numberInput.value || inputVal < 0 || isNaN(inputVal)) {
        alert("Please provide a decimal number greater than or equal to 0");

        numberInput.value = "";

        return;
    }

    decimalToBinary(inputVal);
};

const decimalToBinary = (input) => {
    const inputs = [];
    const reminders = [];
    const results = [];

    if (input === 0) {
        output.textContent = input;

        numberInput.value = "";

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

    output.textContent = reminders.reverse().join("");
};




// Method 2:
const getInputValue = () => {
    const inputVal = parseInt(numberInput.value);

    if (!numberInput.value || inputVal < 0) {
        alert("Please provide a decimal number greater than or equal to 0");

        numberInput.value = "";

        return;
    }

    decimalToBinary(inputVal);
};

const decimalToBinary = (val) => {
    let binary = "";

    if (val === 0) {
        binary = "0";
    }

    while (val > 0) {
        binary = (val % 2) + binary;

        val = Math.floor(val / 2);
    }

    output.textContent = binary;

    numberInput.value = "";
};


*/

// Method 3:
const animationContainer = document.getElementById("animation-container");

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

    decimalToBinary(inputVal);
};

const decimalToBinary = (val) => {
    console.log(val);
};

// "Please provide a decimal number greater than or equal to 0"

convertBtn.addEventListener("click", getInputValue);

numberInput.addEventListener("keydown", (e) => {
    //

    if (e.key === "Enter") {
        getInputValue();
    }
});

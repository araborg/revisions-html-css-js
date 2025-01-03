const inputNum = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const getInputVal = () => {
    const inputVal = parseInt(inputNum.value);

    if (!inputNum.value) {
        output.textContent = "Please enter a valid number";
    } else if (inputVal < 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (inputVal >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = convertToRoman(inputVal);

        console.log(convertToRoman(inputVal));
    }
};

const convertToRoman = (input) => {
    // if (input === 1) {
    //     return "I";
    // } else if (input === 2) {
    //     return "II";
    // } else if (input === 3) {
    //     return "III";
    // } else if (input === 4) {
    //     return "IV";
    // } else if (input === 5) {
    //     return "V";
    // } else if (input === 6) {
    //     return "VI";
    // } else if (input === 7) {
    //     return "VII";
    // } else if (input === 8) {
    //     return "VIII";
    // } else if (input === 9) {
    //     return "IX";
    // } else if (input === 10) {
    //     return "X";
    // }

    if (input === 1) {
        return "I";
    } else if (input === 5) {
        return "V";
    } else if (input === 10) {
        return "X";
    } else if (input === 50) {
        return "L";
    } else if (input === 100) {
        return "C";
    } else if (input === 500) {
        return "D";
    } else if (input === 1000) {
        return "M";
    }

    const inputs = [];
    const results = [];
    const reminders = [];

    while (input > 0 && input < 4000) {
        if (input >= 1000) {
        } else if (input >= 500) {
        } else if (input >= 100) {
        } else if (input >= 50) {
        } else if (input >= 10) {
        } else if (input >= 5) {
        }

        input = 0;
    }
};

convertBtn.addEventListener("click", getInputVal);

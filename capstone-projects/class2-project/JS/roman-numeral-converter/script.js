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
    }
};

const convertToRoman = (input) => {
    let noOfLoop = 0;

    if (input === 1) {
        return "I";
    } else if (input === 2) {
        return "II";
    } else if (input === 3) {
        return "III";
    } else if (input === 4) {
        return "IV";
    } else if (input === 5) {
        return "V";
    } else if (input === 6) {
        return "VI";
    } else if (input === 7) {
        return "VII";
    } else if (input === 8) {
        return "VIII";
    } else if (input === 9) {
        return "IX";
    } else if (input === 10) {
        return "X";
    }

    if (input >= 1000 && input < 4000) {
        // console.log(convertToRoman(input - 1000) + (noOfLoop += 1));
        // return convertToRoman(input - 1000) + (noOfLoop += 1);
    }
    console.log(noOfLoop);
};

convertBtn.addEventListener("click", getInputVal);

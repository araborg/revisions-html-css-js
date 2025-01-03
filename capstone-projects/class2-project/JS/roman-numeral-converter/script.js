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

const convertToRoman = (input) => {};

convertBtn.addEventListener("click", getInputVal);

inputNum.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getInputVal();
    }
});

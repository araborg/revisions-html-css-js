const inputNum = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const getInputVal = () => {
    const inputVal = parseInt(inputNum.value);

    if (!inputNum.value) {
        output.textContent = "Please enter a valid number";
    } else if (inputVal < 0) {
        output.textContent = "Please enter a number greater than or equal to 1"; // //
    } else if (inputVal >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = convertToRoman(inputVal);
    }
};

const convertToRoman = (input) => {
    const romans = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    const result = [];

    romans.forEach((arr) => {
        while (input >= arr[1]) {
            result.push(arr[0]);

            input -= arr[1];
        }
    });

    return result.join("");
};

convertBtn.addEventListener("click", getInputVal);

inputNum.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getInputVal();
    }
});

const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");

const output = document.getElementById("output");

console.log(numberInput);

const convertToRoman = () => {
    const input = parseInt(numberInput.value);

    console.log(input);

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

    // console.log(romans);
};

convertBtn.addEventListener("click", convertToRoman);

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = () => {
    console.log(numberInput.value);

    if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0
    ) {
        alert("Please provide a decimal number greater than or equal to 0");
    }
};

// console.log(parseInt("3"));
// console.log(parseInt(3));
// console.log(parseInt("3e+2"));
// console.log(parseInt(3e2));

// console.log(isNaN("3"));
// console.log(isNaN(3));
// console.log(isNaN("3e+2"));
// console.log(isNaN(3e2));

// console.log(isNaN(NaN));
// console.log(isNaN(parseInt("test")));
// console.log(parseInt("test"));

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});

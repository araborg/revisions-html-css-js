const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = () => {
    console.log(numberInput.value);

    if (!numberInput.value || parseInt(numberInput.value)) {
    }
};

console.log(parseInt("3"));
console.log(parseInt(3));
console.log(parseInt("3e+2"));
console.log(parseInt(3e2));

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});

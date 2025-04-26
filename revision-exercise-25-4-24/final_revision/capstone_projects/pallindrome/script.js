const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const formattedValueFxn = (str) => {
    const regex = /[\\_\s\(:\-\/\:)]/gi;

    return str.replace(regex, "");
};

console.log(formattedValueFxn("A"));
console.log(formattedValueFxn("eye"));
console.log(formattedValueFxn("_eye"));
console.log(formattedValueFxn("race car"));
console.log(formattedValueFxn("text not a palindrome"));
console.log(formattedValueFxn("A man, a plan, a canal. Panama"));
console.log(formattedValueFxn(""));
console.log(formattedValueFxn(""));
console.log(formattedValueFxn(""));

const checkInputValue = () => {
    const inputValue = textInput.value;

    console.log(inputValue);

    const formattedValue = formattedValueFxn();

    if (!inputValue) {
        alert("Please input avalue.");
    } else {
        const reversedValue = inputValue.reverse();

        console.log(reversedValue);
    }
};

checkBtn.addEventListener("click", checkInputValue);

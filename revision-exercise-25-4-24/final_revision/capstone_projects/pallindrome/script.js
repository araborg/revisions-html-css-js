const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const formattedValueFxn = (str) => {
    const regex = /[\\_\s,\|\|\(:\-\/\:)]/gi;

    return str.replace(regex, "");
};

const checkInputValue = () => {
    const inputValue = textInput.value;
    // console.log(textInput.value);

    const formattedValue = formattedValueFxn(inputValue);

    const splitString = formattedValue.split("");
    // console.log(splitString);

    if (!textInput.value) {
        alert("Please input avalue.");
    } else {
        const reversedValue = splitString.reverse().join("");

        const response =
            reversedValue === formattedValue
                ? " is a palindrome"
                : " is not a palindrome";

        result.innerHTML = `${inputValue} ${response}`;
    }
};

checkBtn.addEventListener("click", checkInputValue);

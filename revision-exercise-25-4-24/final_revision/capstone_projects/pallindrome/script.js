const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const formattedValueFxn = (str) => {
    const regex = /[\\_\s,\|\|\(:\-\/\:).]/g;

    return str.replace(regex, "");
};

const checkInputValue = () => {
    const inputValue = textInput.value;

    const formattedValue = formattedValueFxn(inputValue);

    const splitString = formattedValue.split("");

    if (!textInput.value) {
        alert("Please input a value.");
    } else {
        const reversedValue = splitString.reverse().join("");

        console.log(reversedValue, formattedValue);

        const response =
            reversedValue === formattedValue
                ? " is a palindrome"
                : " is not a palindrome";

        result.innerHTML = `${inputValue} ${response}`;
    }
};

checkBtn.addEventListener("click", checkInputValue);

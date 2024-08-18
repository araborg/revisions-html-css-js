const textInput = document.getElementById("text-input");
const btn = document.getElementById("check-btn");

/*
input values:





*/

const removeUnwantedChar = (str) => {
    const regex = "";
};

function check() {
    const textInputValue = textInput.value;
    console.log(textInputValue);

    if (!textInput.value) {
        alert("Please input a value");
    } else {
        const reverseTextInput = textInputValue.split("").reverse().join(" ");
        console.log(reverseTextInput);
    }
}

btn.addEventListener("click", check);

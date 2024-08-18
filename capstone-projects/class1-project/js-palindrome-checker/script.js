const textInput = document.getElementById("text-input");
const btn = document.getElementById("check-btn");

function check() {
    const textInputValue = textInput.value;
    console.log(textInputValue);

    if (!textInput.value) {
        alert("Please input a value");
    } else {
        const reverseTextInput = textInputValue.split("");
        // .reverse();
        console.log(reverseTextInput);
    }
}

btn.addEventListener("click", check);

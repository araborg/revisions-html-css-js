const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkInputValue = () => {
    const inputValue = textInput.value;

    if (!inputValue) {
        alert("Please input avalue.");
    }

    console.log(inputValue);
};

checkBtn.addEventListener("click", checkInputValue);

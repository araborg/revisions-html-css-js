const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkInputValue = () => {
    const inputValue = textInput.value;

    // const formattedValue

    if (!inputValue) {
        alert("Please input avalue.");
    } else {
        const reversedValue = inputValue.reverse();
    }

    console.log(inputValue);
};

checkBtn.addEventListener("click", checkInputValue);

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const result = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    const parseNum = parseInt(userInput.value);

    console.log(isNaN(parseNum));

    if (!userInput.value || isNaN(parseNum)) {
        alert("Please provide a phone number");
    } else {
        result.textContent = userInput.value;
    }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";

    result.textContent = "";
});

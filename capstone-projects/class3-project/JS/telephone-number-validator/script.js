/*
#00471b
#4d3800
*/
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const result = document.getElementById("results-div");

const getUserInput = (input) => {
    console.log(input);
};

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getUserInput(userInput.value);
    }
});

checkBtn.addEventListener("click", () => {
    console.log("check btn");
});

clearBtn.addEventListener("click", () => {
    console.log("clear btn");
});

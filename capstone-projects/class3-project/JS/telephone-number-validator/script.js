/*
#00471b
#4d3800
*/
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const result = document.getElementById("results-div");

userInput.addEventListener("keydown", () => {
    console.log("keydown");
});

checkBtn.addEventListener("click", () => {
    console.log("check btn");
});

clearBtn.addEventListener("click", () => {
    console.log("clear btn");
});

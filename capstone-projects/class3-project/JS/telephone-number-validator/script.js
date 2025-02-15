/*
#00471b
#4d3800

The format is 
(area code): (555)  

(exchange code): 555

(subscriber number): 1234 

For example, (555) 555-1234. 

*/
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const result = document.getElementById("results-div");

const getUserInput = (input) => {
    if (input === "") {
        alert("Please provide a phone number");

        return;
    }
};

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getUserInput(userInput.value);
    }
});

checkBtn.addEventListener("click", () => {
    getUserInput(userInput.value);
});

clearBtn.addEventListener("click", () => {
    console.log("clear btn");
});

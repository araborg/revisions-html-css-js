/*
[] denotes A CHARACTER class

() denotes a capturing GROUP


#00471b
#4d3800


The format is: 
(country code): 1
(area code): (555)  
(exchange code): 555
(subscriber number): 1234 

For example,1 (555) 555-1234. 


    1 555-555-5555
    1 (555) 555-5555
    1(555)555-5555
    1 555 555 5555
    5555555555
    555-555-5555
    (555)555-5555

*/

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkInput = (input) => {
    console.log(input);
};

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput(userInput.value);
    }
});

checkBtn.addEventListener("click", () => {
    checkInput(userInput.value);
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";
});

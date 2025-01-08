const msgInput = document.getElementById("message-input");
const checkBtn = document.getElementById("check-message-btn");
const result = document.getElementById("result");

const checkSpam = (msg) => {
    console.log(msg);
};

checkBtn.addEventListener("click", () => {
    if (!msgInput.value) {
        alert("Please enter a message..");

        return;
    }

    result.textContent = checkSpam(msgInput.value)
        ? "Oh no! This looks like a spam message."
        : "This message does not seem to contain any spam.";
});

/*
helpRegex: please help or assist me
dollarRegex: num hundred thousand million billion
freeRegex: free money
stockRegex: stock alert
dearRegex: dear friend
denyList: []
*/

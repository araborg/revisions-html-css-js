const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageBtn = document.getElementById("check-message-btn");

// console.log(messageInput, result, checkMessageBtn);
/*
case-insensitive: i
alternate sequence: |
character class: []
quantifier: + 

*/

const helpRegex = /please help|assist me/i;
const dollarRegex =
    /[0-9]+ hundred|thousand|million|billion dollars|[0-9]+dollars/i;

const denyList = [helpRegex, dollarRegex];

// .match() was called on d parameter
// const isSpam = (msg) => msg.match(helpRegex);

// .test() was called on d regexp
// const isSpam = (msg) => helpRegex.test(msg);
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageBtn.addEventListener("click", () => {
    if (!messageInput.value) {
        alert("Please enter a message..");

        return;
    }

    console.log(isSpam(messageInput.value));

    result.textContent = isSpam(messageInput.value)
        ? "Oh no! This looks like a spam message.."
        : "This message does not seem to contain any spam.";

    messageInput.value = "";
});

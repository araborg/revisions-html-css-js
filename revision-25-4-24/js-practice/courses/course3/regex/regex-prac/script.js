const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageBtn = document.getElementById("check-message-btn");

// console.log(messageInput, result, checkMessageBtn);

const helpRegex = /please help/i;

// const isSpam = (msg) => msg.match(helpRegex);
const isSpam = (msg) => msg.test(helpRegex);

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

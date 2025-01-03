const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageBtn = document.getElementById("check-message-btn");

// console.log(messageInput, result, checkMessageBtn);

checkMessageBtn.addEventListener("click", () => {
    if (!messageInput.value) {
        alert("Please enter a message..");

        return;
    }
});

const isSpam = (msg) => false;

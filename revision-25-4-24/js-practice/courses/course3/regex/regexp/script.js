const msgInput = document.getElementById("message-input");
const checkBtn = document.getElementById("check-message-btn");
const result = document.getElementById("result");

console.log(msgInput, checkBtn);

const checkSpam = () => {};

checkBtn.addEventListener("click", () => {
    if (!msgInput.value) {
        alert("Please enter a message..");

        return;
    }

    result.textContent = "Hello world";
});

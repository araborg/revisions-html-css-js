const btn = document.getElementById("submit");

console.log(btn);

function check() {
    console.log("btn clicked");
}

btn.addEventListener("click", check);

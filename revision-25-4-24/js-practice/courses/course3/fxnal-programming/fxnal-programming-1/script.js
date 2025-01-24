/*
Fxns:
1. window.onload = () => {}
    const createLabel = (name) =>{}

   
2. const range = (start, end) => Array();


3.


4.




*/

window.onload = () => {
    const container = document.getElementById("container");

    const createLabel = (name) => {
        const label = document.createElement("div");

        label.className = "label";
        label.textContent = name;

        container.appendChild(label);
    };
};

const range = (start, end) =>
    Array(end - start + 1)
        .fill(start)
        .map((el, i) => el + i);

console.log(range(1, 10));

/*
Fxns:
1. window.onload = () => {}
    const createLabel = (name) =>{}

   
2.


3.


4.




*/

window.onload = () => {
    const container = document.getElementById("container");

    const createLabel = (name) => {
        const label = document.createElement("div");

        label.className = "label";
        label.textContent = name;

        console.log(label);
    };
};

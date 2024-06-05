const budget = document.querySelector("#budget");
const output = document.querySelector("#output");

// btns
const caloriesCounter = document.querySelector("#calories-counter");
const addEntryBtn = document.querySelector("#add-entry");
const clearBtn = document.querySelector("#clear");

// state
let isError = false;

// Helper fxns
function trimInput(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

console.log(trimInput(" +- 200 + - "));

let xp = 0;

let health = 100;
let gold = 50;

let currentWeapon = 0;

let fighting;

let monsterHealth;

let inventory = ["stick"];

// DOM
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// stats and text
const text = document.document.querySelector("#text");
const xpText = document.document.querySelector("#xpText");
const healthText = document.document.querySelector("#healthText");
const goldText = document.document.querySelector("#goldText");
const monsterStats = document.document.querySelector("#monsterStats");
const monsterName = document.document.querySelector("#monsterName");
const monsterHealthText = document.document.querySelector("#monsterHealth");

function goStore() {
    console.log("Going to store.");
}

function goCave() {
    console.log("Going to cave.");
}

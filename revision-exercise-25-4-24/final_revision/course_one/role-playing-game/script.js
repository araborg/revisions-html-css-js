// d experience,xp
let xp = 0;

let health = 100;
let gold = 50;

// current weapon index
let currentWeapon = 0;

let fighting;
let monsterHealth;

// weapon collections
let inventory = ["stick"];

// btns
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

const text = document.querySelector("#text");

// hidden elements
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// modem 09058603826

// provided weapons
const weapons = [
    // index: 0
    {
        name: "stick",
        power: 5,
    },

    // index: 1

    {
        name: "dagger",
        power: 30,
    },

    // index: 2
    {
        name: "claw hammer",
        power: 50,
    },

    // index: 3
    {
        name: "sword",
        power: 100,
    },
];

// dse r monsters but dragon is vip
const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15,
    },

    {
        name: "fanged beast",
        level: 8,
        health: 60,
    },

    {
        name: "dragon",
        level: 20,
        health: 300,
    },
];

// locations
const locations = [
    {
        name: "town square",

        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],

        text: 'You are in the town square. You see a sign that says "Store".',
    },

    {
        name: "store",

        "button text": [
            "Buy 10 health (10 gold)",
            "Buy weapon (30 gold)",
            "Go to town square",
        ],
        "button functions": [buyHealth, buyWeapon, goTown],

        text: "You enter the store.",
    },

    {
        name: "cave",

        "button text": [
            "Fight slime",
            "Fight fanged beast",
            "Go to town square",
        ],
        "button functions": [fightSlime, fightBeast, goTown],

        text: "You enter the cave. You see some monsters.",
    },

    {
        name: "fight",

        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],

        text: "You are fighting a monster.",
    },

    {
        name: "kill monster",

        "button text": [
            "Go to town square",

            "Go to town square",
            "Go to town square",
        ],
        "button functions": [goTown, goTown, easterEgg],

        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
    },

    {
        name: "lose",

        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],

        text: "You die. &#x2620;",
    },

    {
        name: "win",

        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],

        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
    },

    {
        name: "easter egg",

        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],

        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
    },
];

// btns fxns calls
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// update UI
function update(location) {
    // hidden elements
    monsterStats.style.display = "none";
}

function goStore() {}

function goTown() {}

function goCave() {}

function buyHealth() {}

function buyWeapon() {}

function sellWeapon() {}

function fightSlime() {}

function fightBeast() {}

function fightDragon() {}

function goFight() {}

function attack() {}

function getMonsterAttackValue(level) {}

function isMonsterHit() {}

function dodge() {}

function defeatMonster() {}

function lose() {}

function winGame() {}

function restart() {}

function easterEgg() {}

function pickTwo() {}

function pickEight() {}

function pick(guess) {}

/*
variables:


function update(location){}

function goTown(){}
function goStore(){}
function goCave(){}

function buyHealth() {}
function sellWeapon() {}
function buyWeapon() {}

function goFight() {}

function fightSlime() {}
function fightBeast() {}
function fightDragon() {}

function dodge() {}
function attack() {}

function getMonsterAttackValue(){}
function isMonsterHit() {}

function lose() {}
function winGame() {}
function defeatMonster() {}

function easterEgg() {}

function pick(guess) {}

function pickTwo() {}
function pickEight() {}

function restart() {}

*/
let xp = 0;
let playerHealth = 100;
let gold = 50;

let weaponIndex = 0;
let monsterIndex;
let monsterHealth;

let armoury = ["stick"];

// player stats
const xpText = document.getElementById("xpText");
const playerHealthText = document.getElementById("playerHealthText");
const goldText = document.getElementById("goldText");

// buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// monsterStats
const monsterName = document.getElementById("monsterName");
const monsterHealthText = document.getElementById("monsterHealthText");

// text
const text = document.getElementById("text");

const weapons = [
    // currentWeapon: 0 i.e stick
    { name: "stick", power: 5 },
    { name: "dagger", power: 30 },
    { name: "claw hammer", power: 50 },
    { name: "sword", power: 100 },
];

/*
const monsters = [
    {
        name: "Slime",
        level: 2,
        health: 15,
    },

    {
        name: "Fanged beast",
        level: 8,
        health: 60,
    },

    {
        name: "Dragon",
        level: 20,
        health: 300,
    },
];

const locations = [
    // 0
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: 'You are in the town square. You see a sign that says "Store".',
    },

    // 1
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

    // 2
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

    // 3: for displaying slime. beast and dragon
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster.",
    },

    // 4
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

    // 5
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;",
    },

    // 6
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
    },

    // 7
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
    },
];
*/

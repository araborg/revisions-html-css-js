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
    // index: 0
    {
        name: "town square",

        "button text": ["Go to store", "Go to cave", "Fight dragon"],

        /*
            Initial version of the buttons:
            <div id="controls">
                <button id="button1">Go to store</button>
                <button id="button2">Go to cave</button>
                <button id="button3">Fight dragon</button>
            </div>
        */

        "button functions": [goStore, goCave, fightDragon],

        text: 'You are in the town square. You see a sign that says "Store".',
    },

    // index: 1
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

    // index: 2
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

    // index: 3
    {
        name: "fight",

        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],

        text: "You are fighting a monster.",
    },

    // index: 4
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

    // index: 5
    {
        name: "lose",

        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],

        text: "You die. &#x2620;",
    },

    // index: 6
    {
        name: "win",

        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],

        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
    },

    // index: 7
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

    // btns text
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    // btns fxns calls
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
}

/*
functions associated with btns

start:
goStore, 
goCave, 
fightDragon,

On pressing Go to store:

1st btn: Go to store
buyHealth, 
buyWeapon, 
goTown

2nd btn: Go to cave
fightSlime, 
fightBeast, 
goTown

btns: fightSlime, fightDragon, fightBeast, 
attack, 
dodge, 
goTown


defeatMonster calls these:
goTown, 
goTown,
easterEgg,


win or lose:
restart, 
restart, 
restart, 


btn: easterEgg calls these:
pickTwo, 
pickEight, 
goTown,

*/

/*
index: 1

"button functions": [buyHealth, buyWeapon, goTown],
"button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square",],
*/

function goStore() {
    update(locations[1]);
}

/*
index: 2

"button text": ["Fight slime","Fight fanged beast", "Go to town square",],
"button functions": [fightSlime, fightBeast, goTown],

*/

function goCave() {
    update(locations[2]);
}

/*
index: 0; ds help return to d home pg

"button text": ["Go to store", "Go to cave", "Fight dragon"],
"button functions": [goStore, goCave, fightDragon],

*/

// button.text = "Go to town square",
function goTown() {
    update(locations[0]);
}

/*
buyHealth(): uses goStore() and location 1

index: 1

"button functions": [buyHealth, buyWeapon, goTown],
"button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square",],

*/

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;

        health += 10;

        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

/*
buyWeapon(): uses goStore() and location 1
and is d one who calls sellWeapon()

index: 1

"button functions": [buyHealth, buyWeapon, goTown],
"button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square",],
*/

function buyWeapon() {
    /* for currentWeapon to equal weapons.length , wch 
        is 4 arr items we need an addition 3 items i.e 
        item at index 0, 1, 2 wc mks weapons.length - 1
    */

    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;

            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;
            // weapon collections
            inventory.push(newWeapon);

            goldText.innerText = gold;
            text.innerText = "You now have a " + newWeapon + ".";
            text.innerText += " In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";

        button2.onclick = sellWeapon;
    }
}

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

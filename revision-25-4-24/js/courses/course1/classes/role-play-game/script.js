let xp = 0;

let health = 100;
let gold = 50;

let currentWeapon = 0; // reps a weapon index

let fighting; // reps a monster index

let monsterHealth;

let inventory = ["stick"];

// DOM
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// stats and text
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// arrays
const weapons = [
    { name: "stick", power: 5 },
    { name: "dagger", power: 30 },
    { name: "claw hammer", power: 50 },
    { name: "sword", power: 100 },
];

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

    // 3
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

        "button functions": [goTown, goTown, goTown],
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
];

/*
function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;

    text.innerText = "You enter the store.";
}
*/

// locations' fxns
function update(location) {
    monsterStats.style.display = "none";

    // btn text
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    // fxn attached to btn
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];

    // corresponding text
    text.innerHTML = location.text;
}

// applicatn of locatn's fxn
function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

// transactn fxns
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

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;

        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";

        text.innerText += " In your inventory you have: " + inventory;
    } else {
        text.innerText = "Don't sell your only weapon!";
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;

            currentWeapon++; // reps a weapon index

            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;

            text.innerText = "You now have a " + newWeapon + ".";

            inventory.push(newWeapon);

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

/*
const cat = {
    name: "Whiskers",
    "Number of legs": 4,
};

cat["home"] = "Ibadan";

console.log(cat);
*/

// fights fxn
function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;

    monsterStats.style.display = "block";

    monsterName.innerText = monsters[fighting].name;
    monsterHealth.innerText = monsters[fighting].health;
}

// fight monster fxns
function fightSlime() {
    fighting = 0; //index of slime in the monsters array
    goFight();
}

function fightBeast() {
    fighting = 1; //index of beast in the monsters array
    goFight();
}

function fightDragon() {
    fighting = 2; //index of dragon in the monsters array
    goFight();
}

// fight methods fxns
function attack() {
    text.innerText = "The " + monsterName + " attacks.";
    text.innerText +=
        " You attack it with your " + weapons[currentWeapon].name + ".";

    health -= getMonsterAttackValue(monsters[fighting].level);

    if (isMonsterHit()) {
        monsterHealth -=
            weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text.innerText += " You miss.";
    }

    // monsterHealth -=
    //     weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;

    healthText.innerText = health;
    monsterHealth.innerText = monsterHealth;

    if (health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        // d player is fighting d dragon
        if (fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }

    if (Math.random() <= 0.1) {
        text.innerText += " Your " + weapons.pop() + " breaks.";
        currentWeapon--;
    }
}

function getMonsterAttackValue(level) {
    const hit = level * 5 - Math.floor(Math.random * xp);
    console.log(hit);
    return hit > 0 ? hit : 0;
}

function isMonsterHit() {
    return Math.random() > 0.2 || health < 20;
}

function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;

    goldText.innerText = gold;
    xpText.innerText = xp;

    update(locations[4]);
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;

    inventory = ["stick"];

    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
}

// variables
let xp = 0;
let playerHealth = 100;
let gold = 3550;

let weaponIndex = 0;

let monsterIndex;
let monsterHealth;

let armoury = ["stick"];

// buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// player stats
const xpText = document.querySelector("#xpText");
const playerHealthText = document.querySelector("#playerHealthText");
const goldText = document.querySelector("#goldText");

// monsterStats
const monsterStats = document.getElementById("monsterStats");
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

// init btns
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// fxns
function update(location) {
    // hide monster stats wn u r nt attacking
    monsterStats.style.display = "none";

    // btns text
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    // btns fxn calls on click
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];

    text.innerHTML = location.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        playerHealth += 10;

        playerHealthText.innerText = playerHealth;
        goldText.innerText = gold;
    } else {
        text.innerText = `You do not have enough gold $${gold} to buy health.`;
    }
}

function buyWeapon() {
    /*
        1. Check if d weaponIndex doesn't equal weapons length 
        2. Check if there is enough gold to buy more health
    */
    if (weaponIndex < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;

            // as u buy weapon increase weaponIndex
            weaponIndex++;

            goldText.innerText = gold;
            const newWeapon = weapons[weaponIndex].name;

            text.innerText = `You now have a ${newWeapon}.`;
            armoury.push(newWeapon);

            // armoury = armoury.join(", ").split(",  ");
            text.innerText += ` In your inventory you have: ${armoury}`;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";

        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if (armoury.length > 1) {
        gold += 15;
        goldText.innerText = gold;

        // as u sell weapon decrease weaponIndex
        weaponIndex--;

        // text.innerText = `You sold a ${armoury.shift()}.`;
        text.innerText = `You sold a ${armoury.pop()}.`;
        text.innerText += ` Your weapons remain ${armoury}`;
    } else {
        text.innerText = "Don't sell your only weapon!";

        button2.innerText = "Buy weapon (30 gold)";
        button2.onclick = buyWeapon;
    }
}

function fightSlime() {
    monsterIndex = 0;
    goFight();
}

function fightBeast() {
    monsterIndex = 1;
    goFight();
}

function fightDragon() {
    monsterIndex = 2;
    goFight();
}

function goFight() {
    update(locations[3]);

    monsterStats.style.display = "block";

    /* monsterIndex is needed here. Hence d reason 
    it was supplied in d fxn calling goFight() */

    monsterHealth = monsters[monsterIndex].health;

    monsterName.innerText = monsters[monsterIndex].name;
    monsterHealthText.innerText = monsterHealth;
}

// fxns based on game states
function attack() {
    text.innerText = `The ${monsters[monsterIndex].name} attacks.`;
    text.innerText += ` You attack it with your ${weapons[weaponIndex].name}.`;

    playerHealth -= getMonsterAttackValue(monsters[monsterIndex].level);

    // if monster is Hit
    if (isMonsterHit()) {
        monsterHealth -=
            weapons[weaponIndex].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text.innerText += " You miss.";
    }

    playerHealthText.innerText = playerHealth;
    monsterHealthText.innerText = monsterHealth;

    // health less than 0
    if (playerHealth <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        if (monsterIndex === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }

    // weapon break
    if (Math.random() <= 0.1 && armoury.length !== 1) {
        text.innerText == ` Your ${armoury.pop()} breaks.`;
        // reduce weaponIndex
        weaponIndex--;
    }
}

function getMonsterAttackValue(level) {
    const hit = level * 5 - Math.floor(Math.random() * xp);
    return hit > 0 ? hit : 0;
}

function isMonsterHit() {
    return Math.random() > 0.2 || playerHealth < 20;
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function defeatMonster() {
    gold += Math.floor(monsters[monsterIndex].level * 6.7);

    // add to xp using monster level
    xp += monsters[monsterIndex].level;

    goldText.innerText = gold;
    xpText.innerText = xp;

    // call update with kill monster obj
    update(locations[4]);
}

function dodge() {
    text.innerText =
        "You dodge the attack from the " + monsters[monsterIndex].name;
}

function easterEgg() {
    // call easter egg obj
    update(locations[7]);
}

function pickTwo() {
    pick(2);
}

function pickEight() {
    pick(8);
}

function pick(guess) {
    const numbers = [];

    while (numbers.length < 10) {
        const randomNum = Math.floor(Math.random() * 11);
        numbers.push(randomNum);
    }

    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

    for (let i = 0; i < numbers.length; i++) {
        text.innerText += `${numbers[i]} \n`;
    }

    if (numbers.includes(guess)) {
        text.innerText += "Right! You win 20 gold!";
        gold += 20;
        goldText.innerText = gold;
    } else {
        text.innerText += "Wrong! You lose 10 health!";

        playerHealth -= 10;
        playerHealthText.innerText = playerHealth;

        if (playerHealth <= 0) {
            lose();
        }
    }
}

function restart() {
    // reset xp, playerHealth, gold, weaponIndex, armoury to initial values
    xp = 0;
    playerHealth = 100;
    gold = 50;

    weaponIndex = 0;
    armoury = ["stick"];

    // display xp, playerHealth, gold
    xpText.innerText = xp;
    playerHealthText.innerText = playerHealth;
    goldText.innerText = gold;

    // call go to town obj: update(locations[0]);
    goTown();
}

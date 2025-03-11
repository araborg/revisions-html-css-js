const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");

const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");

const checkpointMessage = document.querySelector(".checkpoint-screen > p");

// canvas
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

const isCheckpointCollisionDetectionActive = true;

const proportionalSize = (size) => {
    return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
};

// Using innerHeight / canvas.height: @ 350
class Player {
    constructor() {
        this.position = {
            x: proportionalSize(10), // 7
            y: proportionalSize(400), // 280
        };

        this.velocity = {
            x: 0,
            y: 0,
        };

        this.width = proportionalSize(40); // 28
        this.height = proportionalSize(40); // 28
    }

    draw() {
        ctx.fillStyle = "#99c9ff";

        //                  7               280             20          20
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        // ========               0
        this.position.x += this.velocity.x; // moves right

        // ========               0
        this.position.y += this.velocity.y; // jumps up

        //          280           28               0                350
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            if (this.position.y < 0) {
                this.position.y = 0;

                //                  0.5
                this.velocity.y = gravity;
            }

            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }

        // ensures the player doesn't move too far off to the left.
        if (this.position.x < this.width) {
            this.position.x = this.width;
        }

        // ensures the player does not accidentally go off screen to the right
        if (this.position.x >= canvas.width - 2 * this.width) {
            this.position.x = canvas.width - 2 * this.width;
        }
    }
}

const player = new Player();

const startGame = () => {
    canvas.style.display = "block";

    startScreen.style.display = "none";

    // player.draw();

    animate();
};

startBtn.addEventListener("click", startGame);

const animate = () => {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update();

    if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
        //280
        player.velocity.x = 5;
    } else if (
        keys.leftKey.pressed &&
        player.position.x > proportionalSize(100) // 70
    ) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;
    }

    platforms.forEach((platform) => platform.draw());

    if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
        platforms.forEach((platform) => {
            platform.position.x -= 5;
        });
    } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
        platforms.forEach((platform) => {
            platform.position.x += 5;
        });
    }

    platforms.forEach((platform) => {
        const collisionDetectionRules = [
            player.position.y + player.height <= platform.position.y,

            player.position.y + player.height + player.velocity.y >=
                platform.position.y,

            player.position.x >= platform.position.x - player.width / 2,
        ];
    });
};

const keys = {
    rightKey: {
        pressed: false,
    },

    leftKey: {
        pressed: false,
    },
};

const movePlayer = (key, xVelocity, isPressed) => {
    if (!isCheckpointCollisionDetectionActive) {
        player.velocity.x = 0;
        player.velocity.y = 0;

        return;
    }

    switch (key) {
        case "ArrowLeft":
            keys.leftKey.pressed = isPressed;

            if (xVelocity === 0) {
                player.velocity.x = xVelocity;
            }

            player.velocity.x -= xVelocity;
            break;

        case "ArrowUp":
        case " ":
        case "Spacebar":
            player.velocity.y -= 8;
            break;

        case "ArrowRight":
            keys.rightKey.pressed = isPressed;

            if (xVelocity === 0) {
                player.velocity.x = xVelocity;
            }

            player.velocity.x += xVelocity;
    }
};

window.addEventListener("keydown", ({ key }) => {
    movePlayer(key, 8, true);
});

window.addEventListener("keyup", ({ key }) => {
    movePlayer(key, 0, false);
});

class Platform {
    constructor(x, y) {
        this.position = { x, y };

        this.width = 200;
        this.height = proportionalSize(40);
    }

    draw() {
        ctx.fillStyle = "#acd157";

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const platformPositions = [
    { x: 500, y: proportionalSize(450) },
    { x: 700, y: proportionalSize(400) },
    { x: 850, y: proportionalSize(350) },
    { x: 900, y: proportionalSize(350) },
    { x: 1050, y: proportionalSize(150) },
    { x: 2500, y: proportionalSize(450) },
    { x: 2900, y: proportionalSize(400) },
    { x: 3150, y: proportionalSize(350) },
    { x: 3900, y: proportionalSize(450) },
    { x: 4200, y: proportionalSize(400) },
    { x: 4400, y: proportionalSize(200) },
    { x: 4700, y: proportionalSize(150) },
];

const platforms = platformPositions.map(
    (platform) => new Platform(platform.x, platform.y)
);

/*
Canvas methods:
const ctx = canvas.getContext("2d")
ctx.fillStyle = "#99c9ff";
ctx.fillRect(x, y, width, height)




canvas variables:
canvas.width
canvas.height


*/

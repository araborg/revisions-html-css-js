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

/*

console.log(
    this.position.y, // 280
    this.height, // 28
    this.velocity.y, // 0
    canvas.height // 350
    );
    
    
    */

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

    player.draw();
};

startBtn.addEventListener("click", startGame);

const animate = () => {
    requestAnimationFrame(animate);
};

/*
Canvas methods:
const ctx = canvas.getContext("2d")
ctx.fillStyle = "#99c9ff";
ctx.fillRect(x, y, width, height)




canvas variables:
canvas.width
canvas.height


*/

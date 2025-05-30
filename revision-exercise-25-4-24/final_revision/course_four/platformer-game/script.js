const startBtn = document.getElementById("start-btn");

const startScreen = document.querySelector(".start-screen");

const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

let isCheckpointCollisionDetectionActive = true;

const startGame = () => {
    canvas.style.display = "block";
    startScreen.style.display = "none";

    // animate()
};

startBtn.addEventListener("click", startGame);

const proportionalSize = (size) => {
    console.log(innerHeight);

    return innerHeight < 500;

    // console.log(size);
};

proportionalSize(400);

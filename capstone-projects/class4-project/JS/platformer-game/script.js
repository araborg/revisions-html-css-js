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

const proportionalSize = (size) => {};

//

/*
Canvas methods:
canvas.getContext("2d")



canvas variables:
canvas.width
canvas.height


*/

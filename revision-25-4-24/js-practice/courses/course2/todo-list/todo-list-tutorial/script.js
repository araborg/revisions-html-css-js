const openTaskFormBtn = document.getElementById("open-task-form-btn");

const taskForm = document.getElementById("task-form");

const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");

const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");

const tasksContainer = document.getElementById("tasks-container");

const taskData = [];

let currentTask = {};

openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});
// console.log(taskData);

// closeTaskFormBtn.addEventListener("click", () => {
//     taskForm.classList.toggle("hidden");
// });

closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();

    taskForm.classList.toggle("hidden");
});

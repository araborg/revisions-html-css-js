// form
const taskForm = document.getElementById("task-form");

// btns
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");

// inputs
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// dialog btns
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");

// task container
const tasksContainer = document.getElementById("tasks-container");

const taskData = []; //store all the tasks
const currentTask = {}; //track the state when editing and discarding tasks

const removeSpecialChars = (val) => {
    return val.trim();
};

const argu = " along";
console.log(argu.length);

console.log(removeSpecialChars(argu).length);

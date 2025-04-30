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

const taskData = [];
const currentTask = {};

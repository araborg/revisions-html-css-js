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

// logic
const taskData = [];

let currentTask = {};

const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
};

// event listeners
openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    taskForm.classList.toggle("hidden");

    // store d todo list values in an obj
    const taskObj = {
        id: `${titleInput.value
            .toLowerCase()
            .split(" ")
            .join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };

    const taskDataIndex = taskData.findIndex(
        (task) => task.id === currentTask.id
    );

    if (taskDataIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[taskDataIndex] = taskObj;

        addOrUpdateTaskBtn.innerText = "Add Task";
    }

    updateTaskContainer();
    reset();
});

const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";

    taskData.forEach(({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
            <div class='task' id='${id}'>
                <p><strong>Title:</strong> ${title}</p>

                <p><strong>Date:</strong> ${date}</p>

                <p><strong>Description:</strong> ${description}</p>

                <button 
                    type="button" 
                    class="btn"
                    onclick="editTask(this)"
                >
                    Edit
                </button>

                <button 
                    type="button" 
                    class="btn"
                    onclick="deleteTask(this)"
                >
                    Delete
                </button>
            </div>
        `;
    });
};

const editTask = (buttonEl) => {
    const taskDataIndex = taskData.findIndex(
        (task) => task.id === buttonEl.parentElement.id
    );

    currentTask = taskData[taskDataIndex];

    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");
};

const deleteTask = (buttonEl) => {
    const taskDataIndex = taskData.findIndex(
        (task) => task.id === buttonEl.parentElement.id
    );

    // tasksContainer.innerHTML += taskData.filter(
    //     (task) => task.id === taskDataIndex
    // );
    taskData.splice(taskDataIndex, 1);

    updateTaskContainer();
    console.log(taskData);

    console.log(taskDataIndex);
};

/*
taskData

currentTask

removeSpecialChars

addOrUpdateTask



deleteTask

editTask

reset

*/
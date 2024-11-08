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

// coding start
const taskData = [];

let currentTask = {};

openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues =
        titleInput.value || dateInput.value || descriptionInput.value;

    const formInputValuesUpdated =
        titleInput.value !== currentTask.title ||
        dateInput.value !== currentTask.date ||
        descriptionInput.value !== currentTask.description;

    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
});

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();

    // taskForm.classList.toggle("hidden");
    reset();
});

const addOrUpdateTask = () => {
    const dataArrIndex = taskData.findIndex((item) => {
        item.id === currentTask.id;
    });

    const taskObj = {
        id: `${titleInput.value
            .toLowerCase()
            .split(" ")
            .join("-")}-${Date.now()}`,

        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[dataArrIndex] = taskObj;
    }

    updateTaskContainer();
    reset();
};

const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";

    taskData.forEach(({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
            <div class="task" id="${id}">
                <p>
                    <strong>Title: </strong>${title}
                </p>

                 <p>
                    <strong>Date: </strong>${date}
                </p>

                 <p>
                    <strong>Description: </strong>${description}
                </p>

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

/*
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataArrIndex = taskData.findIndex((item) => {
        item.id === currentTask.id;
    });

    const taskObj = {
        id: `${titleInput.value
            .toLowerCase()
            .split(" ")
            .join("-")}-${Date.now()}`,

        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    }

    taskData.forEach(({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
            <div class="task" id="${id}">
                <p>
                    <strong>Title: </strong>${title}
                </p>

                 <p>
                    <strong>Date: </strong>${date}
                </p>

                 <p>
                    <strong>Description: </strong>${description}
                </p>

                <button type="button" class="btn">Edit</button>
                <button type="button" class="btn">Delete</button>
            </div>
        `;
    });

    // taskForm.classList.toggle("hidden");
    reset();
});
*/

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addOrUpdateTask();
});

const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";

    taskForm.classList.toggle("hidden");

    currentTask = {};
};

const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    buttonEl.parentElement.remove();

    taskData.splice(dataArrIndex, 1);
};

const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    currentTask = taskData[dataArrIndex];

    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*
const myTaskArr = [
    { task: "Walk the Dog", date: "22-04-2022" },
    { task: "Read some books", date: "02-11-2023" },
    { task: "Watch football", date: "10-08-2021" },
];

localStorage.setItem("modak", JSON.stringify(myTaskArr));

const getTaskArr = localStorage.getItem("modak");
console.log(getTaskArr);

const getTaskArrObj = JSON.parse(localStorage.getItem("modak"));
console.log(getTaskArrObj);

localStorage.removeItem("modak");

const getTaskArr1 = localStorage.getItem("modak");
console.log(getTaskArr1);

const getTaskArrObj1 = JSON.parse(localStorage.getItem("modak"));
console.log(getTaskArrObj1);
*/

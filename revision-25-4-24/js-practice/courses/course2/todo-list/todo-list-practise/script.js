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
const taskData = JSON.parse(localStorage.getItem("tasks")) || [];

const myTaskArr = [
    {
        title: "Note-taking web app",
        date: "22-04-2022",
        description:
            "This project has many fun and challenging features to add, including color and font themes. It can also be built as a full-stack web app!",
    },

    {
        title: "Bento grid",
        date: "02-11-2023",
        description:
            "This challenge is perfect for testing your CSS Grid and responsive skills with this bento grid layout.",
    },

    {
        title: "Personal finance app",
        date: "10-08-2021",
        description:
            "This app contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) and includes a lot of tricky elements. You can also build it as a full-stack app!",
    },
];

// const taskData = myTaskArr;

let currentTask = {};

const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";

    addOrUpdateTaskBtn.innerText = "Add Task";

    currentTask = {};

    taskForm.classList.toggle("hidden");
};

const addOrUpdateTask = () => {
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

    localStorage.setItem("tasks", JSON.stringify(taskData));

    updateTaskContainer();
    reset();
};

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

if (taskData.length) {
    updateTaskContainer();
}

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

    taskData.splice(taskDataIndex, 1);

    localStorage.setItem("tasks", JSON.stringify(taskData));

    // updateTaskContainer();
};

// event listeners
openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
    const taskInputHasValue =
        titleInput.value || dateInput.value || descriptionInput.value;

    const taskInputValueChanged =
        titleInput.value !== currentTask.title ||
        dateInput.value !== currentTask.date ||
        descriptionInput.value !== currentTask.description;

    if (taskInputHasValue && taskInputValueChanged) {
        confirmCloseDialog.showModal();
    } else {
        // taskForm.classList.toggle("hidden");

        reset();
    }
});

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();

    reset();
});

discardBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addOrUpdateTask();
});

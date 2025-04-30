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
    // trim() removes whitespace from both ends of d string
    return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
};

openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.remove("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
    const formInputContainValues =
        titleInput.value || dateInput.value || descriptionInput.value;

    const formInputValuesUpdated =
        titleInput.value !== currentTask.title ||
        dateInput.value !== currentTask.date ||
        descriptionInput.value !== currentTask.description;

    if (formInputContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal();
    } else {
        reset;
    }
});

const addOrUpdateTask = () => {
    if (!titleInput.value.trim()) {
        alert("Please provide a title");

        return;
    }

    // cr8 a task
    const taskObj = {
        id: `${titleInput.value
            .toLowerCase()
            .split(" ")
            .join("-")}-${Date.now()}`,

        title: titleInput.value,

        date: dateInput.value,
        description: descriptionInput.value,
    };

    // get d index of d task to be updated
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === currentTask.id
    );

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[dataArrIndex] = taskObj;
    }

    localStorage.setItem("data", JSON.stringify(taskData));
};

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addOrUpdateTask();
});

// update UI
const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";

    taskData.forEach(({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
            <div class="task" id="${id}">
                <p>
                    <strong> Title: </strong>  ${title} 
                </p>

                <p>
                    <strong> Date: </strong> ${date}
                </p>

                  <p>
                    <strong> Date: </strong> ${date}
                </p>

            </div>
        
        
        `;
    });
};

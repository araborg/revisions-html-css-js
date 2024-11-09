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
const taskData = JSON.parse(localStorage.getItem("data")) || [];

let currentTask = {};

// removes all special characters.
const removeSpecialChars = (val) => {
    return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
};

const addOrUpdateTask = () => {
    // ds works for no value and empty space(s)
    if (!titleInput.value.trim()) {
        alert("Please provide a title");

        return;
    }

    const taskObj = {
        id: `${titleInput.value
            .toLowerCase()
            .split(" ")
            .join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };

    /* 
        wc task is to be updated i.e currentTask? Even 
        though it has not be selected wn a task is 1st 
        created?
    */
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === currentTask.id
    );

    // for new task and updated task
    if (dataArrIndex === -1) {
        // new task created for d 1st time
        taskData.unshift(taskObj);
    } else {
        // updating/editing a specific task
        taskData[dataArrIndex] = taskObj;
    }

    // stores/update taskData in d browser's local storage
    localStorage.setItem("data", JSON.stringify(taskData));

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

const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    buttonEl.parentElement.remove();

    taskData.splice(dataArrIndex, 1);

    localStorage.setItem("data", JSON.stringify(taskData));
};

const editTask = (buttonEl) => {
    // shows d taskForm
    taskForm.classList.toggle("hidden");

    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    // update currentTask, an obj dt was initially empty
    currentTask = taskData[dataArrIndex];

    // taskObj wasn't used bcos we still need d id ppty
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";

    // shows d taskForm
    // taskForm.classList.toggle("hidden");
};

/*
    reset() was called in 3 places:
    - addOrUpdateTask(): wn task is 1st created

    - closeTaskFormBtn: wn close btn was clicked 
      without an update being md and dialog box nt 
      activated

    - discardBtn: wn discard btn was clicked wn an 
      update/edit was md
*/
const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";

    taskForm.classList.toggle("hidden");

    // after d currentTask is edited, it shd be empty
    currentTask = {};
};

/* 
    if dre r tasks being created wn d browser was used, 
    show those task. ds happens due to d localStorage.
*/
if (taskData.length) {
    updateTaskContainer();
}

// event listeners
openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
    // dre r presence of values: wn creating a new task
    const formInputsContainValues =
        titleInput.value || dateInput.value || descriptionInput.value;

    // initial values have changed: wn editing a previous task
    const formInputValuesUpdated =
        titleInput.value !== currentTask.title ||
        dateInput.value !== currentTask.date ||
        descriptionInput.value !== currentTask.description;

    // conditions 4 showing d dialog elemt
    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal();
    } else {
        addOrUpdateTaskBtn.innerText = "Add Task";

        reset();
    }
});

/*
    ds doesn't lead to d disappearance of d taskForm 
    but allows d user to return to d form
*/
cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

/*
    ds lead to d disappearance of d taskForm 
    and shows d Add New Task btn i.e goes back
    to d beginning of d app.
*/
discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();

    reset();
});

/*
    d event listener is on d form and not on 
    addOrUpdateTaskBtn within d form
*/
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addOrUpdateTask();
});

/*
localStorage example:

const myTaskArr = [
    { task: "Walk the Dog", date: "22-04-2022" },
    { task: "Read some books", date: "02-11-2023" },
    { task: "Watch football", date: "10-08-2021" },
];

// convert d arr to str
localStorage.setItem("modak", JSON.stringify(myTaskArr));

// retrive myTaskArr: ds won't yield d required format
const getTaskArr = localStorage.getItem("modak");
console.log(getTaskArr);

// retrive myTaskArr: yields d required format
const getTaskArrObj = JSON.parse(localStorage.getItem("modak"));
console.log(getTaskArrObj);

// delete an item from localStorate
localStorage.removeItem("modak");

const getTaskArrObj1 = JSON.parse(localStorage.getItem("modak"));
console.log(getTaskArrObj1);

// delete all items from localStorate
localStorage.clear();

const getTaskArrObj1 = JSON.parse(localStorage.getItem("modak"));
console.log(getTaskArrObj1);

Methods used with localStorage:

*/

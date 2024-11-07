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

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("form submitted");
});

const dataArrIndex = taskData.findIndex((item) => {
    item.id === currentTask.id;
});

const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
};

console.log(taskObj);

if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
}

console.log(taskData);

taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
        <div class='task' id=${id}>
            <p>
                <strong>Title:</strong> ${title}
            </p>

            <p>
                <strong>Date:</strong> ${date}
            </p>

            <p>
                <strong>Description:</strong> ${description}
            </p>
        </div>
    
    `;
});

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
// stops at 10: review 5- 10 again

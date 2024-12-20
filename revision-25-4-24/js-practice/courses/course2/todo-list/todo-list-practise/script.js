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

let currentTask = {};

/*
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

const taskData = myTaskArr;


Negated character class, ^: /[^A-Za-z0-9\-\s]/g
Matches anything that is not enclosed in the square brackets. 

You can specify a range of characters by using a hyphen, but 
if the hyphen appears as the first character after the ^ or 
the last character enclosed in the square brackets, it is 
taken as a literal hyphen to be included in the character 
class as a normal character. 

For example, [^abc] is the same as [^a-c]. They initially 
match "o" in "bacon" and "h" in "chop".
*/

const removeSpecialChars = (val) => {
    return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
};

const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";

    addOrUpdateTaskBtn.innerText = "Add Task";

    currentTask = {};

    taskForm.classList.toggle("hidden");
};

const addOrUpdateTask = () => {
    if (!titleInput.value.trim()) {
        alert("Please provide a title");

        return;
    }

    // store d todo list values in an obj
    const taskObj = {
        id: `${removeSpecialChars(titleInput.value)
            .toLowerCase()
            .split(" ")
            .join("-")}-${Date.now()}`,
        title: removeSpecialChars(titleInput.value),
        date: removeSpecialChars(dateInput.value),
        description: removeSpecialChars(descriptionInput.value),
    };

    const taskDataIndex = taskData.findIndex(
        (task) => task.id === currentTask.id
    );

    if (taskDataIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[taskDataIndex] = taskObj;
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

    buttonEl.parentElement.remove();

    taskData.splice(taskDataIndex, 1);

    localStorage.setItem("tasks", JSON.stringify(taskData));
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
        reset();
    }
});

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();

    reset();
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addOrUpdateTask();
});

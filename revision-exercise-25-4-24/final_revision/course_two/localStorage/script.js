/*
Diff btw .findIndex() & .indexOf():

indexOf and findIndex are both JavaScript array
methods used to find the position of an element,
but they differ in how they determine the match.

indexOf():
This method searches for a specific value directly
within the array, using strict equality (===). It
returns the index of the first occurrence of the value,
or -1 if not found. It is suitable for arrays of
primitive types (strings, numbers, booleans) or
when you know the exact value you're searching
for.

findIndex():
This method takes a callback function as an argument.

The callback is executed for each element in the array
until it returns true, indicating a match. 

findIndex then returns the index of that element. If 
the callback never returns true, it returns -1.

This is useful for more complex search conditions, 
especially with arrays of objects or when you need 
to check properties of elements.


Feature                 indexOf()                       findIndex()
Search Type         Strict equality (===)               Callback function with custom logic
Use Case            Simple value lookup                 Complex conditions, object properties
Return Value        Index of the element or -1          Index of the first matching element or -1
Suitable for        Primitive types or known values     Objects or when specific conditions are needed


Examples:
indexOf():
const numbers = [10, 20, 30, 40, 50];

// Using indexOf to find a specific number
const index20 = numbers.indexOf(20); // Returns 1
const index60 = numbers.indexOf(60); // Returns -1



findIndex():
const objects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
    
// Using findIndex to find an object with a specific id
const indexBob = objects.findIndex(obj => obj.name === 'Bob'); // Returns 1
const indexDave = objects.findIndex(obj => obj.name === 'Dave'); // Returns -1



// wt does ds mean? ^
^ asserts that the current position is the start of input. 
$ asserts that the current position is the end of input. 

Both are assertions, so they don't consume any characters.


trim():
trim() removes whitespace from both ends of d string


Diff btw dse?
<button 
    onclick="editTask(${task.id})" 
    type="button" 
    class="btn"
>
    Edit
</button>

<button 
    onclick="editTask(this)" 
    type="button" 
    class="btn"
>
    Edit
</button>



Diff btw JSON.parse() and JSON.stringify

JSON.parse():
The JSON.parse() static method parses a JSON string, 
constructing the JavaScript value or object described 
by the string. 

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(json);
console.log(obj);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true


JSON.stringify():
JSON Stringify plays a significant role in the JSON 
concept. It's a function in JavaScript that converts
a JavaScript object into a JSON string. This method 
is commonly used to send data from the client side 
to a web server in a string format.


Diff btw .close() and .remove() ?



=============================================

// form
const taskForm = document.getElementById("task-form");

// btns:
// Add New Task Btn
const openTaskFormBtn = document.getElementById("open-task-form-btn");

// close form svg
const closeTaskFormBtn = document.getElementById("close-task-form-btn");

// Add Task or Update Task Btn; eventListener() was nt added to it but d form.
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");

// inputs
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const priceInput = document.getElementById("price-input");
const descriptionInput = document.getElementById("description-input");

// dialog
const dialogBox = document.getElementById("confirm-close-dialog");

// dialog btns
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");

// task container
const tasksContainer = document.getElementById("tasks-container");

// store all the tasks
const taskData = JSON.parse(localStorage.getItem("data")) || [];

// ds tracks the state when editing and discarding tasks
let currentTask = {}; //  populated task is edited

const removeSpecialChars = (val) => {
    return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
};

const addOrUpdateTask = () => {
    // if d entered value is a space(s), " "
    if (!titleInput.value.trim()) {
        alert("Please provide a title");

        return;
    }

    // cr8 a task obj
    const taskObj = {       
        id: `${
            removeSpecialChars(titleInput.value)
            .toLowerCase()
            .split(" ")
            .join("-")
            }-${Date.now()}`,
            
        title: removeSpecialChars(titleInput.value),
        date: dateInput.value,
        price: removeSpecialChars(priceInput.value),
        description: removeSpecialChars(descriptionInput.value),
    };

    // get d index of d task to be updated
    const currentTaskIndex = taskData.findIndex(
        (task) => task.id === currentTask.id
    );

    // If d task does nt exist, currentTaskIndex will return -1
    if (currentTaskIndex === -1) {
        // new task will be place as d 1st task
        taskData.unshift(taskObj);
    } else {
        // if dre is a current Task, ds mks d edit possible
        taskData[currentTaskIndex] = taskObj;
    }

    localStorage.setItem("data", JSON.stringify(taskData));

    // Update UI
    updateTaskContainer();

    reset();
};

// update UI
const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";

    taskData.forEach(({ id, title, date, price, description }) => {
        tasksContainer.innerHTML += `
            <div class="task" id="${id}">
                <p><strong>Title:</strong> ${title}</p>

                <p><strong>Date:</strong> ${date}</p>

                <p><strong>Price:</strong> ${price * 5}</p>
                
                <p><strong>Description:</strong> ${description}</p> 

                <button
                    onclick="editTask(this)"
                    type="button"
                    class="btn"
                >
                    Edit
                </button>

                <button
                    onclick="deleteTask(this)"
                    type="button"
                    class="btn"
                >
                    Delete
                </button>
            </div>
        `;
    });
};

const reset = () => {
    // d form 4: title, date, description inputs

    addOrUpdateTaskBtn.textContent = "Add Task";

    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";

    taskForm.classList.toggle("hidden");

    currentTask = {}; // Y?
};

const editTask = (buttonEl) => {
    // get d index using btn ppties
    const currentTaskIndex = taskData.findIndex(
        (task) => task.id === buttonEl.parentElement.id
    );

    currentTask = taskData[currentTaskIndex];

    // update every other things except d id
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    priceInput.value = currentTask.price;
    descriptionInput.value = currentTask.description;

    // updateUI
    addOrUpdateTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");
};

// getting task id using filter()
// const currentTaskIndex = taskData.filter(
//     (task) => task.id === buttonEl.parentElement.id
// );

const deleteTask = (buttonEl) => {
    // get d index using btn ppties
    const currentTaskIndex = taskData.findIndex(
        (task) => task.id === buttonEl.parentElement.id
    );

    // console.log(buttonEl.parentElement.id); // returns an id

    // remove ds ppties and update d UI
    buttonEl.parentElement.remove();

    taskData.splice(currentTaskIndex, 1);

    localStorage.setItem("data", JSON.stringify(taskData));
};

// show d tasks if dre are any at d begining of opening d app
if (taskData.length) {
    updateTaskContainer();
}

// btns:
openTaskFormBtn.addEventListener("click", () => {
    // Add New Task
    taskForm.classList.remove("hidden");

    // taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
    const formInputContainValues =
        titleInput.value ||
        dateInput.value ||
        priceInput.value ||
        descriptionInput.value;

    // wn d value changes due to edit
    const formInputValuesUpdated =
        titleInput.value !== currentTask.title ||
        dateInput.value !== currentTask.date ||
        priceInput.value !== currentTask.price ||
        descriptionInput.value !== currentTask.description;

    // d only reason d form will not close is if dse,
    // formInputContainValues && formInputValuesUpdated, r true
    if (formInputContainValues && formInputValuesUpdated) {
        dialogBox.showModal();
    } else {
        reset();
    }
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addOrUpdateTask();
});

cancelBtn.addEventListener("click", dialogBox.close());

discardBtn.addEventListener("click", () => {
    // If we r to discard, d dialog box must
    // disappear and also reset d form

    dialogBox.close();

    reset();
});



Revision: Start reading from the top

*/

// form
const taskForm = document.getElementById("task-form");

// btns
const addNewTask = document.getElementById("open-task-form-btn");
const closeBtn = document.getElementById("close-task-form-btn");

const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");

const addTaskBtn = document.getElementById("add-or-update-task-btn");

// inputs
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const priceInput = document.getElementById("price-input");
const descriptionInput = document.getElementById("description-input");

// dialog
const dialogBox = document.getElementById("confirm-close-dialog");

const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");

// task container
const tasksContainer = document.getElementById("tasks-container");

const tasks = JSON.parse(localStorage.getItem("addedTasks")) || [];
let currentTask = {};

addNewTask.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

const removeSpecialChars = (str) => {
    const regex = /[^A-Za-z0-9\-\s]/g;

    return str.trim().replace(regex, "");
};

const addOrUpdateTask = () => {
    if (!titleInput.value.trim()) {
        alert("Please provide a title");

        return;
    }

    // cr8 an obj dt rep a new task
    const taskObj = {
        id: `${removeSpecialChars(titleInput.value)
            .toLowerCase()
            .split(" ")
            .join("-")}-${Date.now()}`,

        title: removeSpecialChars(titleInput.value),
        date: removeSpecialChars(dateInput.value),
        price: removeSpecialChars(priceInput.value),
        description: removeSpecialChars(descriptionInput.value),
    };

    // find d index of d task clicked or newly created
    const taskIndex = tasks //
        .findIndex((task) => task.id === currentTask.id);

    // ds is either adding a new task or updating an
    // existing task
    if (taskIndex === -1) {
        // add a new task
        tasks.unshift(taskObj);
    } else {
        // update an existing task
        tasks[taskIndex] = taskObj;
    }

    localStorage.setItem("addedTasks", JSON.stringify(tasks));

    // once tasks is populated, update d UI
    loadTasksUI();
    reset();
};

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addOrUpdateTask();
});

const loadTasksUI = () => {
    tasksContainer.innerHTML = ``;

    tasks.map(({ id, title, date, price, description }) => {
        tasksContainer.innerHTML += `
                <div class="task" id="${id}">

                    <p><strong>Title: </strong> ${title}</p>

                    <p><strong>Date: </strong> ${date}</p>

                    <button 
                        onclick="minusPrice(this)" 
                        class="btn"
                    >
                        -
                    </button>

                    <span>
                        <strong>Price: </strong>

                        <span id="${id}-${date}">    
                            ${price}
                        </span>
                    </span>
                    
                    <button 
                        onclick="plusPrice(this)" 
                        
                        class="btn"
                    >
                        +
                    </button>
                   
                    <p><strong>Description: </strong>${description}</p>

                    <button 
                        onclick="editTask(this)" 
                        id="${id}" 
                        class="btn"
                    >
                        Edit
                    </button>
                    
                    <button 
                        onclick="deleteTask(this)" 
                        id="${id}" 
                        class="btn"
                    >
                        Delete
                    </button>
                </div>
        `;
    });
};

// if dre r existing task, load up
if (tasks.length) {
    loadTasksUI();
}

// reset() was called in: addOrUpdateTask(),
// closeBtn addEventListener, discardBtn
const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";

    taskForm.classList.toggle("hidden");

    addTaskBtn.textContent = "Add Task";

    // incase dre is a currentTask revert to empty obj
    // to mk room for a new currentTask
    currentTask = {};
};

const editTask = (btnEl) => {
    const currentTaskIndex = tasks.findIndex(
        (task) => task.id === btnEl.parentElement.id
    );

    currentTask = tasks[currentTaskIndex];

    // ds helps update d form with currentTask values
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    priceInput.value = currentTask.price;
    descriptionInput.value = currentTask.description;

    // d same btn in Add Task Btn but change text
    addTaskBtn.textContent = "Update Task";

    taskForm.classList.toggle("hidden");
};

const deleteTask = (btnEl) => {
    const currentTaskIndex = tasks.findIndex(
        (task) => task.id === btnEl.parentElement.id
    );

    tasks.splice(currentTaskIndex, 1);
    localStorage.setItem("addedTasks", JSON.stringify(tasks));

    // remove it from the root file and d UI.
    btnEl.parentElement.remove();
};

closeBtn.addEventListener("click", () => {
    const formInputContainValues =
        titleInput.value ||
        dateInput.value ||
        priceInput.value ||
        descriptionInput.value;

    const formInputValuesUpdated =
        titleInput.value !== currentTask.title ||
        dateInput.value !== currentTask.date ||
        priceInput.value !== currentTask.price ||
        descriptionInput.value !== currentTask.description;

    // conditions to show d dialog box r: if d inputs av values
    // or if d values has changed/updated
    if (formInputContainValues && formInputValuesUpdated) {
        dialogBox.showModal();
    } else {
        reset();
    }
});

// do nt close form during update
cancelBtn.addEventListener("click", () => {
    dialogBox.close();
});

// close form even if dre is/r update
discardBtn.addEventListener("click", () => {
    dialogBox.close();

    reset();
});

// **************************************

// Personal Addn
const minusPrice = (btnEl) => {
    const getTaskIndex = tasks.findIndex(
        (task) => task.id === btnEl.parentElement.id
    );

    const currentTask = tasks[getTaskIndex];

    const costEl = document.getElementById(
        `${currentTask.id}-${currentTask.date}`
    );

    // convert d currentTask price to Number 4rm String
    let priceValue = Number(currentTask.price);

    // d concitionfor update
    if (costEl.id === `${currentTask.id}-${currentTask.date}`) {
        priceValue--;
    }

    costEl.textContent = priceValue;

    // ds helps update d priceValue as it decreases. ds is called
    // reassigning updated price, priceValue, to currentTask price
    currentTask.price = priceValue;

    console.log(priceValue);
};

const plusPrice = (btnEl) => {
    const getTaskIndex = tasks.findIndex(
        (task) => task.id === btnEl.parentElement.id
    );

    const currentTask = tasks[getTaskIndex];

    const costEl = document.getElementById(
        `${currentTask.id}-${currentTask.date}`
    );

    // convert d currentTask price to Number 4rm String
    let priceValue = Number(currentTask.price);

    // d concitionfor update
    if (costEl.id === `${currentTask.id}-${currentTask.date}`) {
        priceValue++;
    }

    costEl.textContent = priceValue;

    // ds helps update d priceValue as it increases
    currentTask.price = priceValue;

    console.log(priceValue);
};

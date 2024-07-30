const currentDateParagraph = document.getElementById("current-date");

// ds is d select elemt
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;

// const newYear = date.getUTCFullYear

console.log(formattedDate);

dateOptionsSelectElement.addEventListener("change", () => {
    console.log(dateOptionsSelectElement.value);
});

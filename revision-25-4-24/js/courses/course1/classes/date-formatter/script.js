const selectDate = document.getElementById("date-format");

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const date = new Date();

const day = date.getDate();
const nameOfDay = weekdays[date.getDay()];
const month = date.getMonth() + 1;
const year = date.getFullYear();

const hour = date.getHours();
const minutes = date.getMinutes();

const currentDate = `${nameOfDay}: ${day}-${month}-${year}`;
console.log(currentDate);

selectDate.addEventListener("change", function () {
    console.log(selectDate.value);
});

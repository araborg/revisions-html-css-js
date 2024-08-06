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
const month = date.getMonth();
const year = date.getFullYear();

console.log(day, nameOfDay, month, year);

selectDate.addEventListener("change", function () {
    console.log(selectDate.value);
});

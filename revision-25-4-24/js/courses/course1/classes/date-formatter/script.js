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
const month = date.getDay();

console.log(day, month);

selectDate.addEventListener("change", function () {
    console.log(selectDate.value);
});

const selectDate = document.getElementById("date-format");
const currentDateClass = document.querySelector(".current-date");

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

// `${nameOfDay}: ${day}-${month}-${year}`;
const currentDate = `${day}-${month}-${year}`;
const currentDateHM = `${nameOfDay}: ${day}-${month}-${year} ${hour} Hours ${minutes} Minutes`;

const splitDate = currentDate.split("-").reverse().join("-");
console.log(splitDate);

selectDate.addEventListener("change", function () {
    console.log(selectDate.value);

    switch (selectDate.value) {
        case "yyyy-mm-dd":
            // currentDate.split("-");
            currentDateClass.textContent = splitDate;
            break;
        case "dd-mm-yyyy":
            currentDateClass.textContent = currentDate;
            break;
        case "dd-mm-yyyy-h-m":
            console.log("nothing");
    }
});

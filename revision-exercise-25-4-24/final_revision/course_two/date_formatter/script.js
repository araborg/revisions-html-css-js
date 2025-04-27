const dateOptionsSelectElement = document.getElementById("date-options");
const currentDateParagraph = document.getElementById("current-date");

// console.log(dateOptionsSelectElement, currentDateParagraph);

// date ppties and methods
// days
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

// time
const hours = date.getHours();
const minutes = date.getMinutes();

//

console.log(date, day, month, year, hours, minutes);

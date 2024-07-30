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

// const newYear = date.getUTCFullYear

// console.log(formattedDate);

const format = formattedDate.split("-").reverse().join("");

// console.log(format);

dateOptionsSelectElement.addEventListener("change", () => {
    // console.log(dateOptionsSelectElement.value);
    currentDateParagraph.textContent = formattedDate;

    switch (dateOptionsSelectElement.value) {
    }
});

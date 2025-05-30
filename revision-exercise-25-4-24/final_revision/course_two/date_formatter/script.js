// const dateOptionsSelectElement = document.getElementById("date-options");
// const currentDateParagraph = document.getElementById("current-date");

// // date
// const date = new Date();

// // days
// const day = date.getDate();
// const month = date.getMonth() + 1;
// const year = date.getFullYear();

// // time
// const hours = date.getHours();
// const minutes = date.getMinutes();

// const formattedDate = `${day}-${month}-${year}`;

// dateOptionsSelectElement.addEventListener("change", () => {
//     console.log(dateOptionsSelectElement.value);

//     console.log(typeof dateOptionsSelectElement.value);

//     switch (dateOptionsSelectElement.value) {
//         case "yyyy-mm-dd":
//             currentDateParagraph.textContent = formattedDate
//                 .split("-")
//                 .reverse()
//                 .join("-");
//             break;

//         case "mm-dd-yyyy-h-mm":
//             currentDateParagraph.textContent = `${month}-${day}-${year}-${hours}-${minutes}`;
//             break;

//         default:
//             currentDateParagraph.textContent = formattedDate;
//     }
// });

// Revisn:
const dateOptions = document.getElementById("date-options");
const currentDate = document.getElementById("current-date");

// date
const date = new Date();

// date methods
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

// time methods
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const formattedDate = `${day}-${month}-${year}`;

dateOptions.addEventListener("change", () => {
    switch (dateOptions.value) {
        case "dd-mm-yyyy":
            currentDate.textContent = formattedDate;
            break;

        case "yyyy-mm-dd":
            currentDate.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");
            break;

        case "mm-dd-yyyy-h-mm":
            currentDate.textContent = `${month}-${day}-${year}-${hours}-${minutes}`;
            break;

        default:
            currentDate.textContent = `${month}-${day}-${year}-${hours}-${minutes}-${seconds}`;
    }
});

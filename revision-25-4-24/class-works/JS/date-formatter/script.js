const currentDateParagraph = document.getElementById("current-date");

// ds is d select elemt
const dateOptionsSelectElement = document.getElementById("date-options");

// current date: ds serves like an API
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;

const year = date.getFullYear();

const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
const formattedDateHM = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;

dateOptionsSelectElement.addEventListener("change", () => {
    console.log(dateOptionsSelectElement.value);

    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");

            break;

        case "mm-dd-yyyy-h-mm":
            // currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            currentDateParagraph.textContent = formattedDateHM;
            break;

        default:
            currentDateParagraph.textContent = formattedDate;
    }
});

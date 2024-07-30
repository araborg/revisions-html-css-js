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

const format = formattedDate.split("-").reverse();

console.log(format);

dateOptionsSelectElement.addEventListener("change", () => {
    console.log(dateOptionsSelectElement.value);

    switch (dateOptionsSelectElement.value) {
    }
});

const greeting = "Hello World";
const splitGreet = greeting.split();
console.log(splitGreet);

const exampleSentence = "selur pmaCedoCeerf".split("");
console.log(exampleSentence);

const str = "hello";
const str2 = str.split(" ");
console.log(str2);

console.log("reverse".reverse());

["e", "s", "r", "e", "v", "e", "r"];

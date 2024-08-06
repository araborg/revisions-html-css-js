const selectDate = document.getElementById("date-format");

const date = new Date();
console.log(date);

selectDate.addEventListener("change", function () {
    console.log(selectDate.value);
});

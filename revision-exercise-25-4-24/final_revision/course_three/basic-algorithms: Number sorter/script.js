const sortBtn = document.getElementById("sort");
const valuesDropdown = document.getElementsByClassName("values-dropdown");

console.log(valuesDropdown);
const sortValue = (e) => {
    e.preventDefault();
};

sortBtn.addEventListener("click", sortValue);

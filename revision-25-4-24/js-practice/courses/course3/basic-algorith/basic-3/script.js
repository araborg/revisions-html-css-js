const sortBtn = document.getElementById("sort");

sortBtn.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e);

    const values = document.getElementsByClassName("values-dropdown");

    console.log(values);
});

const sortNum = (array) => {};

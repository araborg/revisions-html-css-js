const sortBtn = document.getElementById("sort");

sortBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const values = [...document.getElementsByClassName("values-dropdown")].map(
        (el) => el
    );
    console.log(values);
});

const sortNum = (array) => {};

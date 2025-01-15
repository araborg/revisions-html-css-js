const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);

    const numbers = array
        .map((el) => Number(el))
        // .filter((el) => !isNaN(el) !== NaN);
        .filter((el) => !isNaN(el));

    console.log(getMean(numbers), numbers);
};

const getMean = (array) => {
    const sum = array.reduce((accu, el) => {
        return accu + el;
    }, 0);

    const mean = sum / array.length;

    return sum;
};

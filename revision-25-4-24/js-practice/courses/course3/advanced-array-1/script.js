const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);

    const numbers = array
        .map((el) => Number(el))
        // .filter((el) => !isNaN(el) !== NaN);
        .filter((el) => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    // console.log(median);

    document.querySelector("#mean").textContent = mean;
};

const getMean = (array) => {
    const sum = array.reduce((accu, el) => accu + el, 0);

    const mean = sum / array.length;

    return mean;
};

const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);

    // console.log(sorted);
    // return sorted;
};

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];

const isEven = testArr2.length % 2 === 0;
console.log(isEven);

console.log(Math.round(testArr1.length / 2));

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);

    const numbers = array
        .map((el) => Number(el))
        // .filter((el) => !isNaN(el) !== NaN);
        .filter((el) => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent =
        standardDeviation;
};

const getMean = (array) => {
    const sum = array.reduce((accu, el) => accu + el, 0);

    const mean = sum / array.length;

    return mean;
};

const getMedian = (array) => {
    const sorted = array.slice().sort((a, b) => a - b);

    const median =
        array.length % 2 === 0
            ? getMean([sorted[array.length / 2 - 1], sorted[array.length / 2]])
            : getMean([sorted[Math.floor(array.length / 2)]]);

    return median;
};

const getMode = (array) => {
    const counts = {};

    // array.forEach((el) => {
    //     if (counts[el]) {
    //         counts[el] += 1;
    //     } else {
    //         counts[el] = 1;
    //     }
    // });

    array.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1;
    });

    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }

    const highest = Object.keys(counts).sort(
        (a, b) => counts[b] - counts[a]
    )[0];

    const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
    );

    return mode.join(", ");
};

const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
};

const getVariance = (array) => {
    const mean = getMean(array);

    const variance =
        array.reduce((accu, el) => {
            const difference = el - mean;

            const squared = difference ** 2;

            return accu + squared;
        }, 0) / array.length;

    return variance;
};

const getStandardDeviation = (array) => {
    const variance = getVariance(array);

    // const standardDeviation = Math.pow(variance, 1 / 2);

    const standardDeviation = Math.sqrt(variance);

    return standardDeviation;
};

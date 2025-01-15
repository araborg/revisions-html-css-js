const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);

    const numbers = array
        .map((el) => Number(el))
        // .filter((el) => !isNaN(el) !== NaN);
        .filter((el) => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);

    // console.log(getMode(numbers));
    getMode(numbers);

    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
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

    // console.log(Object.keys(counts));
    // console.log(counts[highest], highest);
    // console.log(counts);

    const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
    );

    console.log(mode);

    return array;
};

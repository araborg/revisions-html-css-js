const calculate = () => {
    const numbers = document.querySelector("#numbers").value;

    const value = numbers.split(/,\s*/g);

    const modNum = value
        .map((el) => Number(el))
        .filter((el) => !isNaN(el))
        .sort((a, b) => a - b);

    const mean = getMean(modNum);

    console.log(mean);
};

// mean
const getMean = (array) => {
    const mean = array.reduce((accu, el) => accu + el, 0) / array.length;

    return mean;
};

// median

// mode

// range

// variance

// standard deviation

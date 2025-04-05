const getAverage = (scores) => {
    // console.log(scores);

    const sum = 0;

    for (let score of scores) {
        sum += score;
    }

    return sum;
};

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89, 37]));

// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

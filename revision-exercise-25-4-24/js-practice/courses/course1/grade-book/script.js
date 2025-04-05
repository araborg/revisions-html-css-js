const getAverage = (scores) => {
    // console.log(scores);

    let sum = 0;

    for (let score of scores) {
        sum += score;
    }

    return sum / scores.length;
};

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89, 37]));

// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

const getGrade = (score) => {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    }
};

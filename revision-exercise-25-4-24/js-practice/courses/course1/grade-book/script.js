const getAverage = (scores) => {
    let sum = 0;

    for (let score of scores) {
        sum += score;
    }

    return sum / scores.length;
};

const getGrade = (score) => {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
};

const hasPassingGrade = (score) => {
    return getGrade(score) !== "F";
};

// const whatGrade = (grades) => {
//     let value = "";

//     for (let grade of grades) {
//         value += getGrade(grade) + "\n";
//     }

//     return value;
// };

// const grades = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89, 37];

// console.log(whatGrade(grades));

function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);

    if (hasPassingGrade(studentScore)) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

// personal advancement
const individualGrade = (scores) => {
    let grade = "";
    let passed = true;

    for (let score of scores) {
        grade = getGrade(score) + "\n";

        if (score < 60) {
            passed = false;
        }
    }

    // return grade;
    return `Your grade: ${grade}. You ${
        passed ? "passed" : "failed"
    } the course.`;
};

const grades = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89, 37];

console.log(individualGrade(grades));

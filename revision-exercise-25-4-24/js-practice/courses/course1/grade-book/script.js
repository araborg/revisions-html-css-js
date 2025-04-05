/*
Note:
Wn adding numbers together, a new variable
shd be required to hold dt sum of number and
ds can be declared with a value e.g let sum = 0

for...of loop:


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

// ============================



    const whatGrade = (grades) => {
        let value = "";

        for (let grade of grades) {
            value += getGrade(grade) + "\n";
        }

        return value;
    };

    const grades = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89, 37];

    console.log(whatGrade(grades));



// ============================

function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);

    if (hasPassingGrade(studentScore)) {
        // console.log(hasPassingGrade(studentScore)); // true

        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        // console.log(hasPassingGrade(studentScore)); // false

        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

// personal advancement
const individualGrade = (scores) => {
    let outcome = "";

    for (let score of scores) {
        // scores.forEach((score) => {
        let passed;

        let grade = getGrade(score);

        // if (score < 60) {
        //     passed = false;
        // } else {
        //     passed = true;
        // }

        passed = score < 60 ? true : false;

        outcome +=
            `With the score of: ${score}. Your grade is: ${grade}. You ${
                passed ? "failed" : "passed"
            } the course.` + "\n";

        // });
    }

    return outcome;
};

const grades = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89, 37];
console.log(individualGrade(grades));

*/

// Revision:

const grades = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89, 37];

const getAverage = (grades) => {
    let sum = 0;

    for (let grade of grades) {
        sum = sum + grade;
    }

    // let sum = grades.reduce((acc, grade) => {
    //     return acc + grade;
    // }, 0);

    return Math.round(sum / grades.length);
};

// console.log(getAverage(grades));

const getGrade = (grade) => {
    if (grade === 100) {
        return "A++";
    } else if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
};

const knowGrades = (grade) => {
    let placeholder = "";

    for (let grade of grades) {
        placeholder = placeholder + "\n" + getGrade(grade);
    }

    return placeholder;
};

console.log(knowGrades(grades));

const hasPassingGrade = (grade) => {
    return getGrade(grade) !== "F";
};

const reportGrade = (grades, studentGrade) => {
    const grade = getGrade(studentGrade);
    const average = getAverage(grades);

    if (hasPassingGrade(studentGrade)) {
        return `Your grade: ${studentGrade}. Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Your grade: ${studentGrade}. Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
};

console.log(reportGrade([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(reportGrade([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

const individualGrade = (grades) => {
    let result = "";

    for (let grade of grades) {
        const studentGrade = getGrade(grade);

        result +=
            `With the score of: ${grade}. Your grade is: ${studentGrade}. You ${
                hasPassingGrade(grade) ? "passed" : "failed"
            } the course.` + "\n";
    }

    return result;
};

console.log(individualGrade(grades));

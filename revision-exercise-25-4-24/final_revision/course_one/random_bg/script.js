const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#4A5A",
    "#2F4F4F",
    "#0E4B5A",
    "#0E4B",
    "#36454F",
    "#2C3E50",
    "#800020",
];

function getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * darkColorsArr.length);

    return randomIndex;
}

function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];

    console.log(color);
}

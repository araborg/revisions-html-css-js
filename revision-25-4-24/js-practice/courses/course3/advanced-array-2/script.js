const calculate = () => {
    const numbers = document.querySelector("#numbers").value;

    const value = numbers.split(/,\s*/g);

    const modNum = value.map((el) => Number(el)).filter(el => !isNaN{el});

    console.log(modNum);
};

// mean

// median

// mode

// range

// variance

// standard deviation

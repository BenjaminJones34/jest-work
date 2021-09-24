function notNull(data) {
    return data == null ? "error: is null" : data;
};

let truthy = true;

let notFalsy = true;

function newObject() {
     return {
        name: "Random",
        age: 20,
    };
};

arr = ["abcdef", "abcde", "abcdefg"];

function sixCharacters(arr) {
    let returnArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 6) {
            returnArr.push(arr[i]);
        };
    } return returnArr;
};


function numToString(data) {
    return data.toString();
};

function planet(num) {
    switch(num) {
        case 1:
            return "Mercury";
        case 2:
            return "Venus";
        case 3:
            return "Earth";
        case 4:
            return "Mars";
        case 5:
            return "Jupiter";
        case 6:
            return "Saturn";
        case 7:
            return "Uranus";
        case 8:
            return "Neptune";
        case 9:
            return "Pluto"; //#justiceforPluto
    };
};

function present(students) {
    return students.filter(x => x == true).length;
};

function squareDigi(num) {
    return parseInt(num.toString().split("").map(x => x * x).join(""));
};

function century(num) { //think slides is wrong on this one
    if (num.toString().length < 3) {
        return 1;
    } else {
        return parseInt(num.toString().substr(0, num.toString().length - 2)) + 1;
    }
};

function binary(arr) {
    let newArr = arr.map((num, index) => num * 2 ** (arr.length - index - 1));
    let total = 0;
    for (let i = 0; i < newArr.length; i++) {
        total += newArr[i];
    };
    return total;
}

console.log(binary([0, 0, 0, 1]))

module.exports = {
    notNull,
    truthy,
    notFalsy,
    newObject,
    arr,
    sixCharacters,
    numToString,
    planet,
    present,
    squareDigi,
    century,
    binary,
}
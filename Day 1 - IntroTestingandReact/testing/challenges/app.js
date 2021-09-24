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



module.exports = {
    notNull,
    truthy,
    notFalsy,
    newObject,
    arr,
    sixCharacters,
    numToString,
    planet,
}
const input = prompt('What is your name?');
const names = input.split(' ');

function capitalize(word) {
    if (!word) return
    word = word.trim();
    if (word.length === 1) {
        return word.toUpperCase();
    }
    if (word.length > 1){
        const firstLetter = word.slice(0, 1).toUpperCase();
        const remLetters = word.slice(1).toLowerCase();
        return firstLetter + remLetters;
    }
}

function setNameCase (array) {
    const arrLength = array.length;
    let nameArray = [];
    for (i = 0; i < arrLength; i++) {
        myArray.push(capitalize(array[i]))
    }
    return nameArray.join(' ');
}

// test code
// setNameCase(names);
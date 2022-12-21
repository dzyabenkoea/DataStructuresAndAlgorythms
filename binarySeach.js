
function binSearch(sortedArray, targetValue) {
    const middleIndex = Math.floor(sortedArray.length / 2);
    const middleValue = sortedArray[middleIndex];

    if (middleValue === targetValue)
        return middleIndex;

    if (sortedArray.length === 1) {
        return -1;
    }

    let leftHalf = sortedArray.splice(0, middleIndex);
    let rightHalf = sortedArray;

    if (targetValue > middleValue) {
        return binSearch(rightHalf, targetValue);
    } else {
        return binSearch(leftHalf, targetValue);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const searchValue = 2;

const timerStart = new Date();
const searchResult = binSearch(array, searchValue);
const timerEnd = new Date();
console.log(`Index of value "${searchValue}" is: ${searchResult}`);
console.log(`Time: ${timerEnd - timerStart}`);

let array = [5, 1, 3, 7, 2, 4, 6]


function min(array) {
    let min = undefined;
    array.forEach(el => {
        if (min === undefined)
            min = el;
        else {
            if (el !== undefined && el < min)
                min = el;
        }
    });
    return min;
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    let copy = [...array];
    let left = copy.splice(0, array.length / 2);
    let right = copy;

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    let bothPartsArray = Array.prototype.concat.call(leftSorted, rightSorted);
    let concatLength = bothPartsArray.length;
    let sorted = [];
    for (let i = 0; i < concatLength; i++) {
        let minValue = min(bothPartsArray);
        let indexOfMin = bothPartsArray.indexOf(minValue);
        bothPartsArray[indexOfMin] = undefined;

        sorted.push(minValue);
    }
    return sorted;
}


console.log(mergeSort(array));
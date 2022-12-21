
let TARGET_VALUE = 16;

function fib(value) {
    if (value === 0 || value === 1)
        return value;
    return fib(value - 1) + fib(value - 2);
}

function fibTailRecursive(value, accumulatedValue) {
    if (value === 0 || value === 1)
        return value;
    return fib(value - 1) + fib(value - 2);
}

function fibIterative(value) {
    
    // generating

    // so we have...
    // 0
    // add to array
    // [0]
    // 1
    // [0,1]
    // get sum of the two - 1
    // [0,1,1]
    // get sum of the two - 2
    // [0,1,1,2]
    // get sum of the two - 3
    // [0,1,1,2,3]

    let result = [];
    let prevSum = 0;

    let first = 0, second = 0;

    for (let i = 0; i < value; i++) {

        if (i === 0 || i === 1) {
            result.push(i);
            prevSum = i;
            continue;
        }

        if (first === 0 && second === 0) {
            first = result[result.length - 2];
            seond = result[result.length - 1];
        }

        let sumOfLastTwoValues = first + second;
        result.push(sumOfLastTwoValues);

        //   second
        //     |
        // 1,1,3,<new>
        //   |
        // first

        //      second
        //         |
        // 1,1,3,<new>
        //     |
        //   first

        first = second;
        second = sumOfLastTwoValues;
    }
    return result;
}

// console.log(fib(TARGET_VALUE));
console.log(fibIterative(8));
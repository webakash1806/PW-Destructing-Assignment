function extract(arr1) {
    const [first, second, ...rest] = arr1;
    const last = rest.pop()
    return [first, second, last];
}

const inpArr = [1, 2, 3, 4, 5];
console.log(extract(inpArr));





// or we can do by this way



// function randomElements(...arrNum) {
//     let first = arrNum[0]
//     console.log(`First Number is ${first}`);
//     let second = arrNum[1]
//     console.log(`Second Number is ${second}`);
//     let last = arrNum[arrNum.length - 1]
//     console.log(`Last Number is ${last}`);

// }

// randomElements(1, 2, 3, 4, 5)
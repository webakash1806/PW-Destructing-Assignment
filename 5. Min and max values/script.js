function maxMin(arrNum) {
    let max = Math.max(...arrNum)
    let min = Math.min(...arrNum)
    return { max, min }
}

const arrNum = [1, 5, 3, 6, 4, 9, 8, 7]
console.log(maxMin(arrNum));
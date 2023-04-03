function uniqueItems() {
    let a = [1, 2, 3, 4, 2, 5, 6, 7, 8, 5, 6]
    let newItems = new Set(a)
    return newItems

}

console.log(uniqueItems());
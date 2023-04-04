function nameAndStreet(person) {
    let { name, address: { street } } = person
    return { name, street }
}

const person = {
    name: "Akash",
    age: 18,
    address: {
        street: "B8, Block B",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
}

console.log(nameAndStreet(person));
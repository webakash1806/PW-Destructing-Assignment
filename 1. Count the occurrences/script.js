function countWords(str) {
    const words = str.split(' ');
    const counts = new Map();

    const totalWords = words.length
    console.log(`Total Word is ${totalWords}`);

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        counts.set(word, (counts.get(word) || 0) + 1);
    }

    return counts;
}

console.log(countWords("hey how are you"));

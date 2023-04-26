
const sing = () => {
    let str = '';

    for (let i = 0; i < 10; i++) {
        if (i === 1) {
            str += 'let it be, let it be, let it be, let it be, '
        } else if (i === 2) {
            str += 'whisper words of wisdom,'
        } else if (i === 3) {
            str += ' let it be, let it be,'
        } else if (i === 4) {
            str += ' let it be, let it be, let it be,'
        } else if (i === 5) {
            str += ' there will be an answer,'
        } else if (i === 6) {
            str += ' let it be'
        }
    }

    return str
}

//Your code above ^^^

console.log(sing());
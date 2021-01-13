const keywords = require('./keywords')

const letterParser = (input, word) =>{
    const n = input.length
    let j = 0, match = 0
    for (let i=0; i<n; i++){
        let k = input[i]
        for (; j<word.length; j++){
            if (k === word[j]) {
                match++; j++; break;
            }
        }
    }
    return [n, word.length, match]
}

module.exports = letterParser
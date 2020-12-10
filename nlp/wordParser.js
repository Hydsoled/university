const keywords = require('./keywords')

const WordParser = class WordParser {
    getEntity(text) {
        let entity = {}
        entity.getInfo = this.getInfo(text)
        return entity
    }

    getInfo(text) {
        const textArr = text.split(" ")
        let arr = keywords.getInfo.find((word) => {
            for (let i = 0; i < textArr.length; i++){
                if (word === textArr[i]) {
                    return true
                }
            }
        });
        return !!arr;
    }
}

module.exports = {
    WordParser
}
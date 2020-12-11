const keywords = require('./keywords')

const WordParser = class WordParser {
    getEntity(text) {
        let entity = {}
        entity.getInfo = this.getInfo(text)
        entity.getBotName = this.getBotName(text)
        entity.getHello = this.getHello(text)
        entity.getGoodbye = this.getGoodbye(text)
        entity.smallTalk = !!(entity.getGoodbye || entity.getHello);
        return entity
    }

    getInfo(text) {
        const textArr = text.split(" ")
        let arr = keywords.getInfo.find((word) => {
            for (let i = 0; i < textArr.length; i++) {
                if (word === textArr[i]) {
                    return true
                }
            }
        });
        return !!arr;
    }

    getBotName(text) {
        const textArr = text.split(" ")
        let arr = keywords.getBotName.find((word) => {
            for (let i = 0; i < textArr.length; i++) {
                if (word === textArr[i]) {
                    return true
                }
            }
        });
        return !!arr;
    }

    getHello(text) {
        const textArr = text.split(" ")
        let arr = keywords.getHello.find((word) => {
            for (let i = 0; i < textArr.length; i++) {
                if (word === textArr[i].toLowerCase()) {
                    return true
                }
            }
        });
        return !!arr;
    }

    getGoodbye(text) {
        const textArr = text.split(" ")
        let arr = keywords.getGoodbye.find((word) => {
            for (let i = 0; i < textArr.length; i++) {
                if (word === textArr[i].toLowerCase() && textArr.length === 1) {
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
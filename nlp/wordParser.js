const keywords = require('./keywords')

const WordParser = class WordParser {
    getEntity(text) {
        let entity = {}
        entity.getHello = this.getHello(text)
        entity.getGoodbye = this.getGoodbye(text)
        entity.smallTalk = !!(entity.getGoodbye || entity.getHello)
        entity.getInfo = this.getInfo(text)
        entity.getAddress = this.getAddress(text)
        entity.getMenu = this.getMenu(text)
        entity.getWorkingTime = this.getWorkingTime(text)
        entity.getDelivery = this.getDelivery(text)
        return entity
    }

    deleteRepLetters(text){
        let str = text[0]
        let n = text.length
        for (let i = 1; i < n; i++){
            if (text[i]!==text[i-1]) str+=text[i]
        }
        return str
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
    getAddress(text) {
        const textArr = text.split(" ")
        let arr = keywords.getAddress.find((word) => {
            for (let i = 0; i < textArr.length; i++) {
                if (word === textArr[i].toLowerCase()) {
                    return true
                }
            }
        });
        return !!arr;
    }
    getMenu(text) {
        const textArr = text.split(" ")
        let arr = keywords.getMenu.find((word) => {
            for (let i = 0; i < textArr.length; i++) {
                if (word === textArr[i].toLowerCase()) {
                    return true
                }
            }
        });
        return !!arr;
    }
    getWorkingTime(text) {
        const textArr = text.split(" ")
        let arr = keywords.getWorkingTime.find((word) => {
            for (let i = 0; i < textArr.length; i++) {
                if (word === textArr[i].toLowerCase()) {
                    return true
                }
            }
        });
        return !!arr;
    }
    getDelivery(text) {
        const textArr = text.split(" ")
        let arr = keywords.getDelivery.find((word) => {
            for (let i = 0; i < textArr.length; i++) {
                if (word === textArr[i].toLowerCase()) {
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
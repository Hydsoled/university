const {send} = require('../utils/send')
const {WordParser} = require('../nlp/wordParser')

const Conversation = class Conversation {
    constructor(body) {
        this.body = body
    }

    createConversation() {
        if (!this.isPerson()) {
            return false
        }
        const text = this.body.message.text
        const wordParser = new WordParser()
        const entity = wordParser.getEntity(text)
        if (entity.getInfo === true) {
            this.send('რა გნებავთ?')
        } else {
            this.send('ვერ გავიგე რა მითხარი')
        }
    }

    send(text) {
        send(text, this.body.sender.id)
    }

    isPerson() {
        return !!(this.body.message && !this.body.message.is_echo);
    }
}
module.exports = {
    Conversation
}

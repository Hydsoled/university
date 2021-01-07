const {send} = require('../utils/send')
const {WordParser} = require('../nlp/wordParser')
const {controller} = require('../controller/controller')

const Conversation = class Conversation {
    constructor(body) {
        this.body = body
    }

    createConversation() {
        if (!this.isPerson()) {
            return false
        }
        const wordParser = new WordParser()
        const text = wordParser.deleteRepLetters(this.body.message.text)
        const entity = wordParser.getEntity(text)
        console.log(text)
        controller(this, entity)
    }

    send(text) {
        send(text, this.body.sender.id)
    }

    isPerson() {
        return !!( this.body.message && !this.body.message.is_echo );
    }
}
module.exports = {
    Conversation
}

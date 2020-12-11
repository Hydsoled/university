const {send} = require('../utils/send')
const {WordParser} = require('../nlp/wordParser')
const {controller} = require('../controller/controller')

const Conversation = class Conversation {
    constructor(body) {
        this.body = body
    }

    createConversation() {
        if (!this.isPerson() || !this.body.message || !this.body.message.text) {
            return false
        }
        const text = this.body.message.text
        console.log(text)
        const wordParser = new WordParser()
        const entity = wordParser.getEntity(text)
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

const {Conversation} = require('../controller/conversation')

const wit = (body) => {
    const convo = new Conversation(body)
    convo.createConversation()
}

module.exports = {wit}

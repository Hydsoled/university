const {Conversation} = require('../controller/conversation')

const wit = async (body) => {
    const convo = new Conversation(body)
    await convo.createConversation()
}

module.exports = {wit}

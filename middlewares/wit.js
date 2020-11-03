const conversation = require('../controller/conversation')

const wit = (body) => {
    conversation.body = body
    conversation.send('gamarjobat')
}

module.exports = {wit}

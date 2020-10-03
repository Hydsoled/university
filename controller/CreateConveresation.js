const {detectWords} = require('./witai')

let users = []
const CreateConversation = function (bot, message) {
    this.bot = bot
    this.bot.message = message
    return this.bot
}

const Communication = async (bot, message) => {
    const convo = CreateConversation(bot, message)
    convo.message.vars = users[message.user]
    await detectWords(convo)
}

module.exports = {CreateConversation, Communication}

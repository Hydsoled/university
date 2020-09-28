let users = []
const CreateConversation = function (bot, message) {
    this.bot = bot
    this.bot.message = message
    return this.bot
}

const Communication = async (bot, message) => {
    const convo = CreateConversation(bot, message)
    convo.message.vars = users[message.user]
    if (convo.message.vars) convo.message.vars++
    else convo.message.vars = 1
    users[message.user] = convo.message.vars
    await convo.say(convo.message.vars + 's')
}

module.exports = {CreateConversation, Communication}

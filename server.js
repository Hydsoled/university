const {FacebookAdapter} = require('botbuilder-adapter-facebook')
const {Botkit} = require('botkit')
const {CreateConversation} = require('./controller/CreateConveresation')
require('dotenv').config()
const adapter = new FacebookAdapter({
    verify_token: process.env.FACEBOOK_VERIFY_TOKEN,
    app_secret: process.env.FACEBOOK_APP_SECRET,
    access_token: process.env.FACEBOOK_ACCESS_TOKEN
})
const controller = new Botkit({
    adapter: adapter,
    webhook_uri: '/webhook'
})
controller.on('message', async (bot, message) => {
    const convo =await new CreateConversation(bot, message)
    await convo.bot.say('gamarjobat')
})
const detectWords = async (convo) => {
    console.log(convo.message.text)
    await convo.say('gamarjobat')
}
module.exports = {detectWords}
const {send} = require('../utils/send')

const conversation = {
    send: function (text) {
        if (this.body.message && !this.body.message.is_echo){
            console.log('shemovida')
            send(text, this.body.sender.id)
        }
    }
}
module.exports = conversation

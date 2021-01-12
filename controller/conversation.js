const {send} = require('../utils/send')
const {WordParser} = require('../nlp/wordParser')
const {controller} = require('../controller/controller')
const User = require('../models/user')

const Conversation = class Conversation {
    constructor(body) {
        this.body = body
    }

    async createConversation() {
        if (!this.isPerson()) {
            return false
        }
        const wordParser = new WordParser()
        let lastText
        const text = wordParser.deleteRepLetters(this.body.message.text)
        let user = await this.getUser(this.body.sender.id)
        if (user.length > 0){
            lastText = user[0].txt
            await this.updateUser(this.body.sender.id, text)
        }else {
            await this.insertUser(this.body.sender.id, text)
        }
        const entity = wordParser.getEntity(text)
        entity.lastText = lastText
        controller(this, entity)
    }

    send(text) {
        send(text, this.body.sender.id)
    }

    isPerson() {
        return !!(this.body.message && !this.body.message.is_echo);
    }

    getUser(userId) {
        return User.find({fb_id: userId}, (err, user) => {
            if (err) {
                console.log('error in getUser');
                return
            }
            return user
        })
    }
    updateUser(userId, text) {
        const query = { fb_id: userId };
        const update = { $set: { fb_id: userId, txt: text, updatedAt: new Date() }};
        return User.updateOne(query, update)
    }
    insertUser(userId, text) {
        return new User(
            { fb_id: userId, txt: text, createdAt: new Date(), updatedAt: new Date()}
        ).save((error)=>{
            if (error){
                console.log('error in insert data', error)
            }
        })
    }
}
module.exports = {
    Conversation
}

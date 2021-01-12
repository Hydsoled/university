const {smallTalks} = require('./smallTalks/smallTalks')
const {dontUnderstand} = require('./dontUnderstand/dontUnderstand')
const answers = require('../nlp/answers')
const controller = (body, entity) => {
    if (entity.smallTalk) {
        smallTalks(body, entity)
    }else if (entity.getAddress){
        body.send(answers.address)
    }else if (entity.getMenu){
        body.send(answers.menu)
    }else if (entity.getWorkingTime){
        body.send(answers.workingTime)
    }else if (entity.getDelivery){
        body.send(answers.delivery)
    }else {
        dontUnderstand(body, entity)
    }
}

module.exports = {
    controller
}
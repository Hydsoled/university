const {smallTalks} = require('./smallTalks/smallTalks')
const {dontUnderstand} = require('./dontUnderstand/dontUnderstand')
const controller = (body, entity) => {
    if (entity.smallTalk) {
        smallTalks(body, entity)
    } else if (entity.getBotName) {
        body.send("მე ვარ HYDSOLED Bot")
    } else {
        dontUnderstand(body, entity)
    }
}

module.exports = {
    controller
}
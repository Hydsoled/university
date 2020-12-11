const answers = require('../../nlp/answers')
const smallTalks = (body, entity) => {
    if (entity.getGoodbye) {
        body.send(answers.goodbye)
    }else if (entity.getHello){
        body.send(answers.hello)
    }
}

module.exports = {
    smallTalks
}
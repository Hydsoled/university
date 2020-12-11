const answers = require('../../nlp/answers')
const dontUnderstand = (body, entity) => {
    body.send(answers.doNotUnderstand)
}

module.exports = {
    dontUnderstand
}
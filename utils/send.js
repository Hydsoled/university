const request = require("request")

const send = function (text, id) {
    const data = {
        "recipient": {
            "id": `${id}`
        },
        "message": {
            "text": `${text}`
        }
    }
    request({
        url: `https://graph.facebook.com/v8.0/me/messages?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`,
        method: "POST",
        json: data
    }, (error, res) => {
        if (!error && res.statusCode === 200) {
            console.log('sent')
        }else {
            console.log('error in send.js')
        }
    })
}

module.exports = {send}

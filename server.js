const express = require('express')
const bodyParser = require('body-parser')
const {wit} = require('./middlewares/wit')
const app = express()
require('dotenv').config()
const VERIFY_TOKEN = process.env.FACEBOOK_VERIFY_TOKEN

app.use(bodyParser.json())
app.post('/webhook', async (req, res) => {
    wit(req.body.entry[0].messaging[0])
    res.end('ok')
})

app.get('/webhook', (req, res) => {
    if (req.query['hub.verify_token'] === VERIFY_TOKEN) {
        res.send(req.query['hub.challenge'])
    }
    res.send('error')
})

app.listen(4200, () => {
    console.log('server is running on port: ' + 4200)
})

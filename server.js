const express = require('express')
const { FacebookAdapter } = require('botbuilder-adapter-facebook')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT
const adapter = new FacebookAdapter({
    verify_token: process.env.FACEBOOK_VERIFY_TOKEN,
    app_secret: process.env.FACEBOOK_APP_SECRET,
    access_token: process.env.FACEBOOK_ACCESS_TOKEN
})

app.post('/api/messages', (req, res) => {

})

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})
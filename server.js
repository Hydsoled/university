const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('gamarjoba')
})

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})
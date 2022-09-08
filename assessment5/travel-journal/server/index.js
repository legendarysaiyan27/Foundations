require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')

app.use(express.static(__dirname + "/../public"))
app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)

app.get('/', (req, res) => {
    res.sendFile("index.html")
})

// COUNTRIES
 app.get('/countries', getCountries)

// CITIES
 app.post('/cities', createCity)
/app.get('/cities', getCities)
// app.delete('/cities/:id', deleteCity)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))
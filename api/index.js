// dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// import others
const moderatorRoute = require('./routes/moderatorRoute')
// import express
const app = express()

// middleware : any code that execute between auth and request on server
// will put it through a json
app.use(express.json())

// request / response / move on to the "next" middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes + path where it will process requests
// using this bit to define it in Postman
app.use('/api/moderator', moderatorRoute)

// connect to database
// mongoose
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Fonctionne, Dieu merci on est sauvé!')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('Vous êtes connecté sur radio:', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

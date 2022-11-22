// nodemon server.js
require ("dotenv").config()

const express = require ("express")
const mongoose = require ("mongoose")
const bedroomRoutes = require ("./routes/bedroomRoute")

// express app
const app = express()

// middlewares
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/bedrooms", bedroomRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then (() =>{
        console.log("Hello, your database is working, feel safe buddy! Listen to some:");
        app.listen(process.env.PORT, () => {
            console.log('Vous êtes connecté sur radio:', process.env.PORT)
          })
    })
    .catch((err) =>{
        console.log(err)
    })

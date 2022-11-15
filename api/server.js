// dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// import others
const userRoute = require("./routes/RouteUser");
// import express
const app = express();

// middleware : any code that execute between auth and request on server
// will put it through a json
app.use(express.json());
// request / response / move on to the "next" middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes + path where it will process requests
// using this bit to define it in Postman
app.use("/api/users", userRoute);

// connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listen for database
    console.log("Fonctionne, Dieu merci on est sauvé!");
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Vous êtes connecté sur radio:", process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error)
  })

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import authRoute from "./routes/auth.js"
import adminRoute from "./routes/admin.js"
import articleRoute from "./routes/article.js"
import articlepresseRoute from "./routes/articlepresse.js"
import chambreRoute from "./routes/chambre.js"
import dortoirRoute from "./routes/dortoir.js"
import campingRoute from "./routes/camping.js"

const app = express()
dotenv.config()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!")
})

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/admin", adminRoute)
app.use("/api/article", articleRoute)
app.use("/api/articlepresse", articlepresseRoute)
app.use("/api/chambre", chambreRoute)
app.use("/api/dortoir", dortoirRoute)
app.use("/api/camping", campingRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Un problème est survenu.";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
    connect()
  console.log("Connected to backend.")
})
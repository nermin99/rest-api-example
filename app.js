require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()
app.use(express.json())

const postsRoute = require("./routes/posts")

app.use("/posts", postsRoute)

app.get("/", (req, res) => {
  res.send("We are on home")
})

// connect db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true /* useUnifiedTopology: true */ },
  () => console.log("connected to DB!")
)

app.listen(3000)

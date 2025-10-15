const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const connectDb = require("./config/connectionDB")


const PORT = process.env.PORT || 3000
connectDb()
app.use(express.json())

app.get('/', (req , res) => {
    res.json({message: "hello"})
})


// app.use("/recipe", require("./routes/recipe"))
app.use("/recipe" , require("./routes/recipes"))

app.listen(PORT, (err)=> {
    console.log(`APP IS LISTENING ON PORT ${PORT} `)
})




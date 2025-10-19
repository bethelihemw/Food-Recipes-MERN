const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const cors = require('cors')
const connectDb = require("./config/connectionDB")
//gpt added
// const recipeRoutes = require('./routes/recipe');
// app.use('/recipe', recipeRoutes);



const PORT = process.env.PORT || 3000
connectDb()
app.use(express.json())

app.use(cors())

// app.get('/', (req , res) => {
//     res.json({message: "hello"})
// })
app.use('/',require("./routes/user"))

// app.use("/recipe", require("./routes/recipe"))
app.use("/recipe" , require("./routes/recipes"))

app.listen(PORT, (err)=> {
    console.log(`APP IS LISTENING ON PORT ${PORT} `)
})





//chop up the onion, the avocado the salad and th etomato and add them in the bowel then add 3 teaspoon of oil, and salt and 1 spoon of peper and acheto 
//salad, avocado , onion, salt, oil, tomato,peper,acheto
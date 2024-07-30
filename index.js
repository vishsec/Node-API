const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()


const productRoute = require('./routes/product.routes')


// node doesnt parse json, we need middlewares
app.use(express.json())
//if we want to enter in url encoded format
app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    res.status(200).send("API says HI...")
})


//routes 

app.use('/api/products', productRoute)

mongoose.connect(process.env.connection)
.then ( () => {
    console.log("Database connected...");
    app.listen(3005, () => {
        console.log("Server is running on 3005...")
    })
})
.catch(err => {
    console.log("errors:", err) 
})




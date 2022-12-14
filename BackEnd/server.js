require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bookmarkedRoutes = require("./routes/bookmarked")

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/db/bookmarked", bookmarkedRoutes)

mongoose.connect(process.env.MONGODB)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB and listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

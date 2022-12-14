require("dotenv").config()
const express = require("express")
const routes = require("./routes/videos")
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/videos", routes)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})

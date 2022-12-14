require("dotenv").config()
const express = require("express")
const bookmarkedRoutes = require("./routes/bookmarked")
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/bookmarked", bookmarkedRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})

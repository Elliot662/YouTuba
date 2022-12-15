const express = require("express")

const {
    addToBookmarked,
    getFromBookmarked,
    removeBookmarked
} = require("../controllers/videoControllers")

const router = express.Router()

router.get("/", getFromBookmarked)

router.post("/", addToBookmarked)

router.delete("/:id", removeBookmarked )

module.exports = router

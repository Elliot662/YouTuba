const express = require("express")

const {
    addToBookmarked,
    getFromBookmarked
} = require("../controllers/videoControllers")

const router = express.Router()

router.get("/", getFromBookmarked)

router.post("/", addToBookmarked)

router.delete("/:id", (req, res) => {
    res.json({message: "DELETE video from bookmarked list"})
})

module.exports = router
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({message: "View your bookmarked videos"})
})

router.post("/", (req, res) => {
    res.json({message: "Add a video"})
})

router.delete("/:id", (req, res) => {
    res.json({message: "Video removed from bookmarked list"})
})

module.exports = router
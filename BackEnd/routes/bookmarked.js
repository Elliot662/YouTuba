const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.json({message: "GET bookmarked videos"})
})

router.post("/", (req, res) => {
    res.json({message: "POST video to bookmarked list"})
})

router.delete("/:id", (req, res) => {
    res.json({message: "DELETE video from bookmarked list"})
})

module.exports = router
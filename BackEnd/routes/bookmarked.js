const express = require("express")
const Video = require("../models/videos")

const router = express.Router()

router.get("/", (req, res) => {
    res.json({message: "GET bookmarked videos"})
})

router.post("/", async (req, res) => {
    const {title, img} = req.body

    try{
        const video = await Video.create({title, img})
        res.status(200).json(video)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

router.delete("/:id", (req, res) => {
    res.json({message: "DELETE video from bookmarked list"})
})

module.exports = router
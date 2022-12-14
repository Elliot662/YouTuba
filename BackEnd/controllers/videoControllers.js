const Video = require("../models/videos")

const getFromBookmarked = async (req, res) => {
    const videos = await Video.find({}).sort({createdAt: -1})
    
    res.status(200).json(videos)
}

const addToBookmarked = async (req, res) => {
    const {title, imgUrl} = req.body

    try{
        const video = await Video.create({title, imgUrl})
        res.status(200).json(video)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}



module.exports = {
    addToBookmarked,
    getFromBookmarked
}
const { default: mongoose } = require("mongoose")
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

const removeBookmarked = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Video not found"})
    }

    const video = await Video.findOneAndDelete({_id: id})

    if(!video){
        return res.status(404).json({error: "Video not found"})
    }

    res.status(200).json(video)
}

module.exports = {
    addToBookmarked,
    getFromBookmarked,
    removeBookmarked
}
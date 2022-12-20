import React, { useState } from "react";
import "./HomePage.css"

const HomePage = ({info}) => {
    const [title, setTitle] = useState(info.snippet.title)
    const [imgUrl, setImgUrl] = useState(info.snippet.thumbnails.medium.url) 
    const [error, setError] = useState (null)

    const handleWatchLater1 = async (e) => {
        e.preventDefault()

        const video = {title, imgUrl}

        const response = await fetch("/db/bookmarked/", {
            method: "POST",
            body: JSON.stringify(video),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log("Video POSTed")
        }
    }

    return(
        <div className="videos">
            <h3>{info.snippet.title}</h3>
            <img src={info.snippet.thumbnails.medium.url}/>
            <h6>{info.snippet.description}</h6>
            <h6>{info.snippet.channelTitle}</h6>
            <button onClick={handleWatchLater1}>Bookmark video</button>
            <br></br>
        </div>
    )
}

export default HomePage
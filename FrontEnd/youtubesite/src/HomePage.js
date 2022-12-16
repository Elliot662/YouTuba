import React from "react";
import "./HomePage.css"

const HomePage = ({info, handleWatchLater}) => {
    return(
        <div class="videos">
            <h3>{info.snippet.title}</h3>
            <img src={info.snippet.thumbnails.medium.url}/>
            <h6>{info.snippet.description}</h6>
            <h6>{info.snippet.channelTitle}</h6>
            <button onClick={() => handleWatchLater(info)}>Bookmark video</button>
            <br></br>
        </div>
    )
}

export default HomePage